import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import dateFormat from 'dateformat'
import OwlCarousel from 'react-owl-carousel'
import SidePost from './SidePost'

const FeaturedPost = () => {
    const [LatestNews, setLatestNews] = useState([])
    const [loading, setLoading] = useState(false)
    
   

    const GetPostData = async (l) => {
        if(l!=null)
        {
            const re = await axios.get(`https://dn.wcprojects.in/api/${l}/editorpick`)
            const res = await axios.get(`https://dn.wcprojects.in/api/${l}/slider`)
            console.log(res.data.slider)
            setLatestNews(res.data.slider)
            setLoading(true)
        }
        else{
            const re = await axios.get('https://dn.wcprojects.in/api/1/editorpick')
            const res = await axios.get('https://dn.wcprojects.in/api/1/slider')
            console.log(res.data.slider)
            setLatestNews(res.data.slider)
            setLoading(true)
        }
       
    }
    useEffect(() => {
        const langData = localStorage.getItem("lang")
        GetPostData(langData)
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

                                <SidePost />
                    </div>
                </div>
            </section>


        </>
    )
}

export default FeaturedPost
