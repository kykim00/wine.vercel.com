import styled from "@emotion/styled";
import Link from "next/link";
import { ROUTES } from "../../constants";
interface ROUTE {
  ID: number;
  PATH: string;
  LABEL: string;
  SUBS?: Array<ROUTE>;
}
export const Navigation = () => {
  return (
    <HeaderContainer>
      <h1>Wine and Beers</h1>
      <AlcholeContainer>
        {ROUTES.map((routeObject: ROUTE) => {
          return (
            <WineBeer key={routeObject.ID}>
              <Link href={routeObject.PATH}>
                <a>{routeObject.LABEL}</a>
              </Link>
              <ul>
                {routeObject.SUBS &&
                  routeObject.SUBS.map((subRouteObject) => {
                    return (
                      <li key={subRouteObject.ID}>
                        <Link
                          href={`${routeObject.PATH}${subRouteObject.PATH}`}
                        >
                          <a>{subRouteObject.LABEL}</a>
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </WineBeer>
          );
        })}
      </AlcholeContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  max-width: 1350px;
  margin: auto;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 5em 0;
  background-color: white;
  h1 {
    margin: -1em 0 1em 0;
  }
`;

const AlcholeContainer = styled.ul`
  list-style: none;
  display: flex;
  font-size: 1.6em;
  justify-content: center;
  ul {
    display: none;
    background: black;
    color: white;
    position: fixed;
    padding: 0.5em 1em;
    border-radius: 1em;
    margin-left: -1.5em;

    li {
      font-size: 0.8em;
    }
  }
  li + li {
    margin-left: 1.5em;
  }
  &:hover > * ul {
    display: none;
  }
  &:hover > *:hover ul {
    display: flex;
    justify-content: flex-start;
    flex-wrap: no-wrap;
  }
`;

const WineBeer = styled.li``;
