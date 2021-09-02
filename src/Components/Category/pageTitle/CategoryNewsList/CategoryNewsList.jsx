import OtherNewsComp from "../../../Home/OtherNews/OtherNewsComp"
import RecentNews from "../../RecentNews/RecentNews"

const CategoryNewsList = () => {
    return (
        <>

  <section className="utf_block_wrapper">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <div className="block category-listing category-style2">
            <h3 className="utf_block_title"><span>Crime News</span></h3>
            <ul className="subCategory unstyled">
              <li><a href="/">Anti Curroption</a></li>
              <li><a href="/">Police News</a></li>
            </ul>
           <OtherNewsComp />
            <OtherNewsComp />
            
          </div>
          
          <div className="paging">
            <ul className="pagination">

              <li><a href="/">{`>`}</a></li>
              <li className="active"><a href="/">1</a></li>
              <li><a href="/">2</a></li>
              <li><a href="/">3</a></li>
              <li><a href="/">4</a></li>
              <li><a href="/">{`>`}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="col-lg-4 col-md-12">
          <div className="sidebar utf_sidebar_right">
           <RecentNews />



                
          </div>
        </div>
      </div>
    </div>
  </section>

            
        </>
    )
}

export default CategoryNewsList
