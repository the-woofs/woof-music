import "./index.css";

import ExplicitArea from "../ExplicitArea";
import Drawer from "../Drawer";

function LeftPanel(props) {
  const {
    children,
    homeSetState,
    searchSetState,
    playlistSetState,
    queueSetState,
  } = props;

  return (
    <div class="PanelDiv">
      <div class="LeftPanel">
        <div style={{ height: "2rem" }}></div>
        <Drawer
          homeSetState={homeSetState}
          searchSetState={searchSetState}
          playlistSetState={playlistSetState}
          queueSetState={queueSetState}
        />
      </div>

      <ExplicitArea>{children}</ExplicitArea>
    </div>
  );
}

export default LeftPanel;
