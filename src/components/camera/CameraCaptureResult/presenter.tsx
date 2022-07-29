import { Box, Button } from "@mui/material";
import { ComponentProps } from "react";
import { CameraPresenter } from "../Camera/presenter";

type Props = {
  onSaveImage: () => void;
} & Pick<
  ComponentProps<typeof CameraPresenter>,
  "captureImageDataUri" | "onClearCaptureImage"
>;

export const CameraCaptureResultPresenter: React.FC<Props> = ({
  captureImageDataUri,
  onClearCaptureImage,
  onSaveImage,
}) => {
  return (
    <Box>
      <Box>
        <img src={captureImageDataUri} alt="Screenshot" />
      </Box>
      <Box>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={onSaveImage}
        >
          Save capture image
        </Button>
        <Button
          fullWidth
          variant="outlined"
          color="error"
          onClick={onClearCaptureImage}
        >
          Delete capture image
        </Button>
      </Box>
    </Box>
  );
};
