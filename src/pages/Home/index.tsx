import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Main from '../../components/Main';
import * as Styled from './styles';

const Home = () => {
  return (
    <Styled.Container>
      <Header />
      <Main />
      <Footer />
    </Styled.Container>
  )
};

export default Home;
