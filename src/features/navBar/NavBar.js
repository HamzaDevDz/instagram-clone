import React, {useEffect} from "react"
import './navBar.css'
import AnchorLink from "react-anchor-link-smooth-scroll";
import {Slide} from "react-reveal";

export const NavBar = () => {

    let aboutCoord
    let projectsCoord
    let contactCoord
    useEffect(()=>{
        aboutCoord = document.getElementById('about').offsetTop
        projectsCoord = document.getElementById('projects').offsetTop
        contactCoord = document.getElementById('contact').offsetTop
        console.log(aboutCoord)
        console.log(projectsCoord)
        console.log(contactCoord)
    },[])

    window.onscroll = () => {
        const navBar = document.querySelector('.navBar')
        if(window.scrollY >= window.innerHeight){
            if(!navBar.classList.contains('floating')){
                navBar.classList.add('floating')
            }
        }
        else{
            if(navBar.classList.contains('floating')){
                navBar.classList.remove('floating')
            }
        }

        const offset = 50

        const navBar_home = document.querySelector('.navBar__anchors__home')
        const navBar_about = document.querySelector('.navBar__anchors__about')
        const navBar_projects = document.querySelector('.navBar__anchors__projects')
        const navBar_contact = document.querySelector('.navBar__anchors__contact')

        const Y = window.scrollY
        console.log(Y)

        if(Y < aboutCoord){
            if(navBar_about.classList.contains('into')){
                navBar_about.classList.remove('into')
            }
            if(!navBar_home.classList.contains('into')){
                navBar_home.classList.add('into')
            }
        }
        else if(Y >= aboutCoord && Y < projectsCoord){
            if(navBar_home.classList.contains('into')){
                navBar_home.classList.remove('into')
            }
            if(navBar_projects.classList.contains('into')){
                navBar_projects.classList.remove('into')
            }
            if(!navBar_about.classList.contains('into')){
                navBar_about.classList.add('into')
            }
        }
        else if(Y >= projectsCoord && Y < contactCoord){
            if(navBar_about.classList.contains('into')){
                navBar_about.classList.remove('into')
            }
            if(navBar_contact.classList.contains('into')){
                navBar_contact.classList.remove('into')
            }
            if(!navBar_projects.classList.contains('into')){
                navBar_projects.classList.add('into')
            }
        }
        else if(Y >= contactCoord){
            console.log('contact')
            if(navBar_projects.classList.contains('into')){
                navBar_projects.classList.remove('into')
            }
            if(!navBar_contact.classList.contains('into')){
                navBar_contact.classList.add('into')
            }
        }
    }

    return(
        <div className={'navBar'}>
            <div className={'navBar__anchors'}>
                <AnchorLink href='#header' className={'navBar__anchors__home navBar__anchor'}>HOME</AnchorLink>
                <AnchorLink href='#about' className={'navBar__anchors__about navBar__anchor'}>ABOUT</AnchorLink>
                <AnchorLink href='#projects' className={'navBar__anchors__projects navBar__anchor'}>PROJECTS</AnchorLink>
                <AnchorLink href='#contact' className={'navBar__anchors__contact navBar__anchor'}>CONTACT</AnchorLink>
            </div>
        </div>
    )
}