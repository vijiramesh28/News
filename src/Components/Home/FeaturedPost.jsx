import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import dateFormat from 'dateformat'
import OwlCarousel from 'react-owl-carousel'




const FeaturedPost = () => {
    const [LatestNews, setLatestNews] = useState([])
    const [loading, setLoading] = useState(false)
    const [sidepost, setSidepost] = useState([])

    const GetPostData = async () => {
        const re = await axios.get('https://wcprojects.in/api/english')
        const res = await axios.get('https://dn.wcprojects.in/api/1/slider')
        console.log(res.data.slider)
        setLatestNews(res.data.slider)
        setSidepost(re.data.language.categories)
        setLoading(true)
    }
    useEffect(() => {
        GetPostData()


    }, [])
    return (
        <>




            <section className="utf_featured_post_area pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 pad-r">
                            {loading ? (

                                LatestNews.length && (
                                    <OwlCarousel items={1} responsiveRefreshRate={200} lazyLoad loop={true} autoplay={true} arrow={true} dots={false} className="owl-carousel owl-theme utf_featured_slider content-bottom" id="utf_featured_slider" >

                                        {
                                            LatestNews.map((currElem, ind) =>  {
                                                const postdate = currElem.updated_at
                                                const postmoddate = dateFormat(postdate, "dd mmmm , yyyy")
                                                return (

                                                    <div className="item" style={{ "backgroundImage": `url('https://dn.wcprojects.in/${currElem.img_1}')` }}>
                                                        <div className="utf_featured_post">
                                                            <div className="utf_post_content">
                                                                <Link to={`/post/${currElem.id}`} className="utf_post_cat" >{currElem.category.name}</Link>
                                                                <h2 className="utf_post_title clamped title-extra-large"><Link to={`/post/${currElem.id}`}>{currElem.title}</Link></h2>
                                                                <span className="utf_post_date"><i className="fa fa-clock-o"></i> {postmoddate}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )



                                            })

                                        }
                                    </OwlCarousel>
                                )

                            ) : (
                                <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
                                    <rect width="400" height="300" fill="#fcfcfc"></rect>
                                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="26px" fill="#cccccc">Loading</text>
                                </svg></div>
                                // <span className="text-danger">Loading...</span>

                            )}

                        </div>

                        <div className="col-lg-4 col-md-12 pad-l">
                            <div className="row">

                                {
                                    sidepost.slice(0, 2).map((curElem, ind) => curElem.posts.slice(0, 1).map((posts, ind) => {

                                        const postdate = posts.updated_at
                                        const postmoddate = dateFormat(postdate, "dd mmmm , yyyy")

                                        return (
                                            <div className="col-md-12">
                                                <div className="utf_post_overaly_style text-center first clearfix">
                                                    <div className="utf_post_thumb">
                                                        <Link to={`/post/${posts.id}`}><img className="img-fluid" src={`https://wcprojects.in/public/media/posts/img1/${posts.img_1}`} alt="" /></Link>
                                                    </div>
                                                    <div className="utf_post_content">
                                                        <Link to={`/post/${posts.id}`} className="utf_post_cat" >{curElem.name}</Link>
                                                        <h2 className="utf_post_title clamped title-medium"><a href="post.html">{posts.title}</a></h2>
                                                        <div className="utf_post_meta">
                                                            <span className="utf_post_date"><i className="fa fa-clock-o"></i>{postmoddate}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )

                                    }))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default FeaturedPost
