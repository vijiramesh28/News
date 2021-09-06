// import { useTranslation } from 'react-i18next';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header'
import Category from './Pages/Category';
import Home from './Pages/Home';
import Login from './Pages/Login';
import PageNotFound from './Pages/PageNotFound';
import Post from './Pages/Post';


function App() {
//   const { t } = useTranslation()
//  const data =  t('language.name',{returnObjects: true})
//   console.log(data)
  return (
    <>
    
{/* //     <h2>{data}</h2>  */}
  <BrowserRouter>
<div className="body-inner">
    <Header />
    
    <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/category/:catid" component={Category} />
        <Route exact path="/category/:catid/:subid" component={Category} />
        <Route exact path="/login" component={Login} />
        <Route  exact path="/post/:postid" component={Post} />
        {/* <Route exact path="/subcategory" component={Subcategory} /> */}
        <Route component={PageNotFound} />
    </Switch>

    <Footer />
</div>
    </BrowserRouter>
    </>
  );
}

export default App;
