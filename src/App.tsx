import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
function App() {
  return (
    <div className="App">
      <Menu defaultIndex={'0'} mode='vertical' defaultOpenSubMenus={['2']}>
        <MenuItem>menu-1</MenuItem>
        <MenuItem disabled>menu-2-disabled</MenuItem>
        <SubMenu title='sub-menu'>
          <MenuItem>sub-menu-1</MenuItem>
        </SubMenu>
      </Menu>

      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button btnType={ButtonType.Primary}>Primary</Button>
      <Button btnType={ButtonType.Danger}>Danger</Button>
      <Button size={ButtonSize.Large}>Large</Button>
      <Button size={ButtonSize.Small}>Small</Button>
      <Button
        btnType={ButtonType.Link}
        href="https://lixiscao.cn"
        size={ButtonSize.Large}
      >
        Hello
      </Button>
      <Button
        btnType={ButtonType.Link}
        disabled
        href="https://lixiscao.cn"
        size={ButtonSize.Large}
      >
        Hello
      </Button>
    </div>
  )
}

export default App
