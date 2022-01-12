import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";

export type Client = {
    id: number;
    name: string;
};

// relative to the server output not the source!
const clientsPath = path.join(__dirname, "../", "clients");
console.log(clientsPath)

export async function getClients() {
  const dir = await fs.readdir(clientsPath);
  return Promise.all(
    dir.map(async filename => {
      const file = await fs.readFile(
        path.join(clientsPath, filename)
      );
      const { attributes } = parseFrontMatter<Client>(
        file.toString()
      );
      return {
        id: String(attributes.id),
        name: attributes.name
      };
    })
  );
}