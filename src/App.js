// import { useTranslation } from 'react-i18next';
import React from 'react'
import { Suspense,lazy } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import { lang,translate } from './Context/translate.context';


const Header = lazy(()=>import('./Components/Header'));
const Footer = lazy(()=>import('./Components/Footer'));
const Category = lazy(()=>import('./Pages/Category'));
const PageNotFound = lazy(()=>import('./Pages/PageNotFound'));
const Post = lazy(()=>import('./Pages/Post'));
const Home = lazy(()=>import('./Pages/Home'));

// import Footer from './Components/Footer';
// import Header from './Components/Header'
// import Category from './Pages/Category';
// import Home from './Pages/Home' 
// // import Login from './Pages/Login';
// import PageNotFound from './Pages/PageNotFound';
// import Post from './Pages/Post';




function App() {
//   const { t } = useTranslation()
//  const data =  t('language.name',{returnObjects: true})
//   console.log(data)
  return (
    <>
    
{/* //     <h2>{data}</h2>  */}
  <BrowserRouter>
<div className="body-inner">
    <Suspense fallback={<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
    <rect width="400" height="300" fill="#fcfcfc"></rect>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="26px" fill="#cccccc">Loading</text>   
</svg></div>}>
    <translate.Provider value={lang}>
    <Header />
    
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category/:catid" component={Category} />
        <Route exact path="/category/:catid/:subid" component={Category} />
        {/* <Route exact path="/login" component={Login} /> */}
        <Route  exact path="/post/:postid" component={Post} />
        {/* <Route exact path="/subcategory" component={Subcategory} /> */}
        <Route component={PageNotFound} />
    </Switch>
    
    <Footer />
    </translate.Provider>
    </Suspense>
</div>
    </BrowserRouter>
    </>
  );
}

export default App;
