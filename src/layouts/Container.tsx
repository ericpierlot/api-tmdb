import React from 'react';
import { Main, SectionPage } from '../assets/styled/Container.styled';

interface ContainerProps {}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <>
      <Main>
        <SectionPage>{children}</SectionPage>
      </Main>
    </>
  );
};

export default Container;
