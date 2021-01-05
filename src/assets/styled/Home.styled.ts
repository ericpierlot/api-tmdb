import styled from 'styled-components';

export const Container = styled.article`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  h2 {
  }
  @media (max-width: 840px) {
    margin-top: 0;
    width: 85vw;
    h2 {
      text-align: center;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1360px) {
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 840px) {
    flex-direction: column;
  }
`;

export const Pictures = styled.div`
  display: flex;
  border-radius: 15px;
  justify-content: center;
  height: 225px;
  @media (max-width: 1360px) {
    flex-direction: column;
    height: 450px;
    flex: 1;
  }
  @media (max-width: 840px) {
    flex-direction: column;
    height: 450px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      cursor: pointer;
      border: none;
      background-color: transparent;
      font-size: 5rem;
      outline: none;
      transition: all 330ms ease;
      &:hover {
        color: ${({ theme }) => theme.navText};
      }
      &:disabled {
        pointer-events: none;
      }
      @media (max-width: 1360px) {
        font-size: 3rem;
        transform: rotateZ(90deg);
      }
      @media (max-width: 840px) {
        font-size: 3rem;
        transform: rotateZ(90deg);
      }
    }
  }

  margin-bottom: 2rem;
`;

export const Notations = styled.div`
  width: 40%;
  padding: 1rem;
  margin: auto;
  a {
    text-decoration: none;
  }
  @media (max-width: 1360px) {
    width: 100%;
    text-align: center;
    padding: 0;
  }
  @media (max-width: 840px) {
    width: 100%;
    text-align: center;
    padding: 0;
  }
`;

export const CardMovie = styled.div<any>`
  position: relative;
  width: 250px;
  height: 250px;
  @media (max-width: 1360px) {
    width: 70%;
    height: 100px;
    margin: auto;
    margin-bottom: 1rem;
    &:hover {
      height: 500px;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
    }
  }
  @media (max-width: 840px) {
    width: 100%;
    height: 100px;
  }
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  background-image: url(${(props) => props.afficheMovie});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15px;
  @media (max-width: 840px) {
    background-position: center;
    border-radius: 5px;
  }
  h2 {
    position: absolute;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    bottom: -20px;
    left: 0;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding: 0 1rem 0 0.5rem;
    @media (max-width: 840px) {
      bottom: -11px;
      font-size: 0.8rem;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
  transition: all 330ms ease;
  &:hover {
    transform: scale(1.05, 1.05);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
  }
  @media (max-width: 1360px) {
    background-position: center;
    &:hover {
      transform: none;
    }
  }
  margin: 0 1rem;
  @media (max-width: 840px) {
    margin: 0.5rem 0;
  }
`;

export const RectangleTop = styled.div<any>`
  height: 150px;
  border-radius: 10px;
  background-image: url(${(props) => props.afficheMovie});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);

  transition: all 0.5s linear;
  div {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0rem 0.5rem;
    width: 100%;
    font-size: 1rem;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.6);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &:hover {
    height: 300px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
  }
  margin: 1rem 0;
  @media (max-width: 1360px) {
    width: 70%;
    background-size: cover;
    margin: auto;
    margin-bottom: 1rem;
    div {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 840px) {
    width: 100%;
    div {
      font-size: 0.8rem;
    }
  }
`;

export const RectangleTop2 = styled.div<any>`
  height: 150px;
  border-radius: 10px;
  background-image: url(${(props) => props.afficheMovie});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);

  transition: all 0.5s linear;
  div {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0rem 0.5rem;
    width: 100%;
    font-size: 1rem;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.6);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  margin: 1rem 0;
  &:hover {
    height: 300px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
  }
  @media (max-width: 1360px) {
    width: 100%;
    div {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 840px) {
    width: 100%;
    div {
      font-size: 0.8rem;
    }
  }
`;
