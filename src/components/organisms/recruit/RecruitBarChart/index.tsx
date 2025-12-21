'use client';

import { useState } from 'react';

import { useCountAnimation } from '@/hooks/useCountAnimation';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

import styles from './index.module.scss';

interface BarChartData {
  name: string;
  value: number;
  percentage: number;
  examples?: string;
}

interface RecruitBarChartProps {
  title: string;
  data: BarChartData[];
  barColor?: string;
  barWidthMultiplier?: number;
}

interface BarItemProps {
  item: BarChartData;
  barColor: string;
  barWidthMultiplier: number;
  maxValue: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  isHovered: boolean;
  mousePosition: { x: number; y: number };
}

function BarItem({
  item,
  barColor,
  barWidthMultiplier,
  maxValue,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  isHovered,
  mousePosition,
}: BarItemProps) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });

  const displayValue = useCountAnimation({
    end: item.value,
    duration: 3000,
    delay: 500,
    enabled: isVisible,
  });

  return (
    <div
      ref={ref}
      className={styles.barItem}
      tabIndex={0}
      role="button"
      aria-label={`${item.name}: ${item.value}명, ${item.percentage}퍼센트`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onFocus={onMouseEnter}
      onBlur={onMouseLeave}
    >
      <p className={styles.label}>{item.name}</p>
      <div className={styles.barWrapper}>
        <div
          className={styles.bar}
          style={{
            width: isVisible ? `${item.value * barWidthMultiplier}px` : '0px',
            maxWidth: `${(item.value / maxValue) * 90}%`,
            backgroundColor: barColor,
          }}
        />
        <span className={styles.value}>{displayValue}명</span>
      </div>
      {isHovered && (
        <div
          className={styles.tooltip}
          style={{
            left: `${mousePosition.x + 12}px`,
            top: `${mousePosition.y + 12}px`,
          }}
        >
          <p className={styles.tooltipLabel}>{item.name}</p>
          <p className={styles.tooltipValue}>
            {item.value}명 ({item.percentage}%)
          </p>
          {item.examples && (
            <p className={styles.tooltipExamples}>{item.examples}</p>
          )}
        </div>
      )}
    </div>
  );
}

function RecruitBarChart({
  title,
  data,
  barColor = '#FFB24D',
  barWidthMultiplier = 10,
}: RecruitBarChartProps) {
  const [hoveredItem, setHoveredItem] = useState<BarChartData | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const maxValue = Math.max(...data.map((d) => d.value));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className={styles.wrapper} aria-label={`${title} 차트`}>
      <div className={styles.visuallyHidden}>
        {title}: {data.map((item) => `${item.name} ${item.value}명`).join(', ')}
      </div>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      {data.map((item) => (
        <BarItem
          key={item.name}
          item={item}
          barColor={barColor}
          barWidthMultiplier={barWidthMultiplier}
          maxValue={maxValue}
          onMouseEnter={() => setHoveredItem(item)}
          onMouseLeave={() => setHoveredItem(null)}
          onMouseMove={handleMouseMove}
          isHovered={hoveredItem?.name === item.name}
          mousePosition={mousePosition}
        />
      ))}
    </section>
  );
}

export default RecruitBarChart;
