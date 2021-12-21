import type { NextPage } from "next";
import axios from "axios";
import useSWR from "swr";
import { Wine } from "../../types/Wine";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Reds: NextPage = () => {
  const { data, error } = useSWR(
    "https://api.sampleapis.com/wines/reds",
    fetcher
  );
  if (error) return <div>Failed to Loading...</div>;
  if (!data) return <div>...Loading</div>;
  return (
    <div>
      <h1>Reds</h1>
      <main>
        {data.map((wineData: Wine) => {
          const { id, wine, winery } = wineData;
          return (
            <div key={`reds-wine-list-${id}`}>
              <h1>{wine}</h1>
              <p>{winery}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Reds;
