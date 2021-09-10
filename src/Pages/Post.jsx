import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import dateFormat from 'dateformat'
import Breadcrumb from "../Components/Category/pageTitle/Breadcrumb"
import axios from "axios"
// import Adsidebar from '../images/banner-ads/ad-sidebar.png'
import OwlCarousel from 'react-owl-carousel'
import { Helmet } from 'react-helmet'

const Post = () => {
    const { postid } = useParams()
    const [Category, setCategory] = useState([])
    const[loading,setLoading] = useState(false)
    // const [updatedsubcat, setUpdatedsubcat] = useState([])
    // const [pageCount, setPageCount] = useState(0)


    const GetPostData = async () => {
        const res = await axios.get('https://wcprojects.in/api/english')
        console.log(res.data.language.categories);
        setCategory(res.data.language.categories)
        setLoading(true)
    }
    useEffect(() => {
        GetPostData()


    }, [])
    return (
        <>
            {loading?(
                Category.map((category, ind) => category.posts.map((post, ind) => {
                    const postdate = post.updated_at;
                    const postmoddate = dateFormat(postdate, "dd mmmm , yyyy");
                    console.log(post);
                    if (post.id === parseInt(postid)) {
                        return (
                            <>
                                <Helmet>
                                    <title>{post.meta_title}</title>
                                    <meta name="description" content={post.meta_desc} />
                                    <meta property="og:type" content="website" />
                                    <meta property="og:image" content={`https://wcprojects.in/public/media/posts/img1/${post.img_1}`} />
                                    <meta property="og:title" content={post.title} />
                                    <meta property="og:description" content={post.meta_desc} />
                                    {/* <meta property="og:url" content="https://www.colbyfayock.com" /> */}
                                </Helmet>
                                <Breadcrumb categoryname={category.name} />


                                {/* <!-- 1rd Block Wrapper Start --> */}
                                <section className="utf_block_wrapper">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-8 col-md-12">
                                                <div className="single-post">
                                                    <div className="utf_post_title-area">
                                                        {
                                                            category.subcategories.map((subcat, ind) => {
                                                                console.log(subcat);
                                                                return (
                                                                    <a className="utf_post_cat" href="/">{subcat.name}</a>
                                                                )
                                                            })
                                                        }

                                                        <h2 className="utf_post_title">{post.title}</h2>
                                                        <div className="utf_post_meta"> <span className="utf_post_date"><i className="fa fa-clock-o"></i>{postmoddate}</span> <span className="post-hits"><i className="fa fa-eye"></i>{post.views}</span> </div>
                                                    </div>

                                                    <div className="utf_post_content-area">
                                                        <div className="post-media post-featured-image">
                                                            <img className="img-fluid" src={`https://wcprojects.in/public/media/posts/img1/${post.img_1}`} alt="" />
                                                            <a className="popup" href={post.video}>
                                                                <div className="video-icon"><i className="fa fa-play"></i></div>
                                                            </a>
                                                        </div>
                                                        <div className="entry-content">
                                                            <p>{post.details}</p>

                                                        </div>

                                                        <div className="tags-area clearfix">
                                                            <div className="post-tags">
                                                                <span>Tags:</span>
                                                                <a href="/"># Business</a>
                                                                <a href="/"># Corporate</a>
                                                                <a href="/"># Services</a>
                                                                <a href="/"># Customer</a>
                                                            </div>
                                                        </div>

                                                        <div className="share-items clearfix">
                                                            <ul className="post-social-icons unstyled">
                                                                <li className="facebook"> <a href="/"> <i className="fa fa-facebook"></i> <span className="ts-social-title">Facebook</span></a> </li>
                                                                <li className="twitter"> <a href="/"> <i className="fa fa-twitter"></i> <span className="ts-social-title">Twitter</span></a> </li>
                                                                <li className="gplus"> <a href="/"> <i className="fa fa-google-plus"></i> <span className="ts-social-title">Google +</span></a> </li>
                                                                <li className="pinterest"> <a href="/"> <i className="fa fa-pinterest"></i> <span className="ts-social-title">Pinterest</span></a> </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <nav className="post-navigation clearfix">
                                                    <div className="post-previous">
                                                        <a href="/"> <span><i className="fa fa-angle-left"></i>Previous Post</span>
                                                            <h3>Zhang social media pop also known when smart innocent...</h3>
                                                        </a>
                                                    </div>
                                                    <div className="post-next">
                                                        <a href="/"> <span>Next Post <i className="fa fa-angle-right"></i></span>
                                                            <h3>Zhang social media pop also known when smart innocent...</h3>
                                                        </a>
                                                    </div>
                                                </nav>



                                                <div className="related-posts block">
                                                    <h3 className="utf_block_title"><span>Related Posts</span></h3>
                                                    <OwlCarousel items={4} responsiveRefreshRate={200} lazyLoad loop={true} arrow={true} dots={false} margin={10} nav id="utf_latest_news_slide" className="owl-carousel owl-theme utf_latest_news_slide">

                                                        {
                                                            Category.slice(0, 1).map((category) => category.posts.slice(0, 10).map((post) => {
                                                                const postdate = post.updated_at
                                                                const postmoddate = dateFormat(postdate, "dd mmmm , yyyy")
                                                                return (
                                                                    <div key={post.id} className="item">
                                                                        <div className="utf_post_block_style clearfix">
                                                                            <div className="utf_post_thumb"> <Link strict to={`post/${post.id}`} ><img className="img-fluid" src={`https://wcprojects.in/public/media/posts/img1/${post.img_1}`} alt="" /></Link> </div>
                                                                            <Link strict to={`/post/${post.id}`} className="utf_post_cat">Health</Link>
                                                                            <div className="utf_post_content">
                                                                                <h2 className="utf_post_title title-medium"> <Link strict to={`/post/${post.id}`}>{post.title}</Link> </h2>
                                                                                <div className="utf_post_meta"> <span className="utf_post_date"><i className="fa fa-clock-o"></i>{postmoddate}</span> </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }))
                                                        }

                                                    </OwlCarousel>
                                                </div>




                                            </div>

                                            <div className="col-lg-4 col-md-12">
                                                <div className="sidebar utf_sidebar_right">

                                                    <div className="widget color-default">
                                                        {
                                                            Category.slice(0, 1).map((category) => {
                                                                return (
                                                                    <h3 className="utf_block_title"><span>{category.name}</span></h3>
                                                                )
                                                            })
                                                        }

                                                        <div className="utf_list_post_block">
                                                            <ul className="utf_list_post">
                                                                {
                                                                    category.posts.slice(0, 4).map((post, ind) => {
                                                                        const postdate = post.updated_at
                                                                        const postmoddate = dateFormat(postdate, "dd mmmm , yyyy")
                                                                        return (
                                                                            <li className="clearfix">
                                                                                <div className="utf_post_block_style post-float clearfix">
                                                                                    <div className="utf_post_thumb"> <Link strict to={`/post/${post.id}`}> <img className="img-fluid" src={`https://wcprojects.in/public/media/posts/img1/${post.img_1}`} alt="" /> </Link> <Link className="utf_post_cat" to={`post/${post.id}`}>{category.name}</Link> </div>
                                                                                    <div className="utf_post_content">
                                                                                        <h2 className="utf_post_title title-small"> <Link strict to={`/post/${post.id}`} >{post.title}</Link> </h2>
                                                                                        <div className="utf_post_meta">  <span className="utf_post_date"><i className="fa fa-clock-o"></i>{postmoddate}</span> </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        )
                                                                    })
                                                                }


                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="widget text-center"> <img className="banner img-fluid" src="images/banner-ads/ad-sidebar.png" alt="" /> </div>

                                                    <div className="widget widget-tags">
                                                        <h3 className="utf_block_title"><span>Popular Tags</span></h3>
                                                        <ul className="unstyled clearfix">
                                                            <li><a href="/">Business</a></li>
                                                            <li><a href="/">Corporate</a></li>
                                                            <li><a href="/">Services</a></li>
                                                            <li><a href="/">Customer</a></li>
                                                            <li><a href="/">Money</a></li>
                                                            <li><a href="/">Health</a></li>
                                                            <li><a href="/">Lifestyles</a></li>
                                                            <li><a href="/">Traveling</a></li>
                                                            <li><a href="/">Partners</a></li>
                                                            <li><a href="/">Wordpress</a></li>
                                                            <li><a href="/">Customer</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="widget text-center"> <img className="banner img-fluid" src="images/banner-ads/ad-sidebar.png" alt="" /> </div>
                                                    <div className="widget color-default">
                                                        {
                                                            Category.slice(5, 6).map((categ, ind) => {
                                                                return (
                                                                    <h3 className="utf_block_title"><span>{categ.name}</span></h3>
                                                                )
                                                            })
                                                        }

                                                        <OwlCarousel items={1} arrow={true} dots={false} nav id="utf_post_slide" className="owl-carousel owl-theme utf_post_slide">
                                                            {
                                                                Category.slice(5, 6).map((category) => category.posts.slice(0, 7).map((post, ind) => {
                                                                    const postdate = post.updated_at
                                                                    const postmoddate = dateFormat(postdate, "dd mmmm , yyyy")
                                                                    return (
                                                                        <div key={ind} className="item">
                                                                            <div className="utf_post_overaly_style text-center clearfix">
                                                                                <div className="utf_post_thumb">
                                                                                    <Link strict to={`/post/${post.id}`}> <img className="img-fluid" src={`https://wcprojects.in/public/media/posts/img1/${post.img_1}`} alt="" /> </Link>
                                                                                </div>
                                                                                <div className="utf_post_content">
                                                                                    <Link strict to={`/post/${post.id}`} className="utf_post_cat">{category.name}</Link>
                                                                                    <h2 className="utf_post_title"><Link strict to={`/post/${post.id}`}>{post.title}</Link></h2>
                                                                                    <div className="utf_post_meta">
                                                                                        <span className="utf_post_date"><i className="fa fa-clock-o"></i>{postmoddate}</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                }))
                                                            }


                                                        </OwlCarousel>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* <!-- 1rd Block Wrapper End --> */}
                                )



                            </>
                        )
                    }

                }))
                ):( <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
                <rect width="400" height="300" fill="#fcfcfc"></rect>
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="26px" fill="#cccccc">Loading</text>   
            </svg></div>)
            }
        </>
    )
}

export default Post
