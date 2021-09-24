import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import dateFormat from 'dateformat'
import ReactPaginate from 'react-paginate'
import Breadcrumb from "../Components/Category/pageTitle/Breadcrumb"
import instance from '../Api/RestApi'
import Adsidebar from '../images/banner-ads/ad-sidebar.png'
import JobRelatedNews from '../Components/Home/OtherNews/JobRelatedNews'
import ENtertainmentSlider from '../Components/Home/NewsTabs/ENtertainmentSlider'




const Category = () => {
    const { catid } = useParams()
    const { subname } = useParams()
    const [JobNews, setJobNews] = useState([])
    const [JobCategory, setJobCategory] = useState([])
    const [Category, setCategory] = useState([])
    const [loading, setLoading] = useState(false)
    const [aIndex, setAIndex] = useState(0)
    const [pageNumber, setPageNumber] = useState(0)
    const UsersPerPage = 4
    const PagesVisited = pageNumber * UsersPerPage

    const GetPostData = async (l, t) => {
        if (l != null && t != null) {

            const re = await instance.get(`${l}/job/jobs`)
            setJobNews(re.data.posts)
            setJobCategory(re.data.category)
            setLoading(true)
        }
        else {
            const re = await instance.get('1/job/jobs')
            setJobNews(re.data.posts)
            setJobCategory(re.data.category)
            setLoading(true)
        }


    }

    useEffect(() => {
        const localData = localStorage.getItem("lang")
        const localData2 = localStorage.getItem("language")
        GetPostData(localData, localData2)

    }, [])

    const handleClick = (index) => {
        setAIndex(index);
    }

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }



    return (
        <>
            {/* {loading ? (

                Category.filter(cat => cat.id === parseInt(catid)).map((curElem, ind) => {
                    const PageCount = Math.ceil(curElem.posts.length / UsersPerPage)
                    console.log(PageCount); */}

                    {/* return (
                        <> */}
                            {/* <Breadcrumb categoryname={curElem.name} /> */}
                            <section className="utf_block_wrapper">
                                <div className="container">
                                    <div className="row">
                                        {/* <div className="col-lg-8 col-md-12">
                                            <div className="block category-listing category-style2">
                                                <h3 className="utf_block_title"><span>{curElem.name}</span></h3>
                                                <ul className="subCategory unstyled">
                                                    {
                                                        curElem.subcategories.map((subcategories) => {
                                                            return (
                                                                <li key={subcategories.id} ><Link strict to={`${subcategories.name}`} className={aIndex === subcategories.id ? "active" : ""} style={{ "cursor": "pointer" }} onClick={() => handleClick(subcategories.id)} >{subcategories.name}</Link></li>
                                                            )

                                                        })


                                                    }

                                                </ul>


                                                {

                                                    subname == "null" ?

                                                        (
                                                            curElem.posts.slice(PagesVisited, PagesVisited + UsersPerPage).map((post, ind) => {

                                                                const postdate = post.updated_at;
                                                                const postmoddate = dateFormat(postdate, "dd mmmm , yyyy");



                                                                return (
                                                                    <div className="utf_post_block_style utf_post_float_half clearfix">
                                                                        <div className="utf_post_thumb">
                                                                            <Link strict to={`post/${post.id}`}> <img className="img-fluid" src={`https://wcprojects.in/public/media/posts/img1/${post.img_1}`} alt="" /> </Link>
                                                                        </div>
                                                                        <a className="utf_post_cat" href="/">{curElem.name}</a>
                                                                        <div className="utf_post_content">
                                                                            <h2 className="utf_post_title"><Link strict to={`/post/${post.id}`}>{post.title}</Link></h2>
                                                                            <div className="utf_post_meta">
                                                                                <span className="utf_post_date"><i className="fa fa-clock-o"></i> {postmoddate}</span>
                                                                            </div>
                                                                            <p>{post.details.substring(0, 100) + "..."}</p>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })

                                                        )

                                                        :


                                                        curElem.subcategories.map((sub) => sub.posts.slice(PagesVisited, PagesVisited + UsersPerPage).map((post, ind) => {

                                                            if (sub.name === subname) {
                                                                const postdate = post.updated_at;
                                                                const postmoddate = dateFormat(postdate, "dd mmmm , yyyy");
                                                                return (


                                                                    // console.log(subpost.title);


                                                                    <div className="utf_post_block_style utf_post_float_half clearfix">
                                                                        <div className="utf_post_thumb">
                                                                            <Link strict to={`post/${post.id}`}> <img className="img-fluid" src={`https://wcprojects.in/public/media/posts/img1/${post.img_1}`} alt="" /> </Link>
                                                                        </div>
                                                                        <a className="utf_post_cat" href="/">{curElem.name}</a>
                                                                        <div className="utf_post_content">
                                                                            <h2 className="utf_post_title"><Link strict to={`/post/${post.id}`}>{post.title}</Link></h2>
                                                                            <div className="utf_post_meta">
                                                                                <span className="utf_post_date"><i className="fa fa-clock-o"></i> {postmoddate}</span>
                                                                            </div>
                                                                            <p>{post.details.substring(0, 100) + "..."}</p>
                                                                        </div>
                                                                    </div>

                                                                )



                                                            }


                                                        }))




                                                }


                                            </div>



                                            <div className="paging">
                                                <ReactPaginate
                                                    previousLabel={'<'}
                                                    nextLabel={'>'}
                                                    breakLabel={'...'}
                                                    pageCount={PageCount}
                                                    onPageChange={changePage}
                                                    marginPagesDisplayed={2}
                                                    pageRangeDisplayed={6}
                                                    containerClassName={'pagination'}
                                                    pageClassName={'pagination li'}
                                                    pageLinkClassName={'pagination li a'}
                                                    activeClassName={'active'}

                                                />
                                            </div>
                                        </div> */}

                                        <div className="col-lg-4 col-md-12">
                                            <div className="sidebar utf_sidebar_right">
{/* 
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
                                                                                <div className="utf_post_thumb"> <Link strict to={`/post/${post.id}`}> <img className="img-fluid" src={postimg} alt="" /> </Link> <Link className="utf_post_cat" strict to={`catgeory/${curElem.id}`}>{curElem.name}</Link> </div>
                                                                                <div className="utf_post_content">
                                                                                    <h2 className="utf_post_title title-small"> <Link strict to={`/post/${post.id}`}>{post.title}</Link> </h2>
                                                                                    <div className="utf_post_meta"> <span className="utf_post_author"><i className="fa fa-user"></i> <a href="#">{postmoddate}</a></span>  </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    )
                                                                }))

                                                            }



                                                        </ul>
                                                    </div>
                                                </div> */}
                                                <JobRelatedNews JobNews={JobNews} JobCategory={JobCategory} />
                                                <div className="widget text-center"> <img className="banner img-fluid" src={Adsidebar} alt="" /> </div>

                                                <ENtertainmentSlider />
                                               

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        {/* </>
                    ) */}


                {/* }) */}



            {/* // ) : (<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
            //     <rect width="400" height="300" fill="#fcfcfc"></rect>
            //     <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="26px" fill="#cccccc">Loading</text>
            // </svg></div>)
            } */}

        </>
    )

}
export default Category
