import type { NextPage } from "next";

const Beers: NextPage = () => {
  return (
    <div>
      <h1>Beers</h1>
      <ul>
        <li>
          <a href="./beers/ale">ale</a>
        </li>
        <li>
          <a href="./beers/stouts">stouts</a>
        </li>
      </ul>
    </div>
  );
};

export default Beers;
