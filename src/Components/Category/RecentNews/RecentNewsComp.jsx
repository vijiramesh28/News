import Gadget4 from '../../../images/news/tech/gadget1.jpg'

const RecentNewsComp = () => {
    return (
        <>
               <li className="clearfix">
                    <div className="utf_post_block_style post-float clearfix">
                      <div className="utf_post_thumb"> <a href="/"> <img className="img-fluid" src={Gadget4} alt="" /> </a> <a className="utf_post_cat" href="/">Lifestyle</a> </div>                      
                      <div className="utf_post_content">
                        <h2 className="utf_post_title title-small"> <a href="post.html">Zhang social media pop also known when smart innocent...</a> </h2>
                        <div className="utf_post_meta"> <span className="utf_post_author"><i className="fa fa-user"></i> <a href="/">John Wick</a></span>  </div>
                      </div>
                    </div>
                  </li>
        </>
    )
}

export default RecentNewsComp
