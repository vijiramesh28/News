import {NavLink} from 'react-router-dom'

const CategoryListComp = (props) => {
    return (
        <>
            <div className="col-lg-4">
                            <div className="block color-default">
                                <h3 className="utf_block_title"><span>{props.CategoryName}</span></h3>
                                <div className="utf_post_overaly_style clearfix">
                                    <div className="utf_post_thumb">
                                        <a href="/"> <img className="img-fluid" src="" alt="" /> </a>
                                    </div>
                                    <div className="utf_post_content">
                                        <h2 className="utf_post_title"><NavLink to="/post">Zhang social media pop also known when smart innocent...</NavLink></h2>
                                        <div className="utf_post_meta">
                                            <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="utf_list_post_block">
                                    <ul className="utf_list_post">
                                        <li className="clearfix">
                                            <div className="utf_post_block_style post-float clearfix">
                                                <div className="utf_post_thumb">
                                                    <a href="/"> <img className="img-fluid" src="images/news/lifestyle/travel2.jpg" alt="" /> </a>
                                                </div>
                                                <div className="utf_post_content">
                                                    <h2 className="utf_post_title clamped title-small"><a href="post.html">Zhang social media pop also known when smart innocent...</a></h2>
                                                    <div className="utf_post_meta">
                                                        <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="clearfix">
                                            <div className="utf_post_block_style post-float clearfix">
                                                <div className="utf_post_thumb">
                                                    <a href="/"> <img className="img-fluid" src="images/news/lifestyle/travel3.jpg" alt="" /> </a>
                                                </div>
                                                <div className="utf_post_content">
                                                    <h2 className="utf_post_title clamped title-small"><a href="post.html">Zhang social media pop also known when smart innocent...</a></h2>
                                                    <div className="utf_post_meta">
                                                        <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="clearfix">
                                            <div className="utf_post_block_style post-float clearfix">
                                                <div className="utf_post_thumb">
                                                    <a href="/"> <img className="img-fluid" src="images/news/lifestyle/travel4.jpg" alt="" /> </a>
                                                </div>
                                                <div className="utf_post_content">
                                                    <h2 className="utf_post_title clamped title-small"><a href="post.html">Zhang social media pop also known when smart innocent...</a></h2>
                                                    <div className="utf_post_meta">
                                                        <span className="utf_post_date"><i className="fa fa-clock-o"></i> 25 Jan, 2021</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
        </>
    )
}

export default CategoryListComp
