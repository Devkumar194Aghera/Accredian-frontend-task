import HighlightWords from "./HighlightWords";
import Tagline2 from "./Tagline2";
import "./Tagline1.css";
function Tagline1() {
  const styleline = { textDecorationLine: "underline" };
  return (
    <>
      <span className="tagline1">
        <HighlightWords text="Refer Course" /> and{" "}
        <HighlightWords text="Earn" /> up to <HighlightWords text="Rs 5,000" />{" "}
        every friend who enrolls!
      </span>
    </>
  );
}

export default Tagline1;
