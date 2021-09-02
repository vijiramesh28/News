

const LatNewsSlider = ({category,sliderImg,title,datereleased}) => {
    return (
        <>
                        <div className="item">
                                <ul className="utf_list_post">
                                    <li className="clearfix">
                                        <div className="utf_post_block_style clearfix">
                                            <div className="utf_post_thumb">
                                                <a href="/"><img className="img-fluid" src={sliderImg} alt="" /></a>
                                            </div>
                                            <a className="utf_post_cat" href="/">{category}</a>
                                            <div className="utf_post_content">
                                                <h2 className="utf_post_title clamped title-medium"><a href="post.html">{title}</a></h2>
                                                <div className="utf_post_meta">
                                                    <span className="utf_post_date"><i className="fa fa-clock-o"></i> {datereleased}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

        </>
    )
}

export default LatNewsSlider
