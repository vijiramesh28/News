import React, { useState, useEffect } from 'react'
import BaseUrl from '../../../Api/RestApi'
import ENtertainmentSlider from './ENtertainmentSlider'
import HealthNewsMain from './HealthNewsMain'
import { Container, Col, Row } from 'react-bootstrap'
import LeftNewsTabs from './LeftNewsTabs'


const NewsTabs = () => {
    const [HealthNews, setHealthNews] = useState([])
    const [HealthNewsCat, setHealthNewsCat] = useState([])


    const getPostData = async (l) => {
        if (l != null) {
            const health = await BaseUrl.get(`${l}/health/health`)
            setHealthNews(health.data.posts)
            setHealthNewsCat(health.data.category)
          
        }
        else {
            const health = await BaseUrl.get(`1/health/health`)
            setHealthNews(health.data.posts)
            setHealthNewsCat(health.data.category)
            
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
