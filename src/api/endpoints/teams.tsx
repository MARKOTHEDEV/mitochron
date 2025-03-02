// Everything that has to do with team endpoint just  write it here

import { Team } from "@/store";
import apiInstance from "../apiInstance";

export const getTeamsApi = async (): Promise<Team[]> => {
  const resp = await apiInstance.get("/teams");
  return resp.data;
};

export const createTeamsApi = async ({
  newTeam,
}: {
  newTeam: Team;
}): Promise<Team[]> => {
  const resp = await apiInstance.post("/teams", {
    data: newTeam,
  });
  return resp.data;
};
