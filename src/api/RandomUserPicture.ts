import { useEffect, useState } from 'react';

export const RandomUserPicture = (gender: string) => {
  const [profilePicture, setProfilePicture] = useState('');

  const fetchPicture = (gender: string) => {
    return fetch(`https://randomuser.me/api/?inc=picture&gender=${gender}`)
      .then((response) => response.json())
      .then((data) => data.results[0].picture.large)
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    fetchPicture(gender).then((randomPicture) =>
      setProfilePicture(randomPicture)
    );
  }, [gender]);

  return profilePicture;
};
