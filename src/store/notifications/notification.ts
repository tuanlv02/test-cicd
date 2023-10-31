import { atom } from 'jotai';

const initialNotification: { title: string; body: string; id: string }[] = [];

export const notificationAtom = atom(initialNotification);
