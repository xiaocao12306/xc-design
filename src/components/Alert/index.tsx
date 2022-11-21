import React, { useState } from 'react'
import classNames from 'classnames'
import anime from 'animejs'
export type types = 'success' | 'default' | 'danger' | 'warning'
export type AlertProps = {
  title: string
  description?: string
  type?: types
  onClose?: React.MouseEventHandler<Element>
  closable?: boolean
  className?: string
}
const Alert: React.FC<AlertProps> = (props) => {
  const { title, description, type, closable, onClose, className } = props
	const [showAlert, setAlert] = useState(true)
  const classes = classNames(
    'xc-alert',
    {
      [`xc-alert-${type}`]: type,
      [`xc-alert-closeable`]: closable,
      [`xc-alert-desc`]: description,
    },
    className
  )
  const titleCls = classNames('xc-alert-title', { [`blod-title`]: description })
	const handleClose = (e:React.MouseEvent) => {
		setTimeout(()=>setAlert(false),300)
    if (onClose) {
      onClose(e)
    }
  }
  return (
    <>
      {showAlert ? <div className={classes} hidden={!showAlert} data-testid="test-alert">
          <span className={titleCls}>{title}</span>
          {closable ? (
            <span onClick={handleClose} className="xc-alert-close" data-testid="test-alert-closable">
              <svg
                aria-hidden="true"
                focusable="false"
								data-prefix="fas"
                data-icon="times"
                className="svg-inline--fa fa-times fa-w-11 xc-icon"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352 512"
              >
                <path
                  fill="currentColor"
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                ></path>
              </svg>
            </span>
          ) : null}
        {description ? <p>{description}</p> : null}
      </div> :null}
    </>
  )
}

export default Alert
