import LatNewsSlider from './LatNewsSlider'
import { Container } from 'react-bootstrap'
const LatestNews = () => {
    return (

        <>
            {/* <!-- Latest News Area Start --> */}
            <section className="utf_latest_new_area pb-bottom-20">
                <Container>
                    <div className="utf_latest_news block color-red">
                        <h3 className="utf_block_title"><span>Editor's Picks</span></h3>
                       
                            <LatNewsSlider  />
                                                                    
                    </div>
                </Container>
            </section>
            {/* <!-- Latest News Area End --> */}
        </>
    )
}

export default LatestNews
