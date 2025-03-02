import { create } from "zustand";

export type Team = {
  content: string;
  name: string;
  depart: number;
  unit: number;
  id?: string;
};
type Store = {
  teams: Team[];
  addTeam: (team: Team) => void;
  // removeTeam:(id:number)=>void;
};

const useStore = create<Store>((set) => ({
  teams: [],
  addTeam: (team) => set((state) => ({ teams: [...state.teams, team] })),
}));

export default useStore;
