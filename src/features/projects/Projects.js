import React from "react"
import './projects.css'
import {MySwiper} from "./MySwiper/MySwiper";
import {Fade} from "react-reveal";

export const Projects = () => {

    let width
    let height

    if (window.matchMedia("(max-width: 800px)").matches) {
        width = 300
        height = 210
    } else {
        width = 390
        height = 300
    }


    const slides = [
        {img: <img src={'./projects/messenger.jpg'} alt={'MessengerFacebookClone'} />,
            github: 'https://github.com/hamzadevdz/WhoIsHamza',
            website: 'https://messenger-facebook-clone.netlify.app/'},
        {img: <img src={'./projects/instagram.JPG'} alt={'InstagramClone'} />,
        github: 'https://github.com/hamzadevdz/instagram-clone',
        website: 'https://instagram-clone-byhamza.netlify.app/'}
    ]

    return(
        <div id={'projects'} className={'projects'}>
            <div className={'projects__title'}>
                PROJECTS
                <span className={'projects__title__line'}></span>
            </div>
            <Fade bottom delay={300}>
                <MySwiper
                    slides={slides}
                    class_container={'projects__swiperContainer'}
                    class_wrapper={'projects__swiperWrapper'}
                    width={width}
                    height={height}
                />
            </Fade>
        </div>
    )
}