import { useEffect, useState } from 'react';
import { useCreateGuestSession } from '../api/createGuestSession';
import { GuestSession } from '../type';

/* Attempts to grab the guest session needed to rate movies from local storage, 
if none is found the create session query is enabled and a new session is created and stored in local storage. */
export const useGuestSession = () => {
  const [localGuestSession, setLocalGuestSession] = useState<GuestSession>();
  const [createNewSession, setCreateNewSession] = useState<boolean>(false);
  const createGuestSessionQuery = useCreateGuestSession(createNewSession);

  useEffect(() => {
    const guestSessionString: string | null = localStorage.getItem('guest-session');
    if (guestSessionString) {
      const guestSession = JSON.parse(guestSessionString);
      setLocalGuestSession(guestSession);
    } else {
      setCreateNewSession(true);
    }
  }, []);

  useEffect(() => {
    if (!createGuestSessionQuery.data) return;
    localStorage.setItem('guest-session', JSON.stringify(createGuestSessionQuery.data));
    setLocalGuestSession(createGuestSessionQuery.data);
    setCreateNewSession(false);
  }, [createGuestSessionQuery.data, createGuestSessionQuery.isError]);

  return localGuestSession;
};
