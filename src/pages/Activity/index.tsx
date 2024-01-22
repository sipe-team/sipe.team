import ContentWithTitle from '@/components/ContentWithTitle';
import InfiniteScroll from '@/components/InfiniteScroll';
import Layout from '@/components/Layout';
import { ActiveCard } from '@/pages/Activity/components/ActiveCard';

import * as S from './styled';

const temp = () => {
  return (
    <ActiveCard
      contentTitle="카드 UI 타이틀은 2줄까지 카드 UI 타이틀은 2줄까지 카드 UI 타이틀은
              2줄까지 카드 UI 타이틀은 2줄까지 카드 UI 타이틀은 2줄까지 카드 UI
              타이틀은 2줄까지 카드 UI 타이틀은 2줄까지 카드 UI 타이틀은 2줄까지
              카드 UI 타이틀은 2줄까지"
      contentBody=" 카드 UI 본문은 2줄까지 카드 UI 본문은 2줄까지 카드 UI 본문은
              2줄까지 카드 UI 본문은 2줄까지 카드 UI 본문은 2줄까지 카드 UI
              본문은 2줄까지 카드 UI 본문은 2줄까지 카드 UI 본문은 2줄까지 카드
              UI 본문은 2줄까지 카드 UI 본문은 2줄까지"
      userName="이지원"
      link="www.naver.com"
      createDate="test"
      className="card"
    />
  );
};

const activeCards = Array.from({ length: 100 }).map((_, index) => temp());

export default function Activity() {
  return (
    <Layout>
      <ContentWithTitle title="사이퍼 활동">
        <S.Wrapper>
          <InfiniteScroll items={activeCards} className="cards" />
        </S.Wrapper>
      </ContentWithTitle>
    </Layout>
  );
}
