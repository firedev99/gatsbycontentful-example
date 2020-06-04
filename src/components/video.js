import React from 'react'

const Video = ({ videoSrcURL, videoTitle, height, width,...props }) => {
    return (
        <div>
            <iframe 
                height={height}
                width={width}
                src={videoSrcURL}
                title={videoTitle}
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
            >     
            </iframe>
        </div>
    )
}

export default Video
