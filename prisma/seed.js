import { client } from "../src/database/prismaClient.js";
import matches from "./matches.js";
import teams from "./teams.js";

async function runSeed() {
  await client.team.createMany({
    data: teams,
    skipDuplicates: true,
  });

  await client.match.createMany({
    data: matches.map((match) => ({
      ...match,
      datetime: new Date(match.datetime),
    })),
    skipDuplicates: true,
  });
}

runSeed()
  .then(() => console.log("Seed completed!"))
  .catch((e) => console.error(e))
  .finally(async () => await client.$disconnect());
