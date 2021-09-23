import React, { useState, useEffect } from "react"
import axios from "axios"
import CategoryListComp from "./CategoryListComp"

const CategoryList = () => {
    const [LatestNews, setLatestNews] = useState([])
    const [PoliticalNews, setPoliticalNews] = useState([])
    const [PuneNews, setPuneNews] = useState([])
    const [Latestcat, setLatestcat] = useState([])
    const [Politicalcat, setPoliticalcat] = useState([])
    const [Punecat, setPunecat] = useState([])
    



    const getPostData = async (l) => {
        if (l != null) {
        const lat = await axios.get(`https://dn.wcprojects.in/api/${l}/latest/latest-news`)
        const pol = await axios.get(`https://dn.wcprojects.in/api/${l}/politics/politics`)
        const pune = await axios.get(`https://dn.wcprojects.in/api/${l}/pune/pune`)
        console.log(lat.data.posts);
        setLatestNews(lat.data.posts)
        setPoliticalNews(pol.data.posts)
        setPuneNews(pune.data.posts)

        setLatestcat(lat.data.category)
        setPoliticalcat(pol.data.category)
        setPunecat(pune.data.city)
        }
        else{
            const lat = await axios.get('https://dn.wcprojects.in/api/1/latest/latest-news')
            const pol = await axios.get('https://dn.wcprojects.in/api/1/politics/politics')
            const pune = await axios.get('https://dn.wcprojects.in/api/1/pune/pune')
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
                <div className="container">
                    <div className="row">
                        <CategoryListComp LatestNews={LatestNews} Latestcat={Latestcat}  ></CategoryListComp>
                        <CategoryListComp LatestNews={PoliticalNews} Latestcat={Politicalcat}  ></CategoryListComp>
                        <CategoryListComp LatestNews={PuneNews} Latestcat={Punecat}  ></CategoryListComp>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CategoryList
