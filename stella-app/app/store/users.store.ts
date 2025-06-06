import { User } from '@/model/user';
import { create } from 'zustand';

export interface UserState {
  users: User[];
  add: (user: User) => void,
  remove: (id: number) => void,
}

const useUsers = create<UserState>((set) => ({
  users: [{ id: 1, name: 'Fabio' }, { id: 2, name: 'Lorenzo' }],
  add: (user: User) => {
    set(s => ({ users: [...s.users, user] }))
  },
  remove: (id: number) => {
    set(s => ({ users: s.users.filter(item => item.id !== id ) }))
  },
}))

export default useUsers;