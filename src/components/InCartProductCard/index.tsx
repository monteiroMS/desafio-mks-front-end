import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { toReal } from '../../helpers';
import { lowerQuantity, removeFromCart, riseQuantity } from '../../redux/actions/cart';
import { selectCart } from '../../redux/selectors/cart';
import { InCartProduct } from '../../types/Cart';
import { Store } from '../../types/Store';
import * as Styled from './styles';

const InCartProductCard = ({ product }: { key: string, product: InCartProduct }) => {
  const dispatch: ThunkDispatch<Store, unknown, AnyAction> = useDispatch();
  const cart = useSelector(selectCart);

  const getQuantity = (product: InCartProduct) => {
    const element = cart.find(({ id }) => id === product.id);
    return element ? element.quantity : 0;
  };

  const getTotalPrice = () => {
    const result = Number(product.price) * product.quantity;
    return result.toFixed(2);
  }

  return (
    <Styled.Container
      data-testid="in-cart-product-card"
    >
      <img
        alt={ product.name }
        src={ product.photo }
      />
      <p className="title">{ product.name }</p>
      <Styled.QuantityContainer>
        <p className="qtd">Qtd.</p>
        <span className="pill">
          <button
            type="button"
            onClick={ () => dispatch(lowerQuantity(product)) }
            disabled={ product.quantity === 1 }
          >
            -
          </button>
          <p>{ getQuantity(product) }</p>
          <button
            type="button"
            onClick={ () => dispatch(riseQuantity(product)) }
          >
            +
          </button>
        </span>
      </Styled.QuantityContainer>
      <p className="price">{ toReal(getTotalPrice()) }</p>
      <button
        type="button"
        onClick={ () => dispatch(removeFromCart(product)) }
        className="delete-button"
      >
        X
      </button>
    </Styled.Container>
  );
};

export default InCartProductCard;
