import React, {useEffect, useState} from "react"
import './MySwiper.css'

export const MySwiper = ({slides, class_container, class_wrapper, width, height}) => {

    let position = width * (slides.length / 2 - 0.5)
    let index = 0

    let [view, setView] = useState(0)

    let x = window.matchMedia("(max-width: 800px)")
    window.addEventListener('resize', ()=>{
        if (x.matches) {
            setView(1.3)
            // view = 1.5
        } else {
            setView(2)
            // view = 2
        }
    })

    useEffect(()=>{
        const container = document.querySelector(`.${class_container}`)
        // container.style.width = String(view*width) + 'px'
        container.style.height = String(height) + 'px'
        const wrapper = document.querySelector(`.${class_wrapper}`)
        wrapper.style.height = String(height) + 'px'
        wrapper.style.transform = 'translateX('+ String(position) +'px)'
        const slidesTags = document.querySelectorAll('.swiper_slide')
        slidesTags[index].classList.add('currentSlide')
        if(index + 1 <= slides.length - 1){
            slidesTags[index + 1].classList.add('rightSlide')
        }

        if (x.matches) {
            setView(1.3)
        } else {
            setView(2)
        }
    },[])

    const handeRight = () => {
        if(index < slides.length - 1){
            const slidesTags = document.querySelectorAll('.swiper_slide')
            if(index - 1 >= 0){
                slidesTags[index - 1].classList.remove('leftSlide')
            }
            slidesTags[index].classList.remove('currentSlide')
            slidesTags[index].classList.add('leftSlide')
            const wrapper = document.querySelector(`.${class_wrapper}`)
            position -= width
            wrapper.style.transform = 'translateX('+ String(position) +'px)'
            index++
            slidesTags[index].classList.remove('rightSlide')
            slidesTags[index].classList.add('currentSlide')
            if(index + 1 <= slides.length - 1){
                slidesTags[index + 1].classList.add('rightSlide')
            }
        }
    }

    const handleLeft = () => {
        if(index > 0){
            const slidesTags = document.querySelectorAll('.swiper_slide')
            if(index + 1 <= slides.length - 1){
                slidesTags[index + 1].classList.remove('rightSlide')
            }
            slidesTags[index].classList.remove('currentSlide')
            slidesTags[index].classList.add('rightSlide')
            const wrapper = document.querySelector(`.${class_wrapper}`)
            position += width
            wrapper.style.transform = 'translateX('+ String(position) +'px)'
            index--
            slidesTags[index].classList.remove('leftSlide')
            slidesTags[index].classList.add('currentSlide')
            if(index - 1 >= 0){
                slidesTags[index - 1].classList.add('leftSlide')
            }
        }
    }

    return(
        <div className={`${class_container} swiper_container`} style={{width: String(view*width) + 'px'}}>
            <div className={'swiper_arrow swiper_arrow_right'} onClick={handeRight}>&#62;</div>
            <div className={'swiper_arrow swiper_arrow_left'} onClick={handleLeft}>&#60;</div>
            <div className={`${class_wrapper} swiper_wrapper`}>
                {slides.map(slide => (
                    <div className={'swiper_slide'}
                         style={{width: String(width) + 'px'}}
                    >
                        {slide.img}
                        <div className={'swiper_slide_link'}>
                            <span className={'link link_website'} onClick={()=>{
                                window.open(slide.website)
                            }}>WebSite</span>
                            <span className={'link link_github'} onClick={()=>{
                                window.open(slide.github)
                            }}>GitHub</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}