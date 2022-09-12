import * as Styled from './styles';
import cartImg from '../../images/shoppingCart.svg';
import { useSelector } from 'react-redux';
import { selectQuantity } from '../../redux/selectors/cart';
import { ThunkDispatch } from 'redux-thunk';
import { Store } from '../../types/Store';
import { AnyAction } from 'redux';
import { showCart } from '../../redux/actions/cart';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch: ThunkDispatch<Store, unknown, AnyAction> = useDispatch();
  const productsInCart: number = useSelector(selectQuantity);

  return (
    <Styled.Container>
      <Styled.Title>
        <p className="stronger">MKS</p>
        <p>Sistemas</p>
      </Styled.Title>
      <Styled.CartBtn
        type="button"
        onClick={ () => dispatch(showCart()) }
        data-testid="cart-button"
      >
        <img
          alt="carrinho de compras"
          src={ cartImg }
        />
        <p data-testid="cart-counter">{ productsInCart }</p>
      </Styled.CartBtn>
    </Styled.Container>
  )
};

export default Header;
