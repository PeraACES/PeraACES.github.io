import Footer from '../components/footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import Body from '../components/Body/Body'
import styles from '../public/css/Home.module.css'
import Head from 'next/head'
import React from 'react'
//import Scroll from '../components/Body/Scroll'

export default function Home() {
    
    /*React.useEffect(() => {
        var loader = document.getElementById('preloader');
        window.addEventListener('load',function(){
            loader.style.display="none"
            
        })
    },[])*/

    return ( <div className = { styles.container } >
        <Head>
        <title>ACES</title>
        <meta name="description" content="aces" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_MAINPATH}/img/logo_1.png`} />
        
        </Head>
        {/*<div id="preloader">
            { <p>Loading...</p>}
        </div>*/}
        <NavBar page_no = {1} path="main"/>
        <div className = "main-container" >
        <video src = {`${process.env.NEXT_PUBLIC_MAINPATH}/video/video.mp4`}
        autoPlay = "true"
        loop = "true"
        muted = "true" />
        <h2 className = {"main-heading"+` ${styles.heading}`} > Association of Computer Engineering Students </h2>  
        <p className = {"main-subheading"+ ` ${styles.sub}`} > -University of Peradeniya - </p>  
        </div >  
        <Body />
      	{/*<Scroll />*/}
        <Footer />
        </div>
    )
    
    
}

