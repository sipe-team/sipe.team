import Header from './components/Header';
import SectionA from './components/SectionA';
import SectionB from './components/SectionB';
import SectionC from './components/SectionC';
import { StyledSection } from './styles/common';
import Footer from './components/Footer';

const App = () => {
  return (
    <StyledSection gap={184}>
      <Header />
      <SectionA />
      <SectionB />
      <SectionC />
      <Footer />
    </StyledSection>
  );
};

export default App;
