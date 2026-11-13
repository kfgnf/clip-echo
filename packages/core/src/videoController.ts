// This function plays a video clip from a specified start time to an end time.
export function playClip(video: HTMLVideoElement, startTime: number, endTime: number): void {
    video.currentTime = startTime;
    video.play();
    const handler = () => {
        if (video.currentTime >= endTime) {
            video.pause();
            video.removeEventListener('timeupdate', handler);
        }
    };
    video.addEventListener('timeupdate', handler);
}
