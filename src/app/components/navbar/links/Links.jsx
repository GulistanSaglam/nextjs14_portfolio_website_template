"use client";
import Image from 'next/image'
import { useState } from 'react';
import NavLink from './navLink/navLink';
import sytles from './Link.module.css';


const links = [
    {
        title:"Home",
        path: "/",
    },
    {
        title:"About",
        path: "/about",
    },
    {
        title:"Contact",
        path: "/contact",
    },
    {
        title:"Project",
        path: "/project",
    },

]

const Links = () => {
    const[open, setOpen] = useState(false);
    

    return(
        <div className={sytles.container}>
        <div className={sytles.links}>
            {links.map((link =>{
               return <NavLink item={link} key={link.title}/>
            }))}
            
        </div>
    
        <Image 
        className={sytles.menuButton}
        src="/menu.png" 
        alt="menu image" 
        width={30} 
        height={30} 
        onClick={() => setOpen(prev => !prev)}  
        />
        {
            open && <div className={sytles.mobileLinks}>
                {links.map((link) => {
                   return <NavLink item={link} key={link.title}/>
                })}
            </div>
        }

        </div>
    )
}

export default Links;