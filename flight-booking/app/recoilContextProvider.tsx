"use client";

import { RecoilRoot, atom } from "recoil";
interface User {
  phoneNumber: string;
  username: string;
}
export const navStateAtom = atom<string>({
    key: 'navStateAtom',
    default: "home",
});

const defaultUser: User = {
  phoneNumber: '',
  username: ''
};

export const userAtom = atom<User>({
  key: 'userAtom',
  default: defaultUser
});

export default function RecoilContextProvider({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}