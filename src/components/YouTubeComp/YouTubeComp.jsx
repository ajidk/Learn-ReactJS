import React from 'react';
import './YouTubeComp.css'

const YouTubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/jKo9B5vxy_0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCGtMtqZn1iIJhXrN2cqgxyfVgAJA" alt="Ini gambar"/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YouTubeComp.defaultProps = {
    time: "00.00",
    title: "Title Here",
    desc: "desc here brow"
}

export default YouTubeComp;