import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import dateFormat from 'dateformat'
import ReactPaginate from 'react-paginate'
import Breadcrumb from "../Components/Category/pageTitle/Breadcrumb"
import axios from "axios"
import Adsidebar from '../images/banner-ads/ad-sidebar.png'
import  OwlCarousel  from 'react-owl-carousel'
import SingleSlider from '../Components/Home/NewsTabs/SingleSlider'
import EntertainmentComp from '../Components/Category/Entertainment/EntertainmentComp'
import LatNewsSlider from '../Components/Home/LatestNews/LatNewsSlider'


const Category = () => {
    const { catid } = useParams()
    const [Category, setCategory] = useState([])
    const [pageCount, setPageCount] = useState(0)


    const GetPostData = async () => {
        const res = await axios.get('https://wcprojects.in/api/english')
        console.log(res.data.language.categories);
        setCategory(res.data.language.categories)
    }
    useEffect(() => {
        GetPostData()


    }, [])

    const handlepageclick = (data) => {
        const pages = 4
        const numberofPages = []
        for (let i = 1; i < pages; i++) {
            numberofPages.push(i)
        }
        console.log(numberofPages);

    }

    // const currentPosts = Category.slice(indexOfLastPost,indexOfFirstPost)
    // console.log(currentPosts);

    return (
        <>
            {
                Category.filter(cards => cards.id === parseInt(catid)).map((curElem, ind) => {

                    return (
                        <>
                            <Breadcrumb categoryname={curElem.name} />


                            <section className="utf_block_wrapper">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8 col-md-12">
                                            <div className="block category-listing category-style2">
                                                <h3 className="utf_block_title"><span>{curElem.name}</span></h3>
                                                <ul className="subCategory unstyled">
                                                    {
                                                        curElem.subcategories.map((subcategories, ind) => {
                                                            return (
                                                                <li><a href="/">{subcategories.name}</a></li>
                                                            )

                                                        })}

                                                </ul>
                                                {

                                                    curElem.posts.map((post, ind) => {

                                                        const postdate = post.updated_at;
                                                        const postmoddate = dateFormat(postdate, "dd mmmm , yyyy");



                                                        return (
                                                            <div className="utf_post_block_style utf_post_float_half clearfix">
                                                                <div className="utf_post_thumb">
                                                                    <a href="/"> <img className="img-fluid" src={`https://wcprojects.in/public/media/posts/img1/${post.img_1}`} alt="" /> </a>
                                                                </div>
                                                                <a className="utf_post_cat" href="/">{curElem.name}</a>
                                                                <div className="utf_post_content">
                                                                    <h2 className="utf_post_title"><a href="post.html">{post.title}</a></h2>
                                                                    <div className="utf_post_meta">
                                                                        <span className="utf_post_date"><i className="fa fa-clock-o"></i> {postmoddate}</span>
                                                                    </div>
                                                                    <p>{post.details.substring(0, 100) + "..."}</p>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }


                                            </div>



                                            <div className="paging">
                                                <ReactPaginate
                                                    previousLabel={'<'}
                                                    nextLabel={'>'}
                                                    breakLabel={'...'}
                                                    pageCount={curElem.posts.length / 4}
                                                    marginPagesDisplayed={2}
                                                    pageRangeDisplayed={6}
                                                    onPageChange={handlepageclick}
                                                    containerClassName={'pagination'}
                                                    pageClassName={'pagination li'}
                                                    pageLinkClassName={'pagination li a'}
                                                    activeClassName={'active'}

                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-12">
                                            <div className="sidebar utf_sidebar_right">

                                                <div class="widget color-default">
                                                    {
                                                        Category.slice(1, 2).map((curElem, ind) => {
                                                            return (
                                                                <h3 key={ind} class="utf_block_title"><span>{curElem.name}</span></h3>
                                                            )
                                                        })
                                                    }

                                                    <div class="utf_list_post_block">
                                                        <ul class="utf_list_post">
                                                            {
                                                                Category.slice(1, 2).map((curElem, ind) => curElem.posts.slice(0, 5).map((post, ind) => {
                                                                    const postimg = `https://wcprojects.in/public/media/posts/img1/${post.img_1}`
                                                                    const postdate = post.updated_at
                                                                    const postmoddate = dateFormat(postdate, "dd mmmm , yyyy")
                                                                    return (
                                                                        <li key={post.id} className="clearfix">
                                                                            <div className="utf_post_block_style post-float clearfix">
                                                                                <div className="utf_post_thumb"> <a href="#"> <img className="img-fluid" src={postimg} alt="" /> </a> <a className="utf_post_cat" href="#">{curElem.name}</a> </div>
                                                                                <div className="utf_post_content">
                                                                                    <h2 className="utf_post_title title-small"> <a href="post.html">{post.title}</a> </h2>
                                                                                    <div className="utf_post_meta"> <span className="utf_post_author"><i className="fa fa-user"></i> <a href="#">{postmoddate}</a></span>  </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    )
                                                                }))
                                                            }



                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="widget text-center"> <img className="banner img-fluid" src={Adsidebar} alt="" /> </div>

                                                <div className="widget color-default">
                                                    {
                                                        Category.slice(2,3).map((curElem,ind)=>{
                                                            return(
                                                                <h3 className="utf_block_title"><span>{curElem.name}</span></h3>
                                                            )
                                                        })
                                                    }
                                           
                                                    <OwlCarousel items={1} nav dots={false}  className="owl-carousel owl-theme utf_post_slide" id="utf_post_slide">
                                                        {
                                                            Category.slice(2,3).map((curElem,ind)=>curElem.posts.slice(0,5).map((post,ind)=>{
                                                                const postimg = `https://wcprojects.in/public/media/posts/img1/${post.img_1}`
                                                                    const postdate = post.updated_at
                                                                    const postmoddate = dateFormat(postdate, "dd mmmm , yyyy")
                                                                return(
                                                                    <div key={ind} className="item">
                                                                    <div className="utf_post_overaly_style text-center clearfix">
                                                                        <div className="utf_post_thumb">
                                                                            <a href="#"> <img className="img-fluid" src={postimg} alt="" /> </a>
                                                                        </div>
                                                                        <div className="utf_post_content">
                                                                            <a className="utf_post_cat" href="#">{curElem.name}</a>
                                                                            <h2 className="utf_post_title"><a href="#">{post.title}</a></h2>
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

                            )



                        </>
                    )
                })
            }




        </>
    )
}

export default Category
