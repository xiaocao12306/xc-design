import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
function App() {
  return (
    <div className="App">
      <Menu defaultIndex={0} mode='vertical'>
        <MenuItem index={0}>menu-1</MenuItem>
        <MenuItem index={1} disabled>menu-2-disabled</MenuItem>
        <MenuItem index={2}>menu-3</MenuItem>
      </Menu>

      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button btnType={ButtonType.Primary}>Primary</Button>
      <Button btnType={ButtonType.Danger}>Danger</Button>
      <Button size={ButtonSize.Large}>Large</Button>
      <Button size={ButtonSize.Small}>Small</Button>
      <Button
        btnType={ButtonType.Link}
        href="https://lixis.cn"
        size={ButtonSize.Large}
      >
        Hello
      </Button>
      <Button
        btnType={ButtonType.Link}
        disabled
        href="https://lixis.cn"
        size={ButtonSize.Large}
      >
        Hello
      </Button>
    </div>
  )
}

export default App
