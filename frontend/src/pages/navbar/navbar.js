import './navbar.css';
import logo from '../assets/img/bitlogo.png'
import { FaUserCircle } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { RiDashboardFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { ImBlocked } from "react-icons/im";
import { FiCheckCircle } from "react-icons/fi";
import { MdOutlineSchedule } from "react-icons/md";
import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';



function Navbar() {
    
    const [isCurrentMenuActivated, setIsCurrentMenuActivated] = useState(false);
    const [currentURL, setCurrentURL] = useState(null);
    const [runOneTime, setRunOneTime] = useState(false);
    const navigate = useNavigate();
    
    
    function removeActive() {
        document.querySelectorAll(".active").forEach((ele)=>{ele.classList.remove("active")})
    }

    const checkForLoaded = () => {
         const checkIntervel = setInterval(()=>{
            if (isCurrentMenuActivated == false) {
                setIsCurrentMenuActivated(true);
                removeActive();
        
                const currentPage = document.URL.split("/")[3]
                setCurrentURL(currentPage)
                if (currentPage == "dashboard") {
                    const menu = document.getElementById("dashboard");
                    if (menu == null) {
                        console.log("not found");
                        setIsCurrentMenuActivated(false);
                        console.log("waiting");
                    }
                    else {
                        menu.classList.add("active")
                        clearInterval(checkIntervel)
                    }
                }
                else if (currentPage == "search") {
                    const menu = document.getElementById("search");
                    if (menu == null) {
                        console.log("not found");
                        setIsCurrentMenuActivated(false);
                        console.log("waiting");
                    }
                    else {
                        menu.classList.add("active")
                        clearInterval(checkIntervel)
                    }
                }
                else if (currentPage == "block") {
                    const menu = document.getElementById("block");
                    if (menu == null) {
                        setIsCurrentMenuActivated(false);
                    }
                    else {
                        menu.classList.add("active")
                        clearInterval(checkIntervel)
                    }
                }
                else if (currentPage == "unblock") {
                    const menu = document.getElementById("unblock");
                    if (menu == null) {
                        setIsCurrentMenuActivated(false);
                    }
                    else {
                        menu.classList.add("active")
                        clearInterval(checkIntervel)
                    }
                }
                else if (currentPage == "schedule") {
                    const menu = document.getElementById("schedule");
                    if (menu == null) {
                        setIsCurrentMenuActivated(false);
                    }
                    else {
                        menu.classList.add("active")
                        clearInterval(checkIntervel)
                    }
                }
            }
        },100)
    }

    const logout = ()=>{
        cookie.set("JWT", "");
        navigate("/login")
    }


    useEffect(()=>{
            setIsCurrentMenuActivated(false)
            checkForLoaded();
            setRunOneTime(true);
    },[currentURL])
    
    function navigateTo(url) {
        // setTimeout(() => {
        //     checkForLoaded()
        // }, 500);
        setCurrentURL(null)
        navigate(url)
        
    }
    

    return (
        <>
            
            <div className="leftnavbar">
                <ul>
                    <li className='logo'><img src={logo} alt="BIT LOGO" /></li>
                    <li id='dashboard' className='menu' onClick={()=>{ navigateTo("/dashboard")}}>
                        <RiDashboardFill className='navIcon'/>
                        <h1>DashBoard</h1>
                    </li>
                    <li id='search' className='menu' onClick={()=>{ navigateTo("/search")}}>
                        <FaSearch className='navIcon'/>
                        <h1>Search Gmail Acount</h1>
                    </li>
                    <li id='block' className='menu' onClick={()=>{ navigateTo("/block")}}>
                        <ImBlocked className='navIcon'/>
                        <h1>Block Gmail</h1>
                    </li>
                    <li id='unblock' className='menu' onClick={()=>{ navigateTo("/unblock")}}>
                        <FiCheckCircle className='navIcon'/>
                        <h1>UnBlock Gmail</h1>
                    </li>
                    <li id='schedule' className='menu' onClick={()=>{ navigateTo("/schedule")}}>
                        <MdOutlineSchedule className='navIcon'/>
                        <h1>Schedule</h1>
                    </li>
                    <li className='menu bottom' onClick={logout}>
                        <TbLogout className='navIcon'/>
                        <h1>Logout</h1>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;