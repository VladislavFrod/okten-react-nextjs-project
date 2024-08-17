'use client'
import React, {FC, useEffect, useState} from 'react';
import {IVideo} from "@/models/IVideo";
import {getMovieVideos} from "@/services/api-services";
import './video-component.css'

interface IProps {
    movieId: number;
    videoType: string;
}

const VideoComponent: FC<IProps> = ({movieId, videoType}) => {
    const [video, setVideo] = useState<IVideo | null>(null);

    useEffect(() => {
        const fetchVideos = async () => {
            const videoData = await getMovieVideos(movieId);
            const selectedVideo = videoData.find(v => v.type === videoType) || null;
            setVideo(selectedVideo);
        };

        fetchVideos();
    }, [movieId, videoType]);

    const getVideoUrl = (video: IVideo) => {
        switch (video.site) {
            case 'YouTube':
                return `https://www.youtube.com/embed/${video.key}`;
            default:
                return null;
        }
    };

    return (
        <div>
            {video ? (
                <div className="video-container">
                    <h4>Watch online {video.name}</h4>
                    <iframe
                        width="560"
                        height="315"
                        src={getVideoUrl(video) || ''}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={video.name}
                    ></iframe>
                </div>
            ) : (
                <p>Could not find video</p>
            )}
        </div>
    );
};

export default VideoComponent;
