import { LayoutStyles } from "../styles/layout";
import { Main } from "./main";
import { dataSelector } from "../redux/dataSlice";
import { useAppSelector } from "../redux/hooks";
import ReactConfetti from "react-confetti";

const Layout = () => {
  const { bgTheme, hasEnded } = useAppSelector(dataSelector);
  return (
    <LayoutStyles color={bgTheme.color} supcolor={bgTheme.supcolor}>
      <div className="one"></div>
      <Main />
      <div className="two"></div>
      {hasEnded && <ReactConfetti />}
    </LayoutStyles>
  );
};

export default Layout;

// What is left
// Timer 
// sound effects!