import type { NextPage } from "next";
import { BeerCardList } from "../../components/BeerCardList";

const Ale: NextPage = () => {
  const name = "ale";
  return <BeerCardList name={name} />;
};

export default Ale;
