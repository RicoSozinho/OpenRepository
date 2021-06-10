import React from 'react';
import { ServiceSection } from '../../components';
import { serviceObjOne } from './Data.js';

const Services = () => {
  return (
    <>
      <ServiceSection {...serviceObjOne}/>
    </>
  );
}

export default Services;
