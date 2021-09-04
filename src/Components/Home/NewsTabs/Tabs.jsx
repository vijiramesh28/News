

const Tabs = ({submenuList}) => {
    return (
        <>
        {
            submenuList.slice(0,1).map((submenu,ind)=>{
                console.log(submenu.name);
                return(
                    <li className="nav-item">
                    <a className="nav-link animated fadeIn active" href="#tab_a" data-toggle="tab">
                        <span className="tab-head"> <span className="tab-text-title">{submenu.name}</span> </span>
                    </a>
                </li>
                )
            
            })
        }
            
        </>
    )
}

export default Tabs
