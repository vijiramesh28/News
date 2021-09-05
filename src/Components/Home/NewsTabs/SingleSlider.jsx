import React from 'react'


const SingleSlider = (props) => {
    return (
        <>
            <div className="item">
                <div className="utf_post_overaly_style text-center clearfix">
                    <div className="utf_post_thumb">
                        <a href="/"> <img className="img-fluid" src={props.postImg} alt="" /> </a>
                    </div>
                    <div className="utf_post_content">
                        <a className="utf_post_cat" href="/">{props.Categorytitle}</a>
                        <h2 className="utf_post_title"><a href="post.html">{props.postTile}</a></h2>
                        <div className="utf_post_meta">
                            <span className="utf_post_date"><i className="fa fa-clock-o"></i>{props.postDate}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleSlider
