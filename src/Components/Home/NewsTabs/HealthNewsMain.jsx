import React from 'react'
import { Link } from 'react-router-dom';
import HealthNews from './HealthNews'
import dateFormat from 'dateformat';

const HealthNewsMain = ({healthNews,HealthNewsCat}) => {
    return (
        <div className="widget color-default">
                                    {
                                        healthNews.slice(0,1).map((curElem, ind) => {
                                            const postdate = curElem.updated_at
                                            const postmoddate = dateFormat(postdate, "dd mmmm , yyyy")
                                            return (
                                                <>
                                                    <h3 className="utf_block_title"><span>{HealthNewsCat.name}</span></h3>

                                                    <div className="utf_post_overaly_style clearfix">
                                                        <div className="utf_post_thumb">
                                                            <Link to={curElem.id}> <img className="img-fluid" src={`https://dn.wcprojects.in/${curElem.img_3}`} alt="" /> </Link>
                                                        </div>
                                                        <div className="utf_post_content">
                                                            <Link className="utf_post_cat" to={`post/${curElem.id}`}>{HealthNewsCat.name}</Link>
                                                            <h2 className="utf_post_title"><Link to={`post/${curElem.id}`}>{curElem.title}</Link></h2>
                                                            <div className="utf_post_meta">
                                                                <span className="utf_post_date"><i className="fa fa-clock-o"></i> {postmoddate}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }

                                    <div className="utf_list_post_block">
                                        <ul className="utf_list_post">

                                            {
                                                healthNews.slice(0, 3).map((curElem, ind) => {
                                                    const postdate = curElem.updated_at
                                                    const postmoddate = dateFormat(postdate, "dd mmmm , yyyy")
                                                    return (
                                                        <HealthNews postid={curElem.id} posttitle={curElem.title} postImg={`https://dn.wcprojects.in/${curElem.img_4}`} categoryname={HealthNewsCat.name} postdate={postmoddate} />
                                                    )
                                                })
                                            }



                                        </ul>
                                    </div>
                                </div>
    )
}

export default HealthNewsMain
