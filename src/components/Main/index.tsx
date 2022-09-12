import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { getProducts } from '../../redux/actions/products';
import { selectLoading, selectProducts } from '../../redux/selectors/products';
import { Store } from '../../types/Store';
import ProductCard from '../ProductCard';
import Skeleton from '../Skeleton';
import * as Styled from './styles';

const Main = () => {
  const dispatch: ThunkDispatch<Store, unknown, AnyAction> = useDispatch();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectLoading);
  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) {
    const cardsQuantity = Array.from({ length: 8 }, (_x, index) => index);
    return (
      <Styled.Container>
        {
          cardsQuantity.map((number) => (
            <Skeleton key={ number }></Skeleton>
          ))
        }
      </Styled.Container>
    );
  }

  return (
    <Styled.Container>
      {
        products.map((product) => (
          <ProductCard
            key={ `${product.id}${product.name}` }
            product={ product }
          />
        ))
      }
    </Styled.Container>
  );
};

export default Main;
