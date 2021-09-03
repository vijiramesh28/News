import axios from 'axios'
import React, { useState, useEffect } from 'react'
import dateFormat from 'dateformat'






const PopularPost = () => {
    const [LatestNews, setLatestNews] = useState([])

    const GetPostData = async () => {
        const res = await axios.get('https://wcprojects.in/api/english')
        console.log(res.data.language.categories);
        setLatestNews(res.data.language.categories)
    }
    useEffect(() => {
        GetPostData()


    }, [])
    return (
        <>
            <div className="col-lg-4 col-sm-12 col-xs-12 footer-widget">
                {
                    LatestNews.slice(0, 1).map((currElem, ind) => {
                        return (
                            <h3 className="widget-title">{currElem.name}</h3>
                        )
                    })
                }

                <div className="utf_list_post_block">
                    <ul className="utf_list_post">
                        {
                            LatestNews.slice(0,1).map((currElem,ind)=>currElem.posts.slice(0,3).map((post,ind)=>{
                                const postdate = post.updated_at;
                                const postmoddate = dateFormat(postdate, "dd mmmm , yyyy");
                                return(
                                    <li className="clearfix">
                                    <div className="utf_post_block_style post-float clearfix">
                                        <div className="utf_post_thumb">
                                            <a href="/"> <img className="img-fluid" src={`https://wcprojects.in/public/media/posts/img1/${post.img_1}`} alt="" /> </a>
                                        </div>
                                        <div className="utf_post_content">
                                            <h2 className="utf_post_title clamped title-small"><a href="post.html">{post.title}</a></h2>
                                            <div className="utf_post_meta">
                                                <span className="utf_post_date"><i className="fa fa-clock-o"></i>{postmoddate}</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                )
                            }))
                        }
                   
                    </ul>
                </div>
            </div>
        </>
    )
}

export default PopularPost
