'use client';

import { useEffect, useRef } from 'react';

import { usePathname } from 'next/navigation';

import styles from './index.module.scss';

// Content remains visible without JavaScript; motion is an enhancement only.
function ScrollEffects() {
  const pathname = usePathname();
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const main = document.querySelector('main');
    if (!main) return;

    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const seen = new WeakSet<Element>();
    const animations = new Set<Animation>();
    let frame = 0;
    let background: HTMLElement | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        let order = 0;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          if (preference.matches) continue;
          const animation = entry.target.animate(
            [
              { opacity: 0.25, transform: 'translateY(24px)' },
              { opacity: 1, transform: 'translateY(0)' },
            ],
            {
              duration: 650,
              delay: Math.min(order++, 3) * 65,
              easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
              fill: 'backwards',
            },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -24px 0px' },
    );

    const update = () => {
      frame = 0;
      const range = document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        range > 0 ? Math.min(1, Math.max(0, window.scrollY / range)) : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
        progressRef.current.style.opacity = range > 80 ? '1' : '0';
      }
      if (background) {
        const offset = preference.matches
          ? 0
          : Math.min(window.scrollY * 0.16, 56);
        background.style.setProperty('--scroll-offset', `${offset}px`);
      }
    };
    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const discover = () => {
      background = main.querySelector('[data-scroll-background]');
      main
        .querySelectorAll(
          '[data-scroll-reveal], [data-scroll-section] > :first-child, [data-scroll-stagger] > *',
        )
        .forEach((element) => {
          if (seen.has(element)) return;
          seen.add(element);
          observer.observe(element);
        });
      scheduleUpdate();
    };
    const onPreferenceChange = () => {
      if (preference.matches) {
        animations.forEach((animation) => animation.cancel());
        animations.clear();
      }
      scheduleUpdate();
    };
    const onFocus = (event: FocusEvent) => {
      animations.forEach((animation) => {
        const target = (animation.effect as KeyframeEffect)?.target;
        if (
          target instanceof Element &&
          target.contains(event.target as Node)
        ) {
          animation.finish();
        }
      });
    };

    discover();
    const mutationObserver = new MutationObserver(discover);
    mutationObserver.observe(main, { childList: true, subtree: true });
    const resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(main);
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    preference.addEventListener('change', onPreferenceChange);
    main.addEventListener('focusin', onFocus);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      mutationObserver.disconnect();
      resizeObserver.disconnect();
      animations.forEach((animation) => animation.cancel());
      background?.style.removeProperty('--scroll-offset');
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      preference.removeEventListener('change', onPreferenceChange);
      main.removeEventListener('focusin', onFocus);
    };
  }, [pathname]);

  return (
    <div ref={progressRef} className={styles.progress} aria-hidden="true" />
  );
}

export default ScrollEffects;
