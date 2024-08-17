'use client'
import React, { FC, useEffect, useState } from 'react';
import { IVideo } from "@/models/IVideo";
import { getMovieVideos } from "@/services/api-services";

interface IProps {
    movieId: number;
    videoType: string; // Тип відео для відображення
}

const MovieVideos: FC<IProps> = ({ movieId, videoType }) => {
    const [video, setVideo] = useState<IVideo | null>(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const videoData = await getMovieVideos(movieId);

                // Вибрати перше відео з потрібним типом
                const selectedVideo = videoData.find(v => v.type === videoType) || null;
                setVideo(selectedVideo);
            } catch (error) {
                console.error("Error fetching movie videos:", error);
            }
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
                    {/*<h3>{video.type}</h3>*/}
                    {/*<h4>{video.name}</h4>*/}
                    <iframe
                        width="560"
                        height="315"
                        src={getVideoUrl(video) || ''}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={video.name}
                    ></iframe>
                </div>
            ) : (
                <p>No video available</p>
            )}
        </div>
    );
};

export default MovieVideos;
