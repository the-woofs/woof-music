import "./index.css";

function BottomBar(props) {
  return (
    <div class="BottomBar">
      <div class="BottomBarContainer">{props.children}</div>
    </div>
  );
}

export default BottomBar;
