import axios from 'axios'
import React, { useState, useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel'
import dateFormat from 'dateformat'
import OtherNewsComp from './OtherNewsComp'
import PostRelatedNews from './PostRelatedNews'

const OtherNews = () => {
    const [OtherNews, setOtherNews] = useState([])
    const [JobNews, setJobNews] = useState([])
    const [JobCategory, setJobCategory] = useState([])
    const [loading, setLoading] =useState(false)

    const GetPostData = async () => {
        const res = await axios.get('https://wcprojects.in/api/english')
        const re = await axios.get('https://dn.wcprojects.in/api/1/job/jobs')
        console.log(re)
        setOtherNews(res.data.language.categories)
        setJobNews(re.data.posts)
        setJobCategory(re.data.category)
        setLoading(true)

    }
    useEffect(() => {
        GetPostData()


    }, [])
    return (
        <>
            {/* <!-- 3rd Block Wrapper Start --> */}
            <section className="utf_block_wrapper p-bottom-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="utf_more_news block color-default">
                                {
                                    OtherNews.slice(0, 1).map((curElem, ind) => {

                                        return (
                                            <h3 className="utf_block_title"><span>{curElem.name}</span></h3>
                                        )
                                    })
                                }

                                {loading?(
                                    OtherNews.length && (
                                        <OwlCarousel className="owl-carousel owl-theme utf_more_news_slide" items={1}  responsiveRefreshRate={200} lazyLoad dots={true}  id="utf_more_news_slide">

                                            {
                                                OtherNews.slice(0,1).map((curElem, ind) => curElem.posts.map((post, ind) => {
                                                    const postdate = post.updated_at;
                                                    const postmoddate = dateFormat(postdate, "dd mmmm , yyyy");
                                                    return (
                                                        <div key={curElem.id} className="item">
                                                            <OtherNewsComp key={post.id} postImg={`https://wcprojects.in/public/media/posts/img1/${post.img_1}`} categoryTitle={curElem.name} postTitle={post.title} postDate={postmoddate} postDetails={post.details.substring(0, 200) + "..."} />
                                                        </div>
                                                    )
                                                }))
                                            }



                                        </OwlCarousel>
                                    )
                                    ):( <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
                                    <rect width="400" height="300" fill="#fcfcfc"></rect>
                                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="26px" fill="#cccccc">Loading</text>   
                                </svg></div>)
                                }

                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-12">
                            <div className="sidebar utf_sidebar_right">
                                <div className="widget color-default">
                                    {
                                        
                                                <h3 className="utf_block_title"><span>{JobCategory.name}</span></h3>
                                        
                                        
                                    }
                                

                                    <div className="utf_list_post_block">
                                        <ul className="utf_list_post review-post-list">
                                            {
                                                JobNews.map((curElem,ind)=>{
                                                    const postdate = curElem.updated_at;
                                                    const postmoddate = dateFormat(postdate, "dd mmmm , yyyy");
                                                    return(
                                                        <PostRelatedNews key={curElem.id}  postImg={`https://dn.wcprojects.in/${curElem.img_3}`} categoryTitle={curElem.name} postTitle={curElem.title} postDate={postmoddate}  />
                                                    )
                                                })
                                                 
                                            }
                                         


                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- 3rd Block Wrapper End --> */}
        </>
    )
}

export default OtherNews
