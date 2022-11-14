import React from 'react'
import { render,fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button,{ButtonProps,ButtonSize,ButtonType} from '.'
const defaultProps = {
	onClick:jest.fn()
}
const testProps: ButtonProps = {
	btnType: ButtonType.Primary,
	size: ButtonSize.Large,
	className:'class'
}

const disabledProps: ButtonProps = {
	disabled: true,
	onClick:jest.fn()
}
// 轮廓
describe('test button compontnt', () => {
	it('default button', () => {
		const view = render(<Button {...defaultProps}>Default</Button>)
	// eslint-disable-next-line testing-library/prefer-screen-queries
		const element = view.getByText('Default') as HTMLButtonElement
		expect(element).toBeInTheDocument()
		expect(element.tagName).toEqual('BUTTON')
		expect(element.disabled).not.toBeTruthy()
		expect(element).toHaveClass('btn btn-default')
		fireEvent.click(element)
		expect(defaultProps.onClick).toHaveBeenCalled()
	})

	it('测试不同的prop能够对于渲染', () => {
		const view = render(<Button {...testProps}>Default</Button>)
		// eslint-disable-next-line testing-library/prefer-screen-queries
		const element = view.getByText('Default')
		expect(element).toBeInTheDocument()
		expect(element).toHaveClass('btn-primary btn-lg class')
	})

	it('当btnType为link并且提供了href的时候，渲染一个a链接', () => {
		const view = render(<Button btnType={ButtonType.Link} href="http://baidu.com">link</Button>)
			// eslint-disable-next-line testing-library/prefer-screen-queries
		const element = view.getByText('link')
		expect(element).toBeInTheDocument()
		expect(element.tagName).toEqual('A')
		expect(element).toHaveClass('btn-link btn')
	})

	it('当disabled的时候，渲染disabled按钮', () => {
		const view = render(<Button {...disabledProps}>Default</Button>)
	// eslint-disable-next-line testing-library/prefer-screen-queries
		const element = view.getByText('Default') as HTMLButtonElement
		expect(element).toBeInTheDocument()
		expect(element.disabled).toBeTruthy()
		fireEvent.click(element)
		expect(disabledProps.onClick).not.toHaveBeenCalled()
	})
})