
const OtherNewsComp = (props) => {
    return (
        <>
       
            <div className="utf_post_block_style utf_post_float_half clearfix">
                <div className="utf_post_thumb">
                    <a href="/"> <img className="img-fluid" src={props.postImg} alt="" /> </a>
                </div>
                <a className="utf_post_cat" href="/">{props.categoryTitle}</a>
                <div className="utf_post_content">
                    <h2 className="utf_post_title"><a href="post.html">{props.postTitle}</a></h2>
                    <div className="utf_post_meta">
                        <span className="utf_post_date"><i className="fa fa-clock-o"></i> {props.postDate}</span>
                    </div>
                    <p>{props.postDetails}</p>
                </div>
            </div>
         
        </>
    )
}

export default OtherNewsComp
