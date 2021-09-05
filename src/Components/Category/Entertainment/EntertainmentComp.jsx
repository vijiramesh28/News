import React from 'react'
// import Gadget4 from '../../../images/news/tech/gadget4.jpg'
const EntertainmentComp = (props) => {
    return (
        <>
            <div className="item">
                <div className="utf_post_overaly_style text-center clearfix">
                    <div className="utf_post_thumb">
                        <a href="/"> <img className="img-fluid" src={props.postImg} alt="" /> </a>
                    </div>
                    <div className="utf_post_content">
                        <a className="utf_post_cat" href="/">Lifestyle</a>
                        <h2 className="utf_post_title"><a href="/">{props.posttitle}</a></h2>
                        <div className="utf_post_meta">
                            <span className="utf_post_date"><i className="fa fa-clock-o"></i></span>
                        </div>
                    </div>
                </div>
                </div>
        </>
    )
}

export default EntertainmentComp
