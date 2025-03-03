// In-memory storage (resets on function restart)
// this is just a serverless function to help simulate api
const teams = [
  {
    content: `But now you can use Material's dynamic color feature to automatically generate accessible colors assigned to each "number."`,
    name: "Design Team",
    depart: 2,
    unit: 3,
    id: 1,
  },
  {
    content: `But now you can use Material's dynamic color feature to automatically generate accessible colors assigned to each "number."`,
    name: "Design Team",
    depart: 1,
    unit: 2,
    id: 2,
  },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(teams);
  }

  if (req.method === "POST") {
    // const {content,name,depart,unit } = req.body as Partial<Team>;

    const newUser = { id: teams.length + 1, ...req.body.data };
    teams.push(newUser);

    return res.status(201).json(newUser);
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
