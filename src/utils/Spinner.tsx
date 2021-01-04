import React from 'react'
import Spinn from '../assets/spinner.png';

interface SpinnerProps {
width?: number,
height?: number,
}

export const Spinner: React.FC<SpinnerProps> = ({width = 100, height = 100}) => {
    return (
      <>
      <img src={Spinn} alt='Chargement..' width={width} height={height} />
      </>
    );
}