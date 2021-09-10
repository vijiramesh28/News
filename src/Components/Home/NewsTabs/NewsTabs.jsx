import axios from 'axios'
import React, { useState, useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel'
import dateFormat from 'dateformat'
import TabLists from "./TabLists"
import TabMainNews from "./TabMainNews"
import Tabs from "./Tabs"
import SingleSlider from "./SingleSlider"
import { Link } from 'react-router-dom'




const NewsTabs = () => {
    const [Singleposts, setSingleposts] = useState([])
    const[loading, setLoading]=useState(false)
    // const [submenuList,setSubmenulist] =useState(uniqueSubcategory)



    const GetPostData = async () => {
        const res = await axios.get('https://wcprojects.in/api/english')
        console.log(res.data.language.categories);
        setSingleposts(res.data.language.categories)
        setLoading(true)
    }
    useEffect(() => {
        GetPostData()


    }, [])

    //     const uniqueSubcategory = [...new Set(Singleposts.map((category,ind)=>{
    //         return category.name
    //         // return category.name;
    //     })

    //     )

    // ]

    // const FilterPosts=(latestnews)=>{
    //     const updatedPosts = Singleposts.map((curElem,ind)=>{
    //         return curElem.name ===latestnews
    //     })
    //     setSingleposts(updatedPosts)
    // }

    return (
        <>
            {/* <!-- 1rd Block Wrapper Start --> */}
            <section className="utf_block_wrapper p-bottom-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">

                            {
                                loading?(
                            
                                Singleposts.slice(0, 2).map((curElem,ind) => {
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
                                ):( <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
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
                                    
                                        Singleposts.slice(0, 1).map((curElem, ind) => {
                                            return (
                                                <h3 key={ind} className="utf_block_title"><span>{curElem.name}</span></h3>
                                            )
                                        })
                                        }

                                    {loading?(
                                        Singleposts.length && (
                                            <OwlCarousel items={1} responsiveRefreshRate={200} lazyLoad loop={true} autoplay={true} dots={false} nav className="owl-carousel owl-theme utf_post_slide" id="utf_post_slide" >
                                                {
                                                    Singleposts.slice(0, 1).map((postElem, ind) => postElem.posts.slice(0, 4).map((post, ind) => {
                                                        const PostDate = post.updated_at;
                                                        const Postmoddate = dateFormat(PostDate, "dd mmmm , yyyy");
                                                        return (
                                                            <SingleSlider postImg={`https://wcprojects.in/public/media/posts/img1/${post.img_1}`} Categorytitle={postElem.name} postTile={post.title} postDate={Postmoddate} />
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

                                <div className="widget color-default">
                                    {
                                        Singleposts.slice(1, 2).map((curElem, ind) => curElem.posts.slice(0, 1).map((post, ind) => {
                                            const postdate = post.updated_at
                                            const postmoddate = dateFormat(postdate, "dd mmmm , yyyy")
                                            return (
                                                <>
                                                    <h3 className="utf_block_title"><span>{curElem.name}</span></h3>

                                                    <div className="utf_post_overaly_style clearfix">
                                                        <div className="utf_post_thumb">
                                                            <Link to={curElem.id}> <img className="img-fluid" src={`https://wcprojects.in/public/media/posts/img1/${post.img_1}`} alt="" /> </Link>
                                                        </div>
                                                        <div className="utf_post_content">
                                                            <Link className="utf_post_cat" to={`post/${curElem.id}`}>{curElem.name}</Link>
                                                            <h2 className="utf_post_title"><Link to={`post/${curElem.id}`}>{post.title}</Link></h2>
                                                            <div className="utf_post_meta">
                                                                <span className="utf_post_date"><i className="fa fa-clock-o"></i> {postmoddate}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        }))
                                    }

                                    <div className="utf_list_post_block">
                                        <ul className="utf_list_post">

                                            {
                                                Singleposts.slice(2, 7).map((curElem, ind) => curElem.posts.slice(0, 1).map((post, ind) => {
                                                    const postdate = post.updated_at
                                                    const postmoddate = dateFormat(postdate, "dd mmmm , yyyy")
                                                    return (
                                                        <li className="clearfix">
                                                            <div className="utf_post_block_style post-float clearfix">
                                                                <div className="utf_post_thumb">
                                                                    <Link to={`/post/${post.id}`}> <img className="img-fluid" src={`https://wcprojects.in/public/media/posts/img1/${post.img_1}`} alt="" /> </Link> <Link className="utf_post_cat" to={`post/${post.id}`}>{curElem.name}</Link>
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
