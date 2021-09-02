import NewsVideoComp from "./NewsVideoComp"
import VideoData from "./VideoData"
const NewsVideo = () => {
    return (
        <>
             {/* <!-- 2rd Block Wrapper Start --> */}
            <section className="utf_block_wrapper solid-bg">
                <div className="container">
                    <div className="row">

                    {
                        VideoData.map((curElem, index)=>{
                            return  <NewsVideoComp key={index} videoThumbnail= {curElem.videoThumbnail} alt={curElem.alt} videoplay = {curElem.videoplay} VideoTitle = {curElem.VideoTitle} VideoReleaseDate = {curElem.VideoReleaseDate} />
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
