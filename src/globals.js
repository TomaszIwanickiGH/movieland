import { create } from 'zustand';

const useGlobals = create((set) => ({
  search: '',
  setSearch: (value) => set({ search: value.charAt(0).toUpperCase() + value.slice(1) }),
}));

export default useGlobals;
