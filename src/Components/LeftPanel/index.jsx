import "./index.css";

import ExplicitArea from "../ExplicitArea";
import Drawer from "../Drawer";

function LeftPanel(props) {
  const { children } = props;
  return (
    <div class="PanelDiv">
      <div class="LeftPanel">
        <div style={{ height: "2rem" }}>
        </div>
        <Drawer />
      </div>

      <ExplicitArea>{children}</ExplicitArea>
    </div>
  );
}

export default LeftPanel;
