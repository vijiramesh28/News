import React from 'react'
import { Link } from 'react-router-dom'

const HealthNews = (props) => {
    return (
        <div>
            <li className="clearfix">
                <div className="utf_post_block_style post-float clearfix">
                    <div className="utf_post_thumb">
                        <Link to={`/post/${props.postid}`}> <img className="img-fluid" src={props.postImg} alt="" /> </Link> <Link className="utf_post_cat" to={`post/${props.postid}`}>{props.categoryname}</Link>
                    </div>
                    <div className="utf_post_content">
                        <h2 className="utf_post_title clamped title-small"><a href="post.html">{props.posttitle}</a></h2>
                        <div className="utf_post_meta">
                            <span className="utf_post_date"><i className="fa fa-clock-o"></i>{props.postdate}</span>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default HealthNews
