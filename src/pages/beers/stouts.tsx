import type { NextPage } from "next";
import axios from "axios";
import useSWR from "swr";
import { Beer } from "../../types/Beers";
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Stouts: NextPage = () => {
  const { data, error } = useSWR(
    "https://api.sampleapis.com/beers/stouts",
    fetcher
  );

  if (error) return <div>Fail to Loading...</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <h1>Beers</h1>
      <main>
        {data.map((beerData: Beer) => {
          const { id, name, price } = beerData;
          return (
            <div key={`stouts-beer-list-${id}`}>
              <h1>{name}</h1>
              <p>{price}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Stouts;
