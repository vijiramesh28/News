import BaseUrl from '../../../Api/RestApi'
import React,{ useState, useEffect } from 'react'
import LeftNewsTabComp from './LeftNewsTabComp'

const LeftNewsTabs = () => {
    const [CrimeNews, setCrimeNews] = useState([])
    const [CrimeNewsCat, setCrimeNewsCat] = useState([])
    const [CrimeSubCat, setCrimeSubCat] = useState([])
    const [ImportantNews, setImportantNews] = useState([])
    const [ImportantNewsCat, setImportantNewsCat] = useState([])
    const [ImportantSubCat, setImportantSubCat] = useState([])
    const [loading, setLoading] = useState(false)


    const getPostData = async (l) => {
        if (l != null) {
            const res = await BaseUrl.get(`${l}/crime/crime`)
            const imp = await BaseUrl.get(`${l}/imp/important-news`)

            console.log(res.data.allposts);
            setCrimeNews(res.data.allposts)
            setCrimeNewsCat(res.data.category)
            setCrimeSubCat(res.data.categories)
            setImportantNews(imp.data.allposts)
            setImportantNewsCat(imp.data.category)
            setImportantSubCat(imp.data.categories)
            setLoading(true)
        }
        else {
            const res = await BaseUrl.get(`1/crime/crime`)
            const imp = await BaseUrl.get(`1/imp/important-news`)


            console.log(res.data.language.allposts);
            setCrimeNews(res.data.allposts)
            setCrimeNewsCat(res.data.category)   
            setCrimeSubCat(res.data.categories)
            setImportantNews(imp.data.allposts)
            setImportantNewsCat(imp.data.category)
            setImportantSubCat(imp.data.categories)
            setLoading(true)
        }

    }

    useEffect(() => {
        const langData = localStorage.getItem("lang")
        getPostData(langData)
    }, [])

    return (
        <div>
            {
                loading ? (
                    <>
                    <LeftNewsTabComp CrimeNews={CrimeNews} CrimeNewsCat={CrimeNewsCat} CrimeSubCat={CrimeSubCat} />
                    <LeftNewsTabComp CrimeNews={ImportantNews} CrimeNewsCat={ImportantNewsCat} CrimeSubCat={ImportantSubCat} />
                    </>
                ) : (<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
                    <rect width="400" height="300" fill="#fcfcfc"></rect>
                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="26px" fill="#cccccc">Loading</text>
                </svg></div>)
            }
        </div>
    )
}

export default LeftNewsTabs
