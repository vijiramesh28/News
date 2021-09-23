import React, { useState, useEffect } from "react"
import BaseUrl from '../../../Api/RestApi'
import CategoryListComp from "./CategoryListComp"
import { Container, Row } from "react-bootstrap"

const CategoryList = () => {
    const [LatestNews, setLatestNews] = useState([])
    const [PoliticalNews, setPoliticalNews] = useState([])
    const [PuneNews, setPuneNews] = useState([])
    const [Latestcat, setLatestcat] = useState([])
    const [Politicalcat, setPoliticalcat] = useState([])
    const [Punecat, setPunecat] = useState([])
    



    const getPostData = async (l) => {
        if (l != null) {
        const lat = await BaseUrl.get(`${l}/latest/latest-news`)
        const pol = await BaseUrl.get(`${l}/politics/politics`)
        const pune = await BaseUrl.get(`${l}/pune/pune`)
        console.log(lat.data.posts);
        setLatestNews(lat.data.posts)
        setPoliticalNews(pol.data.posts)
        setPuneNews(pune.data.posts)

        setLatestcat(lat.data.category)
        setPoliticalcat(pol.data.category)
        setPunecat(pune.data.city)
        }
        else{
            const lat = await BaseUrl.get('1/latest/latest-news')
            const pol = await BaseUrl.get('1/politics/politics')
            const pune = await BaseUrl.get('1/pune/pune')
            console.log(lat.data.posts);
            setLatestNews(lat.data.posts)
            setPoliticalNews(pol.data.posts)
            setPuneNews(pune.data.posts)
    
            setLatestcat(lat.data.category)
            setPoliticalcat(pol.data.category)
            setPunecat(pune.data.city)
        }

    }

    useEffect(() => {
        const langData = localStorage.getItem("lang")
        getPostData(langData)
    }, [])



    return (
        <>
            {/* <!-- 2rd Block Wrapper Start --> */}
            <section className="utf_block_wrapper p-top-0 p-bottom-0">
                <Container>
                    <Row>
                        <CategoryListComp LatestNews={LatestNews} Latestcat={Latestcat}  ></CategoryListComp>
                        <CategoryListComp LatestNews={PoliticalNews} Latestcat={Politicalcat}  ></CategoryListComp>
                        <CategoryListComp LatestNews={PuneNews} Latestcat={Punecat}  ></CategoryListComp>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CategoryList
