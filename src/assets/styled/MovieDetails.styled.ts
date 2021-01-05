import styled from 'styled-components';

export const Container = styled.article`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 840px) {
    width: 85vw;
  }
`;
export const CardDetails = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1360px) {
    flex-direction: column;
  }
  @media (max-width: 840px) {
    flex-direction: column;
  }
`;
export const Top = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.navText};
  padding: 0rem 1rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  h2 {
    margin-right: 1rem;
  }
  margin-bottom: 2rem;
  @media (max-width: 1360px) {
    padding: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      margin-right: 0;
    }
  }
  @media (max-width: 840px) {
    padding: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      margin-right: 0;
    }
  }
`;

export const Pictures = styled.div`
  display: flex;
  border-radius: 15px;
  justify-content: center;
  @media (max-width: 1360px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 840px) {
    flex-direction: column;
  }
  img {
    border-radius: 15px;
    width: auto;
    height: 400px;

    &:nth-child(1) {
      margin-right: 1rem;
      @media (max-width: 1360px) {
        max-width: 300px;
        margin-right: 0;
      }
      @media (max-width: 840px) {
        margin-right: 0;
      }
    }
    @media (max-width: 1360px) {
      &:nth-child(2) {
        display: none;
      }
    }
    @media (max-width: 840px) {
      &:nth-child(2) {
        display: none;
      }
    }
    margin-bottom: 2rem;
  }
  @media (max-width: 1360px) {
    width: 100%;
  }
  @media (max-width: 840px) {
    width: 100%;
  }
`;
export const Resume = styled.div`
  width: 45%;
  padding: 0 1rem;
  border: 1px solid ${({ theme }) => theme.navText};
  border-radius: 5px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  h2 {
    margin-bottom: 1rem;
  }
  dt {
    text-align: justify;
    line-height: 1.5rem;
  }
  @media (max-width: 1360px) {
    width: 100%;
  }
  @media (max-width: 840px) {
    width: 100%;
  }
`;

export const Notations = styled.div`
  width: 50%;
  padding: 1rem;
  border-radius: 5px;

  div {
    padding: 0 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.navText};
    margin: 1rem 0;
    border-radius: 5px;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  @media (max-width: 1360px) {
    width: 100%;
  }
  @media (max-width: 840px) {
    width: 100%;
  }
`;
export const BackButton = styled.button`
  width: 100px;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.navText};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.navText};
  outline: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const Commentaires = styled.div`
  margin-top: 5rem;
  @media (max-width: 840px) {
    width: 100%;
  }
`;

export const CardCom = styled.div`
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.navText};
  padding: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 840px) {
    overflow: auto;
    width: 100%;
  }
`;

export const Flex = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem;
  margin-top: 1rem;
  img {
    float: left;
    margin-right: 1rem;
  }
  p {
    padding-left: 1rem;
  }
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 1rem;
`;
