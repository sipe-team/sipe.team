import styled from '@emotion/styled';

import useDeviceType from '@/hook/useDeviceType';

import Footer from './components/Footer';
import Header from './components/Header';
import SectionA from './components/SectionA';
import SectionB from './components/SectionB';
import SectionC from './components/SectionC';
import { StyledSection } from './styles/common';

const App = () => {
  const { isMobile } = useDeviceType();

  const gap = {
    desktop: {
      sectionAtoB: 247,
      sectionBtoC: 198,
      sectionCtoFooter: 184,
    },
    mobile: {
      sectionAtoB: 104,
      sectionBtoC: 104,
      sectionCtoFooter: 104,
    },
  }[isMobile ? 'desktop' : 'mobile'];

  return (
    <StyledSection>
      <Header />
      <SectionA />
      <Divider gap={gap.sectionAtoB} />
      <SectionB />
      <Divider gap={gap.sectionBtoC} />
      <SectionC />
      <Divider gap={gap.sectionCtoFooter} />
      <Footer />
    </StyledSection>
  );
};

const Divider = styled.div<{ gap: number }>`
  margin-top: ${({ gap }) => gap / 2}px;
  margin-bottom: ${({ gap }) => gap / 2}px;
`;

export default App;
