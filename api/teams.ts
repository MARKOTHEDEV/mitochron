import { VercelRequest, VercelResponse } from "@vercel/node";

interface Team {
  id?: number;
  content: string;
  name: string;
  depart: number;
  unit: number;
}

// In-memory storage (resets on function restart)
const teams: Team[] = [
  {
    content: `But now you can use Material's dynamic color feature to automatically generate accessible colors assigned to each "number."`,
    name: "Design Team",
    depart: 2,
    unit: 3,
  },
  {
    content: `But now you can use Material's dynamic color feature to automatically generate accessible colors assigned to each "number."`,
    name: "Design Team",
    depart: 1,
    unit: 2,
  },
];

module.exports = function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET") {
    return res.status(200).json(teams);
  }

  if (req.method === "POST") {
    // const {content,name,depart,unit } = req.body as Partial<Team>;

    const newUser: Team = { id: teams.length + 1, ...req.body };
    teams.push(newUser);

    return res.status(201).json(newUser);
  }

  return res.status(405).json({ error: "Method Not Allowed" });
};
