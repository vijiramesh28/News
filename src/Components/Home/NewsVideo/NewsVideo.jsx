import instance from '../../../Api/RestApi'
import React, { useState, useEffect } from 'react'
import dateFormat from 'dateformat'
import NewsVideoComp from "./NewsVideoComp"
import { Container, Row } from 'react-bootstrap'


const NewsVideo = () => {
    const [Videolist, setVideolist] = useState([])

    const GetPostData = async (l) => {
        if(l!=null)
        {
            const res = await instance.get(`${l}/videos`)
            console.log(res.data.posts);
            setVideolist(res.data.posts)
        }
        else{
            const res = await instance.get('1/videos')
            console.log(res.data.posts);
            setVideolist(res.data.posts)
        }
    
    }
    useEffect(() => {
        const langData = localStorage.getItem("lang")
        GetPostData(langData)


    }, [])
    return (
        <>
            {/* <!-- 2rd Block Wrapper Start --> */}
            <section className="utf_block_wrapper solid-bg">
                <Container>
                    <Row>

                        {
                            Videolist.slice(0, 3).map((videodata, ind) => {
                                const videoDate = videodata.updated_at
                                const videomoddate = dateFormat(videoDate, "dd mmmm , yyyy")
                                const VideoPlay = videodata.video.replace('https://www.youtube.com/watch?v=','');
                                return <NewsVideoComp  key={ind} videoThumbnail={`https://dn.wcprojects.in/${videodata.img_3}`} alt={videodata.alt} videoplay={VideoPlay} VideoTitle={videodata.title} VideoReleaseDate={videomoddate} />

                            })
                        }



                    </Row>
                </Container>
            </section>
            {/* <!-- 2rd Block Wrapper End --> */}
        </>
    )
}

export default NewsVideo
