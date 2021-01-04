import React, {useRef} from 'react'

interface OptionsProps {
userName: string;
newFirstname: () => void;
newUserGender: () => void;
}

const Options: React.FC<OptionsProps> = ({userName, newFirstname, newUserGender}) => {
  const inputFirstname = useRef<HTMLInputElement>(null);
  const selectGender = useRef<HTMLSelectElement>(null);

  const handleFirstname = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(inputFirstname && inputFirstname.current) {
      const firstname:string = inputFirstname.current.value;
      localStorage.setItem('userName', firstname)
      return newFirstname()
    }
  }

  const handleGender = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(selectGender && selectGender.current) {
      const gender:string = selectGender.current.value;
      localStorage.setItem('userGender', gender);
      return newUserGender();
    }
  
  }
   
    return (
      <div>
      <h1>{userName}, votre compte</h1>
      <div>
        <form onSubmit={(e) => handleFirstname(e)}>
        <label htmlFor="firstname">Votre prénom</label>
        <input ref={inputFirstname} type="text" name="firstname" placeholder={userName} />
        <button>Modifier</button>
        </form>
      </div>
      <div>
        <form onSubmit={(e) => handleGender(e)}>
          <label htmlFor="gender">Votre sexe</label>
          <select ref={selectGender} name="gender" id="gender">
          <option value={`${localStorage.getItem('userGender')}`}>Actuellement {localStorage.getItem('userGender') === 'female' ? 'Femme' : 'Homme'}</option>
          <option value="male">Homme</option>
          <option value="female">Femme</option>
          </select>
          <button>Modifier</button>
        </form>
      </div>
      </div>
    );
}

export default Options;