import React from 'react'
import "./UserMenus.css"
import { userMenus } from '../../../source'
import ClickAwayListener from 'react-click-away-listener'

const UserMenus = ({onClose}) => {
  return (
    <ClickAwayListener onClickAway={onClose}>
        <ul className="user__menus">
            {
                userMenus.map((menu, index) => (
                    <li className='menu' key={index}>
                        {menu.name}
                    </li>
                ))
            }
        </ul>
    </ClickAwayListener>
  )
}

export default UserMenus