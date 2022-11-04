import { useQuery } from '@tanstack/react-query';
import { GuestSession } from '../type/GuestSession';

export const createGuestSession = async (): Promise<GuestSession> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=e2f91aa33bd87c356d18db8b8978fe44`
  );

  return res.json();
};

export const useCreateGuestSession = (createNewSession: boolean) => {
  return useQuery({
    queryKey: ['account', 'guestSession'],
    enabled: createNewSession,
    queryFn: createGuestSession,
  });
};
