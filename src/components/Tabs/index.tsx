import React from 'react'
type TabsProps = {
	children?: React.ReactNode
	activeKey?: string
	defaultActiveKey?:string
	onChange?: (index: number) => void
}
export const Tabs: React.FC<TabsProps> = (props) => {
  const {children} = props
  return <>{children}</>
}
