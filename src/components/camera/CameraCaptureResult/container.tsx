import { dialog, fs } from "@tauri-apps/api";
import {
  isPermissionGranted,
  requestPermission,
  sendNotification,
} from "@tauri-apps/api/notification";
import { format } from "date-fns";
import { ComponentProps } from "react";
import { CameraPresenter } from "../Camera/presenter";
import { CameraCaptureResultPresenter } from "./presenter";

type Props = Required<
  Pick<
    ComponentProps<typeof CameraPresenter>,
    "captureImageDataUri" | "onClearCaptureImage"
  >
>;

export const CameraCaptureResult: React.FC<Props> = ({
  captureImageDataUri,
  onClearCaptureImage,
}) => {
  const handleSaveImage = async () => {
    const blob = await (await fetch(captureImageDataUri)).blob();

    if (!window.__TAURI_IPC__) {
      // Browser
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.download = `${format(new Date(), "yyyyMMddHHmmss")}.png`;
      a.href = url;
      a.target = "tauri";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      a.remove();
    } else {
      // WebView
      await dialog
        .save({
          filters: [
            {
              name: "Image extension filter",
              extensions: ["png", "jpg", "gif"],
            },
          ],
        })
        .then(async (path) => {
          const contents = await blob.arrayBuffer();
          fs.writeBinaryFile({ path, contents });
        });

      // macOS Notification
      let permissionGranted = await isPermissionGranted();
      if (!permissionGranted) {
        const permission = await requestPermission();
        permissionGranted = permission === "granted";
      }
      if (permissionGranted) {
        sendNotification({ title: "TAURI", body: "Tauri is awesome!" });
      }
    }
  };

  return (
    <CameraCaptureResultPresenter
      captureImageDataUri={captureImageDataUri}
      onClearCaptureImage={onClearCaptureImage}
      onSaveImage={handleSaveImage}
    />
  );
};
