import React, { createContext, useState } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'
type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectIndex: string) => void
export interface MenuProps {
  defaultIndex?: string
  defaultOpenSubMenus?:string[]
  className?: string
  mode?: MenuMode
  style?: React.CSSProperties
  children?: React.ReactNode
  onSelect?: SelectCallback
}
interface ImenuContext {
  index: string
  onSelect?: SelectCallback
  mode?: MenuMode
  defaultOpenSubMenus?:string[]
}

export const MenuContext = createContext<ImenuContext>({ index: '0' })

const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect } = props
  const [currentActive, setActive] = useState(defaultIndex)
  const classes = classNames('xc-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal':mode !=='vertical'
  })
  const handleClick = (index: string) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }

  // TODO 传输的给item的数据context provider 的知识点
  const passedContext: ImenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode: mode,
    defaultOpenSubMenus:props.defaultOpenSubMenus
  }

  // 检验menu 的子组件是否为menuitem，如果不是就不进行渲染然后警告
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps> // 做一下断言
      const { displayName } = childElement.type
      if (displayName === 'menu-item' || displayName === 'sub-menu') { // clone 为了用户减少index的输入，不必要的传入index
        // TODO react cloneElemet的知识点实践，具体用法查看官网
        return React.cloneElement(childElement, {
          index:index.toString()
        })
      } else {
        console.error('警告: Menu has a child with not a react component')
      }
    })
  }
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus:[]
}
export default Menu
