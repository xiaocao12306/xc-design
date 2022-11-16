/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react'
import { render, RenderResult,fireEvent,cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Menu, { MenuProps } from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'
const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test',
}

const testVerProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical',
}

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled>
        disabled
      </MenuItem>
			<MenuItem>xyz</MenuItem>
			<SubMenu title='dropdown'>
				<MenuItem>drop1</MenuItem>
			</SubMenu>
    </Menu>
  )
}

const createStyleFile = () => {
	const cssFile: string = `
		.ex-submenu {
			display:none;
		}
		.menu-open {
			display:block;
		}
	`
	const style = document.createElement('style')
	style.innerHTML = cssFile
	style.type = 'text/css'
	return style
}
let views: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement
describe('测试menu', () => {
  beforeEach(() => {
		views = render(generateMenu(testProps))
		views.container.append(createStyleFile())
    menuElement = views.getByTestId('test-menu')
    activeElement = views.getByText('active')
		disabledElement = views.getByText('disabled')
		
  })
	it('提供默认属性后会提供默认class属性', () => {
		expect(menuElement).toBeInTheDocument()
		expect(menuElement).toHaveClass('xc-menu test')
		expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4)
		expect(activeElement).toHaveClass('menu-item is-active')
		expect(disabledElement).toHaveClass('menu-item is-disabled')
	})
	it('点击后会切换到特定的item上，并且触发对应回调。', () => {
		const thirdItem = views.getByText('xyz')
		fireEvent.click(thirdItem)
		expect(thirdItem).toHaveClass('is-active')
		expect(activeElement).not.toHaveClass('is-active')
		expect(testProps.onSelect).toHaveBeenCalledWith('2')
		fireEvent.click(disabledElement)
		expect(disabledElement).not.toHaveClass('is-active')
		expect(testProps.onSelect).not.toHaveBeenCalledWith('1')
	})
	it('传入mode为vertical的时候，class转为vertical', () => {
		cleanup()
		const views = render(generateMenu(testVerProps));
		const menuElement = views.getByTestId('test-menu');
		expect(menuElement).toHaveClass('menu-vertical')
	})
	it('hover的时候显示menuItem',async () => {
		
		expect(views.queryByText('drop1')).not.toBeVisible()
		const dropdownEle = views.getByText('dropdown')
		fireEvent.mouseEnter(dropdownEle)
		setTimeout(() => {
			expect(views.queryByText('drop1')).toBeVisible()
		}, 300)
		
		fireEvent.click(views.getByText('drop1'))
		expect(testProps.onSelect).toHaveBeenCalledWith('3-0')
		fireEvent.mouseLeave(dropdownEle)
		setTimeout(() => {
			expect(views.queryByText('drop1')).not.toBeVisible()
		},300)
	})
})
