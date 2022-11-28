process.on('exit', function () {
	console.log('退出进程');
});
if (!process.argv[2]) {
	console.error('[组件名]必填');
	process.exit(1);
}
const path = require('path')
const fileSave = require('file-save')
const uppercamelcase = require('uppercamelcase')

const componentName = process.argv[2]
const ComponentName = uppercamelcase(componentName)
const componentPath = path.resolve(__dirname, '../src/components', ComponentName);
const files = [
	{
		fileName: 'index.tsx', content: `
		import React from "react";
		import classNames from 'classnames'
		type ${ComponentName}Props = {
			children: React.ReactNode
		}
		export const  ${ComponentName}: React.FC<${ComponentName}Props> = (props) => {
			const {children} = props
			return (<>{children}</>)
		}
		`},
	{
		fileName: `${componentName}.test.tsx`, content: `
			import React from 'react'
			import { render, RenderResult,fireEvent,cleanup } from '@testing-library/react'
			import '@testing-library/jest-dom/extend-expect'
			import ${ComponentName} from '.'
	`}
]

files.forEach((file) => {
	fileSave(path.join(componentPath, file.fileName)).write(file.content, 'utf8').end('\n');
})
console.log('DONE!');
