import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header/Header';
import BodyContent from './component/bodyContent/BodyContent';
import ImageSwiper from './component/bodyContent/ImageSwiper';
import YoutubeSource from './component/youtube/YoutubeSource';
import Footer from './component/Footer/Footer';
export default function App() {
  return (
    <div className='overflow-hidden'>
   <Header/>
   <BodyContent/>
   <ImageSwiper/>
   <YoutubeSource/>
   <Footer/>
    </div>
  )
}
