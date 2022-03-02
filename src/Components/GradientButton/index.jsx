import "./index.css";

function GradientButton(props) {
  return (
    <button className="special" onClick={props.onClick}>
      <p>{props.children}</p>
    </button>
  );
}

export default GradientButton;
