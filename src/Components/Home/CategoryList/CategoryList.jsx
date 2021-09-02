import { useState, useEffect } from "react"
import CategoryListComp from "./CategoryListComp"
// import CategoryListData from "./CategoryData"
import instance from '../../../Api/axios'
const CategoryList = () => {
 
    const [user, setUser] = useState([])
    
    const getUserData = async() =>{
       const request =  await instance.get('https://wcprojects.in/api/eng/categories')
       console.log(request.data.language);
       setUser(request.data.language.categories)
    }
 
    useEffect(() => {
        getUserData()
        
    }, [user])
  
    
   
    return (
        <>
              {/* <!-- 2rd Block Wrapper Start --> */}
            <section className="utf_block_wrapper p-top-0 p-bottom-0">
                <div className="container">
                    <div className="row">

                        {
                            user.map((currElem, index)=>{
                                return <CategoryListComp key={index} CategoryName={currElem.name} />
                            })
                        }
                        
                        
             
                    </div>
                </div>
            </section>
            {/* <!-- 2rd Block Wrapper End --> */}
        </>
    )
}

export default CategoryList
