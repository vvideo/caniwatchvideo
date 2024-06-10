export function stopCamera(stream: MediaStream, video: HTMLVideoElement) {
    stream.getTracks().forEach((track => {
        track.stop();
    }));

    video.pause();
    video.srcObject = null;
}

export function requestCamera(video: HTMLVideoElement, constraints: MediaStreamConstraints) {
    return navigator.mediaDevices.getUserMedia(constraints).then(mediaStream => {
        video.srcObject = mediaStream;
        video.setAttribute('playsinline', '');
        video.muted = true;
        video.controls = true;
        video.play();
        
        return mediaStream;
    });
}

export function getStreamParams(stream: MediaStream) {
    const video = stream.getVideoTracks()[0];
    const audio = stream.getAudioTracks()[0];

    const videoSettings = video?.getSettings();

    return {
        video: {
            width: videoSettings?.width,
            height: videoSettings?.height,
            label: video?.label,
            frameRate: videoSettings?.frameRate,
        },
        audio: {
            label: audio?.label,
        },
    };
}