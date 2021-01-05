import styled from 'styled-components';

export const WelcomeMessage = styled.article`
  text-align: center;
  form {
    margin: 2rem auto;

    width: 250px;
    display: flex;
    flex-direction: column;
    input {
      padding: 0.5rem 0.5rem;
      font-size: 1rem;
      border: 0;
      outline: none;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      background-color: rgba(255, 255, 255, 0.2);
      border-bottom: 1px solid ${({ theme }) => theme.navText};
      color: ${({ theme }) => theme.navText};
      font-weight: bold;
    }
    select {
      padding: 0.5rem 0.5rem;
      font-size: 1rem;
      border: 0;
      outline: none;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      background-color: rgba(255, 255, 255, 0.2);
      border-bottom: 1px solid ${({ theme }) => theme.navText};
      color: ${({ theme }) => theme.navText};
      font-weight: bold;

      option {
        background-color: rgb(73, 80, 82);
        font-weight: bold;
        font-size: 1rem;
        :first-child {
          font-weight: normal;
        }
      }
    }
    label {
      padding-bottom: 0.5rem;
      font-weight: bold;
    }

    button {
      margin: 1rem 0;
      padding: 0.5rem 0;
      background-color: transparent;
      color: ${({ theme }) => theme.navText};
      border: 1px solid ${({ theme }) => theme.navText};
      font-weight: bold;
      border-radius: 5px;
      text-transform: uppercase;
      cursor: pointer;
      outline: none;
      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
      &:disabled {
        pointer-events: none;
        opacity: 0.6;
      }
    }
  }
  @media (max-width: 840px) {
    width: 85vw;
  }
`;

export const Reinit = styled.button`
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: ${({ theme }) => theme.navText};
  border: 1px solid ${({ theme }) => theme.navText};
  font-weight: bold;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.6;
  }
`;
