import React,{useState} from 'react'
import ModalVideo from 'react-modal-video'


const NewsVideoComp = ({videoThumbnail,alt,videoplay,VideoTitle,VideoReleaseDate}) => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
    
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoplay} onClose={() => setOpen(false)} />
        
        
               <div className="col-md-4">
                            <div className="utf_post_overaly_style text-center first clearfix mb-3 mb-md-0">
                                <div className="utf_post_thumb video-btn">
                                    <img className="img-fluid" src={videoThumbnail} onClick={()=> setOpen(true)} alt={alt}  />
                                    
                                    <a className="popup" onClick={()=> setOpen(true)}>
                                        <div className="video-icon" style={{"cursor":"pointer"}}><i className="fa fa-play"></i></div>
                                    </a>
                                </div>
                                <div className="utf_post_content">
                                    <h2 className="utf_post_title"><a onClick={()=> setOpen(true)}>{VideoTitle}</a></h2>
                                    <div className="utf_post_meta">
                                        <span className="utf_post_date"><i className="fa fa-clock-o"></i>{VideoReleaseDate}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    )
}

export default NewsVideoComp
