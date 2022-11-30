import React, { useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
import Icon from '../Icon'
export interface MenuItemProps {
  index?: string
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  icon?:React.ReactNode
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children,icon } = props
  const context = useContext(MenuContext)
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index,
  })
  const handleClick = () => {
    if (context.onSelect && !disabled && (typeof index === 'string')) {
      context.onSelect(index)
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {icon ? <span className='xc-menu-icon'>{ icon }</span> : null}
      {children}
    </li>
  )
}
MenuItem.displayName = 'menu-item'
export default MenuItem
