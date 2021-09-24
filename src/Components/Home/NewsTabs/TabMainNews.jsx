import dateFormat from 'dateformat'
import { Link } from 'react-router-dom';

const TabMainNews = ({ postData }) => {
    return (
        <>
            {
                postData.slice(0, 1).map((curElem, ind) => {
                    const postdate = curElem.updated_at;
                    const postmoddate = dateFormat(postdate, "dd mmmm , yyyy");
                    return (
                        <div className="utf_post_block_style clearfix">
                            <div className="utf_post_thumb">
                                <Link to={`post/${curElem.id}`}> <img className="img-fluid" src={`https://dn.wcprojects.in/${curElem.img_1}`} alt="" /> </Link>
                            </div>
                            <Link className="utf_post_cat" to={`post/${curElem.id}`}>{curElem.name}</Link>
                            <div className="utf_post_content">
                                <h2 className="utf_post_title"><Link to={`post/${curElem.id}`}>{curElem.title}</Link></h2>
                                <div className="utf_post_meta">
                                    <span className="utf_post_date"><i className="fa fa-clock-o"></i>{postmoddate}</span>
                                </div>
                                <p>{curElem.details.substring(0, 200) + "..."}</p>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}

export default TabMainNews
