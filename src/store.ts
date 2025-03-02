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
  addTeams: (teams: Team[]) => void;
  // removeTeam:(id:number)=>void;
};

const useStore = create<Store>((set) => ({
  teams: [],
  addTeam: (team) => set((state) => ({ teams: [...state.teams, team] })),
  addTeams: (teams) => set(() => ({ teams: teams })),
}));

export default useStore;
