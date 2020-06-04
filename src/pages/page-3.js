import React from 'react'
import Layout from '../components/layout'
import Lovely from '../assests/lovely.mp4'
import Video from '../components/video'

const PageThree = () => {
    return (
        <Layout>
            <div>
                <h3 style={{marginBottom: "16px", textTransform:"uppercase"}}>Animated GIF</h3>
                <img src="https://media.giphy.com/media/JwwYTeuOHhEB2/giphy.gif" alt="GIF"/>
            </div>
            <div style={{marginBottom: "32px"}}>
                <h3 style={{marginBottom: "16px", textTransform:"uppercase"}}>Exported from local data</h3>
                <video style={{width: "800px"}} controls>
                    <source src={Lovely} type="video/mp4" />
                </video>
            </div>
            <div>
                <h3 style={{marginBottom: "16px", textTransform:"uppercase"}}>Exported from Hosted data(Youtube) & Custom Component</h3>
                <Video 
                    height={"400px"}
                    width={"800px"}
                    videoSrcURL="https://www.youtube.com/embed/ZAfAud_M_mg"
                    videoTitle="Halsey - Without Me"
                />
            </div>
        </Layout>
    )
}

export default PageThree
