import styled from 'styled-components';

export const TOP = styled.div`
  input {
    width: 250px;
  }
  @media (max-width: 840px) {
    margin-top: 1rem;
  }
`;

export const Article = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem 0;
`;

export const CardMovie = styled.div<any>`
  position: relative;
  width: 300px;
  height: 300px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  background-image: url(${(props) => props.afficheMovie});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15px;
  h2 {
    position: absolute;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 0.5rem;
    bottom: -20px;
    left: 0;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  transition: all 330ms ease;
  &:hover {
    transform: scale(1.05, 1.05);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
  }
`;
