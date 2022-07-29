# ts-react-vite-tauri-camera-example

## Features

| Name                  | Version |
| --------------------- | ------- |
| VSCode                | latest  |
| TypeScript            | latest  |
| Node.js               | v16 LTS |
| Vite                  | v3      |
| React                 | v18     |
| react-webcam          | latest  |
| SCSS                  | latest  |
| ESLint                | latest  |
| Prettier              | latest  |
| Vitest                | latest  |
| React Testing Library | latest  |

## Requirements

- Visual Studio Code

## Setup

### Install Hombrew

Install [homebrew](https://brew.sh/) .

### Install Hombrew Packages

```sh
brew install --cask \
  visual-studio-code
```

## Usage

```shell
# install
npm i
# development
npm run tauri dev
# production
npm run tauri build
```

## TIPS

### Save the file in Tauri

- [dialog](https://tauri.app/v1/api/js/modules/dialog)

### Allow cameras in macOS security

- [Requesting Authorization for Media Capture on macOS](https://developer.apple.com/documentation/avfoundation/capture_setup/requesting_authorization_for_media_capture_on_macos?language=objc)
- `src-tauri/Info.plist`
  - [NSCameraUsageDescription](https://developer.apple.com/documentation/bundleresources/information_property_list/nscamerausagedescription)
  - [NSMicrophoneUsageDescription](https://developer.apple.com/documentation/bundleresources/information_property_list/nsmicrophoneusagedescription)
