import dateFormat from 'dateformat'
import { Link } from 'react-router-dom';

const TabLists = ({ postData }) => {
    console.log(postData);
    return (
        <>
            {
                postData.map((post, ind) => {
                    const postdate = post.updated_at;
                    const postmoddate = dateFormat(postdate, "dd mmmm , yyyy");
                    return (
                        <li key={post.id} className="clearfix">
                            <div className="utf_post_block_style post-float clearfix">
                                <div className="utf_post_thumb">
                                    <Link to={`post/${post.id}`}> <img className="img-fluid" src={`https://dn.wcprojects.in/${post.img_1}`} alt="" /> </Link>
                                </div>
                                <div className="utf_post_content">
                                    <h2 className="utf_post_title clamped clamped title-small">
                                        <Link to={`post/${post.id}`}>{post.title}</Link>
                                    </h2>
                                    <div className="utf_post_meta">
                                        <span className="utf_post_date"><i className="fa fa-clock-o"></i>{postmoddate}</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })
            }

        </>
    )
}

export default TabLists
