import classNames from "classnames"
import React from "react"

export const menuButtonStyles = props => {
  const { rtl, level, collapsed, disabled, active } = props

  return `
    display: flex;
    align-items: center;
    height: 50px;
    text-decoration: none;
    color: inherit;
    box-sizing: border-box;
    cursor: pointer;

    ${
      rtl
        ? `padding-left: 20px;
           padding-right: ${
             level === 0 ? 20 : (collapsed ? level : level + 1) * 20
           }px;
            `
        : `padding-right: 20px;
           padding-left: ${
             level === 0 ? 20 : (collapsed ? level : level + 1) * 20
           }px;
           `
    }

    &:hover {
      background-color: #f3f3f3;
    }

    ${disabled &&
      ` 
      pointer-events: none;
      cursor: default;
      color:#adadad;
        `}

    ${active && "background-color: #e2eef9;"}
  
  `
}

export const MenuButtonRef = (
  { className, component, children, ...rest },
  ref
) => {
  if (component) {
    if (typeof component === "string") {
      return React.createElement(
        component,
        {
          className: classNames(className),
          ...rest,
          ref
        },
        children
      )
    } else {
      const { className: classNameProp, ...props } = component.props

      return React.cloneElement(
        component,
        {
          className: classNames(className, classNameProp),
          ...rest,
          ...props,
          ref
        },
        children
      )
    }
  } else {
    return (
      <a ref={ref} className={classNames(className)} {...rest}>
        {children}
      </a>
    )
  }
}

export const MenuButton = React.forwardRef(MenuButtonRef)
