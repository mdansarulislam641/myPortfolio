import React from 'react';
import Particles from 'react-tsparticles';
import particalConfig from './Partical.config';

const ParticalBackground = () => {
    return (
      <>
      <Particles params={particalConfig}></Particles>
      </>
    );
};

export default ParticalBackground;