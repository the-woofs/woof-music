import "./index.css";

import Slider from "react-input-slider";

import CircularButton from "../CircularButton";
import { PlayArrowRounded, PauseRounded } from "@mui/icons-material";

function Controls(props) {
  const { playedValue, setPlayedValue, isPlaying, setIsPlaying } = props;

  return (
    <div class='Controls'>
      <div class='TopControls'>
        <div />
        <CircularButton onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? <PauseRounded /> : <PlayArrowRounded />}
        </CircularButton>
        <div />
      </div>
      <div>
        <Slider
          axis='x'
          x={playedValue * 100}
          xmax={100}
          xmin={0}
          onChange={({ x }) => {
            console.log(x);
            setPlayedValue(x / 100);
          }}
          styles={{
            track: {
              backgroundColor: "var(--background)",
              height: 7,
              width: "100%",
            },
            active: {
              backgroundColor: "var(--color12)",
            },
            thumb: {
              width: 15,
              height: 15,
              backgroundColor: "var(--color4)",
            },
            disabled: {
              opacity: 0.5,
            },
          }}
        />
      </div>
    </div>
  );
}

export default Controls;
