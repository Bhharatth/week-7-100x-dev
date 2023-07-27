import { atom, selector } from 'recoil';

export interface AuthState{
  token: string | null;
  username: string | null;
}

export const authState = atom<AuthState>({
  key: 'authState',
  default: { token: null, username: null },
});

export const authStateSelector = selector<AuthState>({
  key: 'authStateSelector',
  get: ({get})=> get(authState),
});