function HighlightWords(props) {
  const highlightWords = {
    color: "rgb(26 115 232)",
    fontSize: "3rem",
    textDecorationLine: "underline",
  };
  return <span style={highlightWords}>{props.text}</span>;
}

export default HighlightWords;
