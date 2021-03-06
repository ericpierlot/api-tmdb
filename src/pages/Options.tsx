import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { WelcomeMessage, Reinit } from '../assets/styled/Options.styled';

interface OptionsProps {
  userName: string;
  newFirstname: () => void;
  newUserGender: () => void;
  userGender: string;
}

const Options: React.FC<OptionsProps> = ({
  userName,
  newFirstname,
  newUserGender,
  userGender,
}) => {
  const inputFirstname = useRef<HTMLInputElement>(null);
  const selectGender = useRef<HTMLSelectElement>(null);
  let history = useHistory();
  const handleFirstname = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputFirstname && inputFirstname.current) {
      const firstname: string = inputFirstname.current.value;
      localStorage.setItem('userName', firstname);
      return newFirstname();
    }
  };

  const handleGender = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      selectGender &&
      selectGender.current &&
      selectGender.current.value !== ''
    ) {
      const gender: string = selectGender.current.value;
      localStorage.setItem('userGender', gender);
      newUserGender();
      return history.push('/');
    }
  };

  // const checkingGender = (gender:string | null) => {
  //   if(gender === 'female') return 'Femme';
  //   if(gender === 'male') return 'Homme';
  //   return 'Inconnu'
  // }

  const checkNew = (name: string, gender: string) => {
    if (name === null) return true;
    else if (name === 'invite') return true;
    if (gender === null) return true;
    else if (gender) return false;
  };

  return (
    <>
      {checkNew(userName, userGender) && (
        <WelcomeMessage>
          <h1>Nous vous souhaitons la bienvenue sur notre Application</h1>
          <p>
            Avant de commencer à naviguer, pour personnaliser votre navigation.
          </p>
          <p>Veuillez nous renseigner ces informations</p>

          {userName !== null && userName !== 'invite' ? (
            ''
          ) : (
            <div>
              <form onSubmit={(e) => handleFirstname(e)}>
                <label htmlFor='firstname'>Votre prénom</label>
                <input
                  ref={inputFirstname}
                  type='text'
                  name='firstname'
                  placeholder={userName}
                />
                <button>Modifier</button>
              </form>
            </div>
          )}
          {userName !== 'invite' && userName !== null && (
            <div>
              <h4>Une dernière information !</h4>
              <form onSubmit={(e) => handleGender(e)}>
                <label htmlFor='gender'>Votre sexe</label>
                <select ref={selectGender} name='gender'>
                  <option value=''>Veuillez définir votre sexe</option>
                  <option value='male'>Homme</option>
                  <option value='female'>Femme</option>
                </select>
                <button>Modifier</button>
              </form>
            </div>
          )}
        </WelcomeMessage>
      )}

      {userName !== null && userName !== 'invite' && userGender !== null && (
        <>
          <h1>{userName}, votre compte</h1>
          <Reinit
            onClick={() => {
              localStorage.removeItem('userGender');
              localStorage.removeItem('userName');
              newFirstname();
              newUserGender();
            }}
          >
            Reinitialiser
          </Reinit>
        </>
      )}
    </>
  );
};

export default Options;
