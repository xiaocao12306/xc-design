import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'
type AnimationName =
  | 'zoom-in-top'
  | 'zoom-in-left'
  | 'zoom-in-bottom'
  | 'zoom-in-right'
// TODO typescript 中interface不能拓展 interface联合类型(&)故使用type联合类型定义transition props
type TransitionProps = CSSTransitionProps & {
  children?: React.ReactNode
  animation?: AnimationName
}
const Transition: React.FC<TransitionProps> = (props) => {
  const { children, animation, classNames, ...restProps } = props
  return (
    <CSSTransition
      classNames={classNames ? classNames : animation}
      {...restProps}
    >
      {children}
    </CSSTransition>
  )
}
Transition.defaultProps = {
	unmountOnExit: true,
	appear:true
}
export default Transition
