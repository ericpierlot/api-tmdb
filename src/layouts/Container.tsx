import React from 'react'
import styled from 'styled-components';

interface ContainerProps {

}

const Main = styled.main`
background: rgb(73,80,82);
background: linear-gradient(139deg, rgba(73,80,82,1) 0%, rgba(28,42,47,1) 100%);
flex : 1;
@media (max-width:840px) {
  overflow: hidden;
}
`
// const Header = styled.header`
// display: flex;
// padding: 1rem;

// form {
// button {
//   margin-left: 1rem;
// }
// }
// div:nth-child(2) {
//   span + span {
//     margin-left: 2rem;
//   }
// }
// `
const SectionPage = styled.section`
padding: 1rem 2rem;
`

const Container: React.FC<ContainerProps> = ({children}) => {

    return (
      <>
      <Main>
        <SectionPage>
        {children}
        </SectionPage>
      </Main>
      </>
    );
}

export default Container;