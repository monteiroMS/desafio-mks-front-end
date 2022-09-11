import * as Styled from './styles';
import cartImg from '../../images/shoppingCart.svg';
import { useSelector } from 'react-redux';
import { selectQuantity } from '../../redux/selectors/cart';

const Header = () => {
  const productsInCart: number = useSelector(selectQuantity);

  return (
    <Styled.Container>
      <Styled.Title>
        <p className="stronger">MKS</p>
        <p>Sistemas</p>
      </Styled.Title>
      <Styled.CartBox>
        <img
          alt="carrinho de compras"
          src={ cartImg }
        />
        <p>{ productsInCart }</p>
      </Styled.CartBox>
    </Styled.Container>
  )
};

export default Header;
