/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react'
import { render, RenderResult,fireEvent,cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Alert,{AlertProps} from '.'
const testProps: AlertProps = {
	onClose: jest.fn(),
	title:'this is a title'
}
describe('test alert component', () => {
	it('default alert', () => {
		const view = render(<Alert title={testProps.title}></Alert>)
		const element = view.getByTestId('test-alert')
		expect(element).toBeInTheDocument()
		expect(element).toHaveClass('xc-alert')
		const titleElement = view.getByText(testProps.title)
		expect(titleElement).toBeInTheDocument()
		expect(titleElement).toHaveClass('xc-alert-title')
	})
	it('test alert close', async () => {
		const view = render(<Alert title={testProps.title} closable onClose={testProps.onClose}></Alert>)
		const element = view.getByTestId('test-alert-closable');
		expect(element).toBeInTheDocument()
		expect(element).toHaveClass('xc-alert-close')
		fireEvent.click(element)
		expect(testProps.onClose).toHaveBeenCalled()
		await new Promise((r) => setTimeout(r, 400));
		expect(element).not.toBeInTheDocument()
	})
})