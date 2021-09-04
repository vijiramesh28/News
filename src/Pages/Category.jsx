import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import dateFormat from 'dateformat'
import Breadcrumb from "../Components/Category/pageTitle/Breadcrumb"
import axios from "axios"


const Category = ({ match }) => {
    const { catid } = useParams()
    const [Category, setCategory] = useState([])


    const GetPostData = async () => {
        const res = await axios.get('https://wcprojects.in/api/english')
        console.log(res.data.language.categories);
        setCategory(res.data.language.categories)
    }
    useEffect(() => {
        GetPostData()


    }, [])


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
                                                                    <p>{post.details.substring(0,100)+"..."}</p>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }


                                            </div>

                                            <div className="paging">
                                                <ul className="pagination">

                                                    <li><a href="/">{`>`}</a></li>
                                                    <li className="active"><a href="/">1</a></li>
                                                    <li><a href="/">2</a></li>
                                                    <li><a href="/">3</a></li>
                                                    <li><a href="/">4</a></li>
                                                    <li><a href="/">{`>`}</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-12">
                                            <div className="sidebar utf_sidebar_right">





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
