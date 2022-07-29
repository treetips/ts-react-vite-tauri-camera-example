import { Box } from "@mui/material";
import { ComponentProps } from "react";
import { CameraPresenter } from "../Camera/presenter";
import { CameraOptionPresenter } from "./presenter";

type Props = Pick<
  ComponentProps<typeof CameraPresenter>,
  "onCameraWidth" | "onCameraHeight" | "onCameraNoiseSuppression"
>;

export const CameraOption: React.FC<Props> = ({
  onCameraWidth,
  onCameraHeight,
  onCameraNoiseSuppression,
}) => {
  return (
    <Box>
      <CameraOptionPresenter
        onCameraWidth={onCameraWidth}
        onCameraHeight={onCameraHeight}
        onCameraNoiseSuppression={onCameraNoiseSuppression}
      />
    </Box>
  );
};
