import instance from '../../../Api/RestApi'
import React, { useState, useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel'
import dateFormat from 'dateformat'
import OtherNewsComp from './OtherNewsComp'
import { Container, Col, Row } from 'react-bootstrap'
import JobRelatedNews from './JobRelatedNews'

const OtherNews = () => {
    const [OtherNews, setOtherNews] = useState([])
    const [OtherNewsCat, setOtherNewsCat] = useState([])
    const [JobNews, setJobNews] = useState([])
    const [JobCategory, setJobCategory] = useState([])
    const [loading, setLoading] = useState(false)

    const GetPostData = async (l, t) => {
        if (l != null && t != null) {
            const res = await instance.get(`${t}/category/latest-news`)
            const re = await instance.get(`${l}/job/jobs`)
            console.log(re)
            setOtherNews(res.data.posts.data)
            setOtherNewsCat(res.data.category)
            setJobNews(re.data.posts)
            setJobCategory(re.data.category)
            setLoading(true)
        }
        else {
            const res = await instance.get('english/category/latest-news')
            const re = await instance.get('1/job/jobs')
            console.log(re)
            setOtherNews(res.data.posts.data)
            setOtherNewsCat(res.data.category)
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

    
    return (
        <>
            {/* <!-- 3rd Block Wrapper Start --> */}
            <section className="utf_block_wrapper p-bottom-0">
                <Container>
                    <Row>
                        <Col lg={8} md={12}>
                            <div className="utf_more_news block color-default">
                                {

                                    <h3 className="utf_block_title"><span>{OtherNewsCat.name}</span></h3>

                                }

                                {loading ? (
                                    OtherNews.length && (
                                        <OwlCarousel className="owl-carousel owl-theme utf_more_news_slide" items={1} responsiveRefreshRate={200} lazyLoad dots={true} id="utf_more_news_slide">

                                            {
                                                OtherNews.map((post, ind) => {
                                                    const postdate = post.updated_at;
                                                    const postmoddate = dateFormat(postdate, "dd mmmm , yyyy");
                                                    return (
                                                        <div key={OtherNewsCat.id} className="item">
                                                            <OtherNewsComp key={post.id} postImg={`https://dn.wcprojects.in/${post.img_4}`} categoryTitle={OtherNewsCat.name} postTitle={post.title} postDate={postmoddate} postDetails={post.details.substring(1, 200) + "..."} />
                                                        </div>
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
                        </Col>
                        <Col lg={4} sm={12} >
                        <JobRelatedNews JobNews={JobNews} JobCategory={JobCategory} />
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* <!-- 3rd Block Wrapper End --> */}
        </>
    )
}

export default OtherNews
