import type { NextPage } from "next";
import axios from "axios";
import useSWR from "swr";
import { Beer } from "../../types/Beers";
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Ale: NextPage = () => {
  const { data, error } = useSWR(
    "https://api.sampleapis.com/beers/ale",
    fetcher
  );

  if (error) return <div>Fail to Loading...</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <h1>Ale</h1>
      <main>
        {data.map((beerData: Beer) => {
          const { id, name, price } = beerData;
          return (
            <div key={`ale-beer-list-${id}`}>
              <h1>{name}</h1>
              <p>{price}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Ale;
