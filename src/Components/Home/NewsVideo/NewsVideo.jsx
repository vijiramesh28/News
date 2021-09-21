import axios from 'axios'
import React, { useState, useEffect } from 'react'
import dateFormat from 'dateformat'
import NewsVideoComp from "./NewsVideoComp"


const NewsVideo = () => {
    const [Videolist, setVideolist] = useState([])

    const GetPostData = async () => {
        const res = await axios.get('https://dn.wcprojects.in/api/1/videos')
        console.log(res.data.posts);
        setVideolist(res.data.posts)
    }
    useEffect(() => {
        GetPostData()


    }, [])
    return (
        <>
            {/* <!-- 2rd Block Wrapper Start --> */}
            <section className="utf_block_wrapper solid-bg">
                <div className="container">
                    <div className="row">

                        {
                            Videolist.slice(0, 3).map((videodata, ind) => {
                                const videoDate = videodata.updated_at
                                const videomoddate = dateFormat(videoDate, "dd mmmm , yyyy")
                                const VideoPlay = videodata.video.replace('https://www.youtube.com/watch?v=','');
                                return <NewsVideoComp  key={ind} videoThumbnail={`https://dn.wcprojects.in/${videodata.img_4}`} alt={videodata.alt} videoplay={VideoPlay} VideoTitle={videodata.title} VideoReleaseDate={videomoddate} />

                            })
                        }



                    </div>
                </div>
            </section>
            {/* <!-- 2rd Block Wrapper End --> */}
        </>
    )
}

export default NewsVideo
