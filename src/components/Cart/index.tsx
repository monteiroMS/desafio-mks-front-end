import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { toReal } from '../../helpers';
import { cleanCart, showCart } from '../../redux/actions/cart';
import { selectCart } from '../../redux/selectors/cart';
import { InCartProduct } from '../../types/Cart';
import { Store } from '../../types/Store';
import InCartProductCard from '../InCartProductCard';
import * as Styled from './styles';

const Cart = () => {
  const dispatch: ThunkDispatch<Store, unknown, AnyAction> = useDispatch();
  const cart = useSelector(selectCart);

  const getTotal = (): string => cart
    .reduce((acc, product) => acc + (Number(product.price) * product.quantity), 0)
    .toFixed(2);
  
  return (
    <Styled.Container>
      <Styled.TitleAndCloseBtn>
        <p>Carrinho de compras</p>
        <Styled.CloseCartBtn
          type="button"
          onClick={ () => dispatch(showCart()) }
        >
          X
        </Styled.CloseCartBtn>
      </Styled.TitleAndCloseBtn>
      <Styled.ProductsContainer>
        {
          !cart.length
            ? <p className="white-text">Você ainda não possui nenhum item em seu carrinho.</p>
            : cart.map((product: InCartProduct) => (
              <InCartProductCard
                key={ `inCart${product.name}${product.id}` }
                product={ product }
              />
            ))
        }
      </Styled.ProductsContainer>
      <Styled.PriceContainer>
        <p>Total:</p>
        <p>{ toReal(getTotal()) }</p>
      </Styled.PriceContainer>
      <Styled.FinishPurchaseBtn
        type="button"
        onClick={ () => dispatch(cleanCart()) }
      >
        Finalizar Compra
      </Styled.FinishPurchaseBtn>
    </Styled.Container>
  );
};

export default Cart;