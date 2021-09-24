import React, { useState, useEffect } from 'react'
import BaseUrl from '../../../Api/RestApi'
import ENtertainmentSlider from './ENtertainmentSlider'
import HealthNewsMain from './HealthNewsMain'
import { Container, Col, Row } from 'react-bootstrap'
import LeftNewsTabs from './LeftNewsTabs'
// import Tabs from './TabLists'
// import TabLists from './TabLists'
// import TabMainNews from './TabMainNews'

const NewsTabs = () => {
    // const [CrimeNews, setCrimeNews] = useState([])
    // const [ImportantNews, setImportantNews] = useState([])
    const [HealthNews, setHealthNews] = useState([])
    const [HealthNewsCat, setHealthNewsCat] = useState([])
    const [loading, setLoading] = useState(false)


    const getPostData = async (l) => {
        if(l!=null)
        {
        // const res = await BaseUrl.get(`${l}/crime/crime`)
        // const imp = await BaseUrl.get(`${l}/imp/important-news`)
        const health = await BaseUrl.get(`${l}/health/health`)
        
       
        // console.log(res.data.allposts);
        // setCrimeNews(res.data.allposts)
        // setImportantNews(res.data.allposts)
        setHealthNews(health.data.posts)
        setHealthNewsCat(health.data.category)
        setLoading(true)
        }
        else{
            // const res = await BaseUrl.get(`1/crime/crime`)
            const imp = await BaseUrl.get(`1/imp/important-news`)
            const health = await BaseUrl.get(`1/health/health`)
        
        // console.log(res.data.language.allposts);
        // setCrimeNews(res.data.allposts)
        // setImportantNews(res.data.allposts)
        setHealthNews(health.data.posts)
        setHealthNewsCat(health.data.category)
        setLoading(true)
        }
        
    }
    useEffect(() => {
        const langData = localStorage.getItem("lang")
        getPostData(langData)
    }, [])



    return (
        <>
            {/* <!-- 1rd Block Wrapper Start --> */}
            <section className="utf_block_wrapper p-bottom-0">
                <Container>
                    <Row>
                        <Col lg={8} md={12} >

                            <LeftNewsTabs />

                            <div className="gap-30"></div>

                        </Col>

                        <Col lg={4} md={12} >
                            <div className="sidebar utf_sidebar_right">
                               <ENtertainmentSlider />

                                <HealthNewsMain healthNews={HealthNews} HealthNewsCat={HealthNewsCat} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* <!-- 1rd Block Wrapper End --> */}
        </>
    )
}

export default NewsTabs
