import React from 'react';
import { ProductSection } from '../../components';
import { productObjOne } from './Data.js';

const Products = () => {
  return (
    <>
      <ProductSection {...productObjOne}/>
    </>
  );
}

export default Products;
