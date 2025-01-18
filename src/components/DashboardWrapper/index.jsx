import React, { useState } from 'react'
import { profile1 } from '../../assets/images'
import { IoIosNotifications } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'
import { TiThMenu } from 'react-icons/ti'
import "./DashboardWrapper.css"
import Sidebar from '../Sidebar'
import UserMenus from './UserMenus'
import ThemeToggle from '../ThemeToggle'

const DashboardWrapper = ({
    children,
    contentClassName,
}) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showUserMenus, setShowUserMenus] = useState(false);
  return (
    <section className='dashboard__wrapper'>
        <Sidebar
        show={showSidebar}
        onClose={()=>setShowSidebar(!showSidebar)}
        />
        <main>
            <nav>
                <div className="user__container">
                    <div className="profile" onClick={()=>setShowUserMenus(!showUserMenus)}>
                        <img src={profile1} alt="" />
                </div>
                <div className="details">
                    <h3 className="name">User</h3>
                    <small className="text__muted">user@gmail.com</small>
                </div>
                {showUserMenus ? (<UserMenus onClose={()=>setShowUserMenus(!showUserMenus)}/>):""} 
                </div>
                <div className="buttons__container">
                    <div className="search__container">
                        <IoSearch/>
                        <input type="text" placeholder="Search items..." />
                    </div>
                    <ThemeToggle/>
                    <div className="icon__container hover__fill">
                        <IoIosNotifications/>
                    </div>
                    <div className="icon__container menu__btn" onClick={()=>setShowSidebar(!showSidebar)}>
                        <TiThMenu />
                    </div>
                </div>
            </nav>
            <section 
                className={`content ${contentClassName ? contentClassName:""}`}>
                {children}
            </section>
        </main>
    </section>
  )
}

export default DashboardWrapper