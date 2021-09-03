import axios from 'axios'
import React, { useState, useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel'
import dateFormat from 'dateformat'
import OtherNewsComp from './OtherNewsComp'
import PostRelatedNews from './PostRelatedNews'

const OtherNews = () => {
    const [OtherNews, setOtherNews] = useState([])

    const GetPostData = async () => {
        const res = await axios.get('https://wcprojects.in/api/english')
        console.log(res.data.language.categories)
        setOtherNews(res.data.language.categories)

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

                                {
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
                                }

                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-12">
                            <div className="sidebar utf_sidebar_right">
                                <div className="widget color-default">
                                    {
                                        OtherNews.slice(1,2).map((curElem,ind)=>{
                                            return (
                                                <h3 key={ind} className="utf_block_title"><span>{curElem.name}</span></h3>
                                            )
                                        })
                                        
                                    }
                                

                                    <div className="utf_list_post_block">
                                        <ul className="utf_list_post review-post-list">
                                            {
                                                OtherNews.slice(2,3).map((curElem,ind)=>curElem.posts.slice(1,5).map((post,ind)=>{
                                                    const postdate = post.updated_at;
                                                    const postmoddate = dateFormat(postdate, "dd mmmm , yyyy");
                                                    return(
                                                        <PostRelatedNews key={ind}  postImg={`https://wcprojects.in/public/media/posts/img1/${post.img_1}`} categoryTitle={curElem.name} postTitle={post.title} postDate={postmoddate} postDetails={post.details.substring(0, 200) + "..."}  />
                                                    )
                                                }))
                                                 
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
