import React from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon,FontAwesomeIconProps} from '@fortawesome/react-fontawesome'
export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'white' |'danger'
export interface IconProps extends FontAwesomeIconProps {
	theme?: ThemeProps,
	children?:React.ReactNode
}
const Icon: React.FC<IconProps> = (props) => {
	const { children, className, theme, ...resetProps } = props
	const classes = classNames('xc-icon', className, {
		[`icon-${theme}`]:theme
	})
	return (<FontAwesomeIcon className={classes} {...resetProps} />)
}

export default Icon
