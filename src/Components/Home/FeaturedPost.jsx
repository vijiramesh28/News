import instance from '../../Api/RestApi'
import React, { useState, useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel'
import '../../Assets/slider.css'
import { Link } from 'react-router-dom'
import dateFormat from 'dateformat'
import SidePost from './SidePost'
import { Carousel, Container, Row, Col } from 'react-bootstrap'

const FeaturedPost = () => {
    const [LatestNews, setLatestNews] = useState([])
    const [loading, setLoading] = useState(false)


    const GetPostData = async (l) => {
        if (l != null) {
            const re = await instance.get(`${l}/editorpick`)
            const res = await instance.get(`${l}/slider`)
            console.log(res.data.slider)
            setLatestNews(res.data.slider)
            setLoading(true)
        }
        else {
            const re = await instance.get('1/editorpick')
            const res = await instance.get('1/slider')
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
                <Container>
                    <Row>
                        <Col lg={8} md={12} className="pad-r">
                            {loading ? (

                                LatestNews.length && (
                                    <Carousel indicators={false} interval={2000} className="header-carousel"  >

                                        {
                                            LatestNews.map((currElem, ind) => {
                                                const postdate = currElem.updated_at
                                                const postmoddate = dateFormat(postdate, "dd mmmm , yyyy")
                                                return (

                                                    <Carousel.Item>
                                                        <img
                                                            className="d-block w-100 opacity-50"
                                                            src={`https://dn.wcprojects.in/${currElem.img_1}`}
                                                            alt="Latest News Slider"
                                                            style={{"borderRadius":"5px", "height":"65vh"}}
                                                        />

                                                        <Carousel.Caption>
                                                                <p><Link to={`/post/${currElem.id}`} className="post_cat" >{currElem.category.name}</Link></p>
                                                                <h2 className="utf_post_title clamped title-extra-large"><Link to={`/post/${currElem.id}`} className="text-white">{currElem.title}</Link></h2>
                                                                <span className="utf_post_date"><i className="fa fa-clock-o"></i> {postmoddate}</span>
                                                            
                                                        </Carousel.Caption>
                                                    </Carousel.Item>
                                                )



                                            })

                                        }
                                    </Carousel>
                                )

                            ) : (
                                <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
                                    <rect width="400" height="300" fill="#fcfcfc"></rect>
                                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="26px" fill="#cccccc">Loading</text>
                                </svg></div>
                                // <span className="text-danger">Loading...</span>

                            )}

                        </Col>

                        <SidePost />
                    </Row>
                </Container>
            </section>


        </>
    )
}

export default FeaturedPost
