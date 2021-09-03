import LatNewsSlider from './LatNewsSlider'
const LatestNews = () => {
    return (

        <>
            {/* <!-- Latest News Area Start --> */}
            <section className="utf_latest_new_area pb-bottom-20">
                <div className="container">
                    <div className="utf_latest_news block color-red">
                        <h3 className="utf_block_title"><span>Editor's Picks</span></h3>
                       
                            <LatNewsSlider  />
                                               
                       
                    </div>
                </div>
            </section>
            {/* <!-- Latest News Area End --> */}
        </>
    )
}

export default LatestNews
