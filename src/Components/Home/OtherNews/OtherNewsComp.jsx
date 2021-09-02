import video1 from '../../../images/news/video/video1.jpg'

const OtherNewsComp = () => {
    return (
        <>
            <div className="utf_post_block_style utf_post_float_half clearfix">
                <div className="utf_post_thumb">
                    <a href="/"> <img className="img-fluid" src={video1} alt="" /> </a>
                </div>
                <a className="utf_post_cat" href="/">Video</a>
                <div className="utf_post_content">
                    <h2 className="utf_post_title"><a href="post.html">Ratcliffe to be Director of intelligence Trump ignored smart innocent...</a></h2>
                    <div className="utf_post_meta">
                        <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since has five...</p>
                </div>
            </div>
        </>
    )
}

export default OtherNewsComp
