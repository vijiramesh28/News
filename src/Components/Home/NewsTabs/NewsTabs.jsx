import axios from 'axios'
import React, { useState, useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel'
import dateFormat from 'dateformat'
import TabLists from "./TabLists"
import TabMainNews from "./TabMainNews"
import Tabs from "./Tabs"
import SingleSlider from "./SingleSlider"
import { Link } from 'react-router-dom'
import HealthNews from './HealthNews'

const NewsTabs = () => {
    const [Singleposts, setSingleposts] = useState([])
    const [editorPicks, setEditorPicks] = useState([])
    const [politicalNews, setPoliticalNews] = useState([])
    const [poiticalCategory, setPoliticalCategory] = useState([])
    const [EntertNews, setEntertNews] = useState([])
    const [EnterNewsCat, setEnterNewsCat] = useState([])
    const [loading, setLoading] = useState(false)


    const GetPostData = async () => {
        const res = await axios.get('https://wcprojects.in/api/english')
        const re = await axios.get('https://dn.wcprojects.in/api/1/health/health')
        const ed = await axios.get('https://dn.wcprojects.in/api/1/editorpick')
        const en = await axios.get('https://dn.wcprojects.in/api/1/entertainment/entertainment')
        console.log(res.data.language.categories);
        setSingleposts(res.data.language.categories)
        setPoliticalNews(re.data.posts)
        setEditorPicks(ed.data.posts)
        setPoliticalCategory(re.data.category)
        setEntertNews(en.data.posts)
        setEnterNewsCat(en.data.category)
        setLoading(true)
    }
    useEffect(() => {
        GetPostData()


    }, [])



    return (
        <>
            {/* <!-- 1rd Block Wrapper Start --> */}
            <section className="utf_block_wrapper p-bottom-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">

                            {
                                loading ? (

                                    Singleposts.slice(0, 2).map((curElem, ind) => {
                                        return (
                                            <div className="utf_featured_tab color-default">

                                                <h3 className="utf_block_title"><span>{curElem.name}</span></h3>

                                                <ul className="nav nav-tabs">
                                                    <Tabs submenuList={Singleposts} />

                                                </ul>
                                                <div className="tab-content">
                                                    <div className="tab-pane active animated fadeInRight" id="tab_a">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6">
                                                                <TabMainNews postData={Singleposts} />
                                                            </div>

                                                            <div className="col-lg-6 col-md-6">
                                                                <div className="utf_list_post_block">
                                                                    <ul className="utf_list_post">
                                                                        <TabLists postData={Singleposts} />
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        )
                                    })
                                ) : (<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
                                    <rect width="400" height="300" fill="#fcfcfc"></rect>
                                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="26px" fill="#cccccc">Loading</text>
                                </svg></div>)
                            }

                            <div className="gap-30"></div>

                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="sidebar utf_sidebar_right">
                                <div className="widget color-default">

                                    {

                                        <h3  className="utf_block_title"><span>{EnterNewsCat.name}</span></h3>

                                    }

                                    {loading ? (
                                        EntertNews.length && (
                                            <OwlCarousel items={1} responsiveRefreshRate={200} lazyLoad loop={true} autoplay={true} dots={false} nav className="owl-carousel owl-theme utf_post_slide" id="utf_post_slide" >
                                                {
                                                    EntertNews.map((postElem, ind) => {
                                                        const PostDate = postElem.updated_at;
                                                        const Postmoddate = dateFormat(PostDate, "dd mmmm , yyyy");
                                                        return (
                                                            <SingleSlider postImg={`https://dn.wcprojects.in/${postElem.img_4}`} Categorytitle={EnterNewsCat.name} postTile={postElem.title} postDate={Postmoddate} />
                                                        )
                                                    })
                                                }


                                            </OwlCarousel>
                                        )
                                    ) : (<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
                                        <rect width="400" height="300" fill="#fcfcfc"></rect>
                                        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="26px" fill="#cccccc">Loading</text>
                                    </svg></div>)
                                    }

                                </div>

                                <div className="widget color-default">
                                    {
                                        politicalNews.slice(1, 2).map((curElem, ind) => {
                                            const postdate = curElem.updated_at
                                            const postmoddate = dateFormat(postdate, "dd mmmm , yyyy")
                                            return (
                                                <>
                                                    <h3 className="utf_block_title"><span>{poiticalCategory.name}</span></h3>

                                                    <div className="utf_post_overaly_style clearfix">
                                                        <div className="utf_post_thumb">
                                                            <Link to={curElem.id}> <img className="img-fluid" src={`https://dn.wcprojects.in/${curElem.img_3}`} alt="" /> </Link>
                                                        </div>
                                                        <div className="utf_post_content">
                                                            <Link className="utf_post_cat" to={`post/${curElem.id}`}>{poiticalCategory.name}</Link>
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
                                                editorPicks.slice(0, 3).map((curElem, ind) => {
                                                    const postdate = curElem.updated_at
                                                    const postmoddate = dateFormat(postdate, "dd mmmm , yyyy")
                                                    return (
                                                        <HealthNews postid={curElem.id} posttitle={curElem.title} postImg={`https://dn.wcprojects.in/${curElem.img_4}`} categoryname={curElem.category.name} postdate={postmoddate} />
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
            {/* <!-- 1rd Block Wrapper End --> */}
        </>
    )
}

export default NewsTabs
