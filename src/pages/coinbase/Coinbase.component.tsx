import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Slider from '../../components/slider/Slider.component';
import CoinbaseCard from '../../components/coinbaseCard/CoinbaseCard.component';

import { selectProducts } from '../../redux/coinbase/coinbase.selects';
import { coinbaseCurrencies, fetchCoinbaseData } from '../../redux/coinbase/coinbaseSlice';

import { CoinbaseContainer } from './Component.styles';
import { AppDispatch, RootState } from '../../redux/store';

type CoinbasePageProps = {
  productsCollection: coinbaseCurrencies[] | null;
  fetchCoinbaseData: Function;
};

export const CoinbasePage: React.FC<CoinbasePageProps> = ({
  fetchCoinbaseData,
  productsCollection,
}) => {
  useEffect(() => {
    if (!productsCollection) {
      fetchCoinbaseData();
    }
    return () => {};
  }, []);

  console.log('RENDER COINBASE PAGE');

  return (
    <CoinbaseContainer>
      {productsCollection && productsCollection.length > 0 && (
        <Slider slides={productsCollection} Slide={CoinbaseCard}></Slider>
      )}
    </CoinbaseContainer>
  );
};

const mapStateToProps = (state: RootState) => ({
  productsCollection: selectProducts(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  fetchCoinbaseData: () => dispatch(fetchCoinbaseData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinbasePage);
