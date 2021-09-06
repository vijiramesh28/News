
const NewsVideoComp = ({videoThumbnail,alt,videoplay,VideoTitle,VideoReleaseDate}) => {
    return (
        <>
               <div className="col-md-4">
                            <div className="utf_post_overaly_style text-center first clearfix mb-3 mb-md-0">
                                <div className="utf_post_thumb video-btn">
                                    <img className="img-fluid" src={videoThumbnail} alt={alt}  />
                                    <a className="popup" href={videoplay}>
                                        <div className="video-icon"><i className="fa fa-play"></i></div>
                                    </a>
                                </div>
                                <div className="utf_post_content">
                                    <h2 className="utf_post_title"><a href={videoplay}>{VideoTitle}</a></h2>
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
