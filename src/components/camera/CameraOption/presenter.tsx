import {
  FormControl,
  FormGroup,
  FormLabel,
  Slider,
  Switch,
} from "@mui/material";
import { ComponentProps } from "react";
import { CameraPresenter } from "../Camera/presenter";

type Props = Pick<
  ComponentProps<typeof CameraPresenter>,
  "onCameraWidth" | "onCameraHeight" | "onCameraNoiseSuppression"
>;

export const CameraOptionPresenter: React.FC<Props> = ({
  onCameraWidth,
  onCameraHeight,
  onCameraNoiseSuppression,
}) => {
  return (
    <FormGroup
      sx={{
        width: "100%",
        textAlign: "left",
      }}
    >
      <FormControl component="fieldset">
        <FormLabel component="legend">Width</FormLabel>
        <Slider
          size="medium"
          min={100}
          max={1920}
          step={100}
          defaultValue={400}
          aria-label="Camera Width"
          valueLabelDisplay="auto"
          onChange={onCameraWidth}
          marks
        />
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">Height</FormLabel>
        <Slider
          size="medium"
          min={100}
          max={1020}
          step={100}
          defaultValue={400}
          aria-label="Camera Width"
          valueLabelDisplay="auto"
          onChange={onCameraHeight}
          marks
        />
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">Noise Suppression</FormLabel>
        <Switch defaultChecked onChange={onCameraNoiseSuppression} />
      </FormControl>
    </FormGroup>
  );
};
