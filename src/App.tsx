import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Button, { ButtonType, ButtonSize } from './components/Button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Alert from './components/Alert'
import { Tabs } from './components/Tabs'
import { TabPane } from './components/Tabs/TabPane'
import Icon from './components/Icon'
import Transition from './components/Transition'
library.add(fas)
function App() {
  const callback = (index: number) => console.log(index)
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <Transition in={show} timeout={300} animation="zoom-in-left" unmountOnExit={false}>
        <div className="side">
          <Menu defaultIndex={'0'} mode="vertical" defaultOpenSubMenus={['2']}>
            <MenuItem icon={<Icon icon="coffee"></Icon>}>menu-1</MenuItem>
            <MenuItem disabled>menu-2-disabled</MenuItem>
            <SubMenu title="sub-menu">
              <MenuItem>sub-menu-1</MenuItem>
              <MenuItem>sub-menu-2</MenuItem>
              <MenuItem>sub-menu-3</MenuItem>
              <MenuItem>sub-menu-4</MenuItem>
            </SubMenu>
          </Menu>
        </div>
      </Transition>
      <Button size={ButtonSize.Large} onClick={()=>setShow(!show)}>
        open
      </Button>
      {/* <hr></hr>
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
      <hr></hr>
      <Alert
        onClose={() => console.log('close')}
        title="this is alert!"
        closable
      />
      <Alert type="success" title="this is alert!" closable />
      <Alert type="warning" title="this is alert!" />
      <Alert type="danger" title="this is alert!" />
      <Alert
        type="danger"
        title="this is alert!"
        description="this is a descript:hello i am xiaocao ^-^"
      />

      <hr></hr>
      <Tabs defaultActiveKey="2" onChange={callback}>
        <TabPane tab="tab 1" key="1">
          first
        </TabPane>
        <TabPane tab="tab 2" key="2">
          second
        </TabPane>
        <TabPane tab="tab 3" key="3">
          third
        </TabPane>
      </Tabs> */}
    </div>
  )
}

export default App
