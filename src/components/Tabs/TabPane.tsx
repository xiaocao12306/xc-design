import React from "react";
import classNames from 'classnames'
type TabPaneProps = {
	children: React.ReactNode
	tab?: string
	key?:string
}
export const TabPane: React.FC<TabPaneProps> = (props) => {
	const {children} = props
	return (<>{children}</>)
}