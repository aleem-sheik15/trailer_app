import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router';
import { ContextStore } from '../Context/ContextStore';
import style from './../VideoPlayer/VideoPlayer.module.css'

const VideoPlayer = () => {
    const { trailerId } = useParams();
    const { all_Movies } = useContext(ContextStore);
    const [play, setPlay] = useState(false);
    const { setDuration } = useContext(ContextStore)
    const vidRef = useRef()
    useEffect(() => {
        setTimeout(() => {
            setDuration(vidRef.current.duration)
        }, 100)
    }, [setDuration])
    const start = () => {
        if (!play) {
            setPlay(true)
            vidRef.current.play()
            vidRef.current.controls = true;
        } else {
            setPlay(false)
            vidRef.current.pause()
            vidRef.current.controls = false;
        }
    }
    const forward = () => {
        vidRef.current.currentTime += 5
    }
    const backward = () => {
        vidRef.current.currentTime -= 5
    }
    return (
        <div className={style.container}>
            {
                all_Movies.map((item, i) => {
                    if (Number(trailerId) === item.id) {
                        return (
                            <div key={i} className={style.video_container}>
                                <video ref={vidRef} onClick={start}>
                                    <source src={item.trailer} />
                                </video>
                                <div className={play ? `${style.playbtn} ${style.animate}` : `${style.playbtn}`}>
                                    <i className="fa-solid fa-backward" onClick={backward}></i>
                                    <i className={!play ? 'fa-solid fa-play' : 'fa-solid fa-pause'} onClick={start}></i>
                                    <i className="fa-solid fa-forward" onClick={forward}></i>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default VideoPlayer
