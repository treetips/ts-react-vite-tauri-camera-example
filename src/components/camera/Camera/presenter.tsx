import { Box, Button, Card, Typography } from "@mui/material";
import { ChangeEvent } from "react";
import Webcam from "react-webcam";
import { CameraCaptureResult } from "../CameraCaptureResult";
import { CameraOption } from "../CameraOption";

type Props = {
  webcamRef: React.RefObject<Webcam>;
  captureImageDataUri?: string;
  videoConstraints?: boolean | MediaTrackConstraints;
  onCameraWidth: (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => void;
  onCameraHeight: (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => void;
  onCameraNoiseSuppression: (e: ChangeEvent<HTMLInputElement>) => void;
  onCapture: () => void;
  onClearCaptureImage: () => void;
};

export const CameraPresenter: React.FC<Props> = ({
  webcamRef,
  captureImageDataUri,
  videoConstraints,
  onCameraWidth,
  onCameraHeight,
  onCameraNoiseSuppression,
  onCapture,
  onClearCaptureImage,
}) => {
  return (
    <Box>
      <Typography component="h1" variant="h3">
        Camera
      </Typography>

      <Card
        elevation={7}
        sx={(theme) => ({
          padding: theme.spacing(2),
        })}
      >
        <CameraOption
          onCameraWidth={onCameraWidth}
          onCameraHeight={onCameraHeight}
          onCameraNoiseSuppression={onCameraNoiseSuppression}
        />

        <Box>
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/png"
            videoConstraints={videoConstraints}
          />
        </Box>
        <Button fullWidth variant="contained" onClick={onCapture}>
          Capture image
        </Button>
      </Card>

      {captureImageDataUri && (
        <Card
          elevation={7}
          sx={(theme) => ({
            padding: theme.spacing(2),
            marginTop: theme.spacing(2),
          })}
        >
          <CameraCaptureResult
            captureImageDataUri={captureImageDataUri}
            onClearCaptureImage={onClearCaptureImage}
          />
        </Card>
      )}
    </Box>
  );
};
