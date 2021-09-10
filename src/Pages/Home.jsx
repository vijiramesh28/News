import React, { Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet'
const AdContentArea = lazy(()=>import('../Components/Home/AdContentArea'));
const FeaturedPost = lazy(()=>import('../Components/Home/FeaturedPost'));
const CategoryList = lazy(()=>import('../Components/Home/CategoryList/CategoryList'));
const LatestNews = lazy(()=>import('../Components/Home/LatestNews/LatestNews.jsx'));
const NewsTabs = lazy(()=>import('../Components/Home/NewsTabs/NewsTabs'));
const NewsVideo = lazy(()=>import('../Components/Home/NewsVideo/NewsVideo'));
const OtherNews = lazy(()=>import('../Components/Home/OtherNews/OtherNews'));


// import AdContentArea from '../Components/Home/AdContentArea'
// import FeaturedPost from '../Components/Home/FeaturedPost'
// import CategoryList from '../Components/Home/CategoryList/CategoryList'
// import LatestNews from '../Components/Home/LatestNews/LatestNews.jsx'
// import NewsTabs from '../Components/Home/NewsTabs/NewsTabs'
// import NewsVideo from '../Components/Home/NewsVideo/NewsVideo'
// import OtherNews from '../Components/Home/OtherNews/OtherNews'

const Home = () => {

    return (
        <>
        <Suspense fallback={<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
    <rect width="400" height="300" fill="#fcfcfc"></rect>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="26px" fill="#cccccc">Loading</text>   
</svg></div>}>
            <Helmet>
                <title>Daily News</title>
                <meta name="description" content="Latest News in English, Hindi and Marathi of India" />
            </Helmet>
            {/* Featured Post */}
            
            <FeaturedPost />
            <CategoryList />
            <AdContentArea />
            <LatestNews />
            <AdContentArea />
            <NewsTabs />
            <NewsVideo />
            <OtherNews />
            <AdContentArea />
            </Suspense>
        </>
    )
}

export default Home
