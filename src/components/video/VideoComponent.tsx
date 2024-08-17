'use client';
import React, { FC } from 'react';
import { IVideo } from "@/models/IVideo";

interface IProps {
    video: IVideo;
}

const VideoComponent: FC<IProps> = ({ video }) => {
    const getVideoUrl = (video: IVideo) => {
        switch (video.site) {
            case 'YouTube':
                return `https://www.youtube.com/embed/${video.key}`;
            default:
                return null;
        }
    };

    const videoUrl = getVideoUrl(video);

    return (
        <div className="video-container">
            {videoUrl && (
                <iframe
                    width="560"
                    height="315"
                    src={videoUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    // title={video.name}
                ></iframe>
            )}
        </div>
    );
};

export default VideoComponent;
