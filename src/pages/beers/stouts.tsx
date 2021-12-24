import type { NextPage } from "next";
import { BeerCardList } from "../../components/BeerCardList";

const Stouts: NextPage = () => {
  const name = "stouts";
  return <BeerCardList name={name} />;
};

export default Stouts;
