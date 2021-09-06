import { Link } from "react-router-dom"

const OtherNewsComp = (props) => {
    return (
        <>
       
            <div className="utf_post_block_style utf_post_float_half clearfix">
                <div className="utf_post_thumb">
                    <Link to={`post/${props.key}`}> <img className="img-fluid" src={props.postImg} alt="" /> </Link>
                </div>
                <Link className="utf_post_cat" to={`post/${props.key}`}>{props.categoryTitle}</Link>
                <div className="utf_post_content">
                    <h2 className="utf_post_title"><Link to={`post/${props.key}`}>{props.postTitle}</Link></h2>
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
