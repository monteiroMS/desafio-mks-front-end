import * as Styled from './styles';
import cartImg from '../../images/shoppingCart.svg';

const Header = () => {
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
        <p>0</p>
      </Styled.CartBox>
    </Styled.Container>
  )
};

export default Header;
