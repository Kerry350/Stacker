import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";

export const loader = async ({ params }) => {
  return params.slug;
};

export default function ClientId() {
  const slug = useLoaderData();
  return (
    <div>
      <h1>Some Post: {slug}</h1>
    </div>
  );
}