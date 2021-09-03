

const PostRelatedNews = (props) => {
    return (
        <>
            <li className="clearfix">
                <div className="utf_post_block_style post-float clearfix">
                    <div className="utf_post_thumb">
                        <a href="/"> <img className="img-fluid" src={props.postImg} alt="" /> </a>
                    </div>
                    <div className="utf_post_content">
                        <h2 className="utf_post_title"><a href="post.html">{props.postTitle}</a></h2>
                        <div className="utf_post_meta">
                            <span className="utf_post_date"><i className="fa fa-clock-o"></i>{props.postDate}</span>
                        </div>
                    </div>
                </div>
            </li>

        </>
    )
}

export default PostRelatedNews
