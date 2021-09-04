import dateFormat from 'dateformat'

const TabMainNews = ({postData}) => {
    return (
        <>
        {
            postData.slice(0,1).map((curElem, ind)=>curElem.posts.slice(0,1).map((post,ind)=>{
                const postdate =  post.updated_at;
                const postmoddate = dateFormat(postdate,"dd mmmm , yyyy");
                return(
                    <div className="utf_post_block_style clearfix">
                <div className="utf_post_thumb">
                    <a href="/"> <img className="img-fluid" src={`https://wcprojects.in/public/media/posts/img1/${post.img_1}`} alt="" /> </a>
                </div>
                <a className="utf_post_cat" href="/">{curElem.name}</a>
                <div className="utf_post_content">
                    <h2 className="utf_post_title"><a href="/">{post.title}</a></h2>
                    <div className="utf_post_meta">
                        <span className="utf_post_date"><i className="fa fa-clock-o"></i>{postmoddate}</span>
                    </div>
                    <p>{post.details.substring(0, 200) + "..."}</p>
                </div>
            </div>
                )
            }))
        }
            
        </>
    )
}

export default TabMainNews
