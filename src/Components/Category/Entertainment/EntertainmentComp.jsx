import React from 'react'
import Gadget4 from '../../../images/news/tech/gadget4.jpg'
const EntertainmentComp = () => {
    return (
        <>
            <div className="item">
                <div className="utf_post_overaly_style text-center clearfix">
                    <div className="utf_post_thumb">
                        <a href="/"> <img className="img-fluid" src={Gadget4} alt="" /> </a>
                    </div>
                    <div className="utf_post_content">
                        <a className="utf_post_cat" href="/">Lifestyle</a>
                        <h2 className="utf_post_title"><a href="/">The best MacBook Pro alternatives in 2021 for Appl…</a></h2>
                        <div className="utf_post_meta">
                            <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span>
                        </div>
                    </div>
                </div>
                </div>
        </>
    )
}

export default EntertainmentComp
