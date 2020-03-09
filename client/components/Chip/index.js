import React from 'react'
import { any, string, func } from "prop-types"
import cx from 'classnames'

const SIZE_VALUE_DEFAULT = 2
const SIZES = {
  xs: 1.5,
  sm: SIZE_VALUE_DEFAULT,
  md: 2.5
}

const Chip = props => {
  const sizeValue = SIZES[props.size] || SIZE_VALUE_DEFAULT
  const size = SIZES[props.size] ? props.size : 'xs'

  return (
    <div
      onClick={props.onClick}
      className={cx('chip flex items-center', `text-${size}`, props.className)}
    >
      <style jsx>{`
        .chip {
          border-radius: ${`${sizeValue/2}rem`};
          height: ${`${sizeValue}rem`};
        }
      `}</style>
      <span className="px-3">{props.children}</span>
      {props.rightAction ? props.rightAction : null}
    </div>
  )
}

Chip.propTypes = {
  children: any,
  size: string,
  className: string,
  rightAction: any,
  color: string,
  backgroundColor: string,
  onClick: func
}

Chip.defaultProps = {
  children: null,
  size: 'sm',
  className: '',
  color: 'inherit',
  backgroundColor: 'silver',
  onClick: () => null
}

export default Chip