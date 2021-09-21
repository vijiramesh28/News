import axios from 'axios'
import React, { useState, useEffect } from 'react'
import dateFormat from 'dateformat'
import OwlCarousel from 'react-owl-carousel'
import { Link } from 'react-router-dom'


const LatNewsSlider = () => {
    const [LatestNews, setLatestNews] = useState([])
    const [loading, setLoading] = useState(false)

    const GetPostData = async (l) => {
        if (l != null) {
            const res = await axios.get(`https://dn.wcprojects.in/api/${l}/editorpick`)
            console.log(res.data.posts);
            setLatestNews(res.data.posts)
            setLoading(true)
        }
        else {
            const res = await axios.get('https://dn.wcprojects.in/api/1/editorpick')
            console.log(res.data.posts);
            setLatestNews(res.data.posts)
            setLoading(true)
        }

    }
    useEffect(() => {
        const langData = localStorage.getItem("lang")
        GetPostData(langData)
    }, [])
    
    return (
        <>
            {loading ? (


                LatestNews.length && (
                    <OwlCarousel className="owl-theme owl-carousel utf_latest_news_slide utf_post_slide cust_nav" items={4} responsiveRefreshRate={200} lazyLoad loop={true} arrow={true} dots={false} margin={10} nav id="utf_latest_news_slide"  >
                        {

                            LatestNews.map((currElem, ind) => {

                                const postdate = currElem.updated_at
                                const postmoddate = dateFormat(postdate, "dd mmmm , yyyy")
                                //    const postmoddate = new Date(postdate).toLocaleDateString()
                                return (
                                    <>
                                        <div key={currElem.id} className="item" >
                                            <ul className="utf_list_post">
                                                <li className="clearfix">
                                                    <div className="utf_post_block_style clearfix">
                                                        <div className="utf_post_thumb">
                                                            <Link to={`post/${currElem.id}`}><img className="img-fluid" src={`https://dn.wcprojects.in/${currElem.img_4}`} width="50px" alt="" /></Link>
                                                        </div>
                                                        <Link className="utf_post_cat" to={`post/${currElem.id}`}>{currElem.category.name}</Link>
                                                        <div className="utf_post_content">
                                                            <h2 className="utf_post_title clamped title-medium"><a href="post.html">{currElem.title}</a></h2>
                                                            <div className="utf_post_meta">
                                                                <span className="utf_post_date"><i className="fa fa-clock-o"></i>{postmoddate} </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </>
                                )
                            })



                        }


                    </OwlCarousel>
                )
            ) : (<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
                <rect width="400" height="300" fill="#fcfcfc"></rect>
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="26px" fill="#cccccc">Loading</text>
            </svg></div>)}

        </>
    )
}

export default LatNewsSlider
