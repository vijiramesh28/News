import dateFormat from 'dateformat'

const TabLists = ({postData}) => {
    console.log(postData);
    return (
        <>
        {
            postData.slice(0,1).map((curElem,ind)=>curElem.posts.slice(0,4).map((post,ind)=>{
                const postdate =  post.updated_at;
                const postmoddate = dateFormat(postdate,"dd mmmm , yyyy");
                return(
                    <li key={post.id} className="clearfix">
                    <div className="utf_post_block_style post-float clearfix">
                        <div className="utf_post_thumb">
                            <a href="/"> <img className="img-fluid" src={`https://wcprojects.in/public/media/posts/img1/${post.img_1}`} alt="" /> </a>
                        </div>
                        <div className="utf_post_content">
                            <h2 className="utf_post_title clamped clamped title-small">
                                <a href="/">{post.title}</a>
                            </h2>
                            <div className="utf_post_meta">
                                <span className="utf_post_date"><i className="fa fa-clock-o"></i>{postmoddate}</span>
                            </div>
                        </div>
                    </div>
                </li>
                )
            }))
        }
          
        </>
    )
}

export default TabLists
