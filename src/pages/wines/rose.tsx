import type { NextPage } from "next";
import { Wine } from "../../types/Wine";
import { useWineData } from "../../hooks/useWineData";
import { Error, Loading, WineCard } from "../../components";
const Rose: NextPage = () => {
  const name = "rose";
  const { data, error } = useWineData("rose");

  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <div>
      <h1>Wine</h1>
      <main>
        {data.map((wineData: Wine) => {
          return (
            <WineCard
              key={`${name}-wine-list-${wineData.id}`}
              wineData={wineData}
            ></WineCard>
          );
        })}
      </main>
    </div>
  );
};

export default Rose;
