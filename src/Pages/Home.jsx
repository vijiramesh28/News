import AdContentArea from '../Components/Home/AdContentArea'
import FeaturedPost from '../Components/Home/FeaturedPost'
import CategoryList from '../Components/Home/CategoryList/CategoryList'
import LatestNews from '../Components/Home/LatestNews/LatestNews.jsx'
import NewsTabs from '../Components/Home/NewsTabs/NewsTabs'
import NewsVideo from '../Components/Home/NewsVideo/NewsVideo'
import OtherNews from '../Components/Home/OtherNews/OtherNews'
import { Helmet } from 'react-helmet'
const Home = () => {

    return (
        <>
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
        </>
    )
}

export default Home
