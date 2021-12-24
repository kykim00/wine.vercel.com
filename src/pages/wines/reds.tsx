import type { NextPage } from "next";
import { WineCardList } from "../../components/WineCardList";

const Reds: NextPage = () => {
  const name = "reds";
  return <WineCardList name={name} />;
};

export default Reds;
