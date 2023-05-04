import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import { StyledSection } from './styles/common';
import Footer from './components/Footer';

const App = () => {
  return (
    <StyledSection gap={184}>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </StyledSection>
  );
};

export default App;
