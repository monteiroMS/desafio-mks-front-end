import { useSelector } from 'react-redux';
import Cart from '../../components/Cart';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Main from '../../components/Main';
import { selectShowCart } from '../../redux/selectors/cart';
import * as Styled from './styles';

const Home = () => {
  const showCart = useSelector(selectShowCart);

  return (
    <Styled.App>
      <Styled.Container>
        <Header />
        <Main />
        <Footer />
      </Styled.Container>
      { showCart && <Cart /> }
    </Styled.App>
  )
};

export default Home;
