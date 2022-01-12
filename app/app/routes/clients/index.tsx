import {
    Link
} from "remix";
import { useLoaderData } from "remix";
import { getClients } from "../../entities/client";
import type { Client } from "../../entities/client";

export const loader = () => {
    return getClients();
};

export default function ClientIndex() {
    const clients = useLoaderData<Client[]>();

    return (
      <div>
        <h1>Clients</h1>

        <ul>
        {clients.map(client => (
          <li key={client.id}>
            <Link to={String(client.id)}>{client.name}</Link>
          </li>
        ))}
      </ul>
      </div>
    );
}
  