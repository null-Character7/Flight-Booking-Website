"use client";

import { RecoilRoot, atom } from "recoil";
export const navStateAtom = atom<string>({
    key: 'navStateAtom',
    default: "home",
});

export default function RecoilContextProvider({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}