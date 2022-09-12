import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { toReal } from '../../helpers';
import { addToCart } from '../../redux/actions/cart';
import { InCartProduct } from '../../types/Cart';
import { PropProduct } from '../../types/Product';
import shopBag from '../../images/shopBag.svg';
import * as Styled from './styles';

const ProductCard = ({ product }: PropProduct) => {
  const dispatch: Dispatch = useDispatch();

  const toCartProduct: InCartProduct = {
    ...product,
    quantity: 1,
  };
  
  return (
    <Styled.Container>
      <Styled.Photo
        alt={ `${product.name}` }
        src={ product.photo }
      />
      <Styled.TitlePriceContainer>
        <p>{ product.name }</p>
        <div>
          <p className="price">{ toReal(product.price) }</p>
        </div>
      </Styled.TitlePriceContainer>
      <Styled.Description>
        <p>{ product.description }</p>
      </Styled.Description>
      <Styled.Button
        type="button"
        onClick={ () => dispatch(addToCart(toCartProduct)) }
      >
        <img
          alt="shop bag"
          src={ shopBag }
        />
        COMPRAR
      </Styled.Button>
    </Styled.Container>
  );
};

export default ProductCard;
