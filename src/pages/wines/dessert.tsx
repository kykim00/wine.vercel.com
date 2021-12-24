import type { NextPage } from "next";
import { WineCardList } from "../../components/WineCardList";

const Dessert: NextPage = () => {
  const name = "dessert";
  return <WineCardList name={name} />;
};

export default Dessert;
