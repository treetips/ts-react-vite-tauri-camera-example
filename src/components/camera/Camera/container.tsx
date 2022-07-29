import { ChangeEvent, useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { CameraPresenter } from ".";
import { Layout } from "../../layout/Layout";

export const Camera: React.FC = () => {
  const [captureImageDataUri, setCaptureImageDataUri] = useState<string>();
  const [cameraWidth, setCameraWidth] = useState<number>(800);
  const [cameraHeight, setCameraHeight] = useState<number>(600);
  const [cameraNoiseSuppression, setCameraNoiseSuppression] =
    useState<boolean>(false);
  const webcamRef = useRef<Webcam>(null);

  const handleCameraWidth = (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => {
    setCameraWidth(Number(value));
  };

  const handleCameraHeight = (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => {
    setCameraHeight(Number(value));
  };

  const handleCameraNoiseSuppression = (e: ChangeEvent<HTMLInputElement>) => {
    setCameraNoiseSuppression(e.target.checked);
  };

  const handleCapture = useCallback(() => {
    const captureImageSrc = webcamRef.current?.getScreenshot();
    if (captureImageSrc) {
      setCaptureImageDataUri(captureImageSrc);
    }
  }, [webcamRef]);

  const handleClearCaptureImage = () => {
    setCaptureImageDataUri(undefined);
  };

  const videoConstraints: MediaTrackConstraints = {
    width: cameraWidth,
    height: cameraHeight,
    facingMode: "user",
    noiseSuppression: cameraNoiseSuppression,
  };

  return (
    <Layout>
      <CameraPresenter
        webcamRef={webcamRef}
        videoConstraints={videoConstraints}
        captureImageDataUri={captureImageDataUri}
        onCameraWidth={handleCameraWidth}
        onCameraHeight={handleCameraHeight}
        onCameraNoiseSuppression={handleCameraNoiseSuppression}
        onCapture={handleCapture}
        onClearCaptureImage={handleClearCaptureImage}
      />
    </Layout>
  );
};
