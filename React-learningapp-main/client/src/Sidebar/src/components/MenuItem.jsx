import React from "react"
import styled from "@emotion/styled"
import classnames from "classnames"
import { StyledMenuLabel } from "../styles/StyledMenuLabel"
import { StyledMenuIcon } from "../styles/StyledMenuIcon"
import { StyledMenuPrefix } from "../styles/StyledMenuPrefix"
import { useMenu } from "../hooks/useMenu"
import { StyledMenuSuffix } from "../styles/StyledMenuSuffix"
import { menuClasses } from "../utils/utilityClasses"
import { MenuButton, menuButtonStyles } from "./MenuButton"
import { LevelContext } from "./Menu"
import { SidebarContext } from "./Sidebar"

const StyledMenuItem = styled.li`
  width: 100%;
  position: relative;

  ${({ menuItemStyles }) => menuItemStyles};

  ${({ rootStyles }) => rootStyles};

  > .${menuClasses.button} {
    ${({ level, disabled, active, collapsed, rtl }) =>
      menuButtonStyles({
        level,
        disabled,
        active,
        collapsed,
        rtl
      })};

    ${({ buttonStyles }) => buttonStyles};
  }
`

export const MenuItemFR = (
  {
    children,
    icon,
    className,
    prefix,
    suffix,
    active = false,
    disabled = false,
    component,
    rootStyles,
    ...rest
  },
  ref
) => {
  const level = React.useContext(LevelContext)
  const { collapsed, rtl, transitionDuration } = React.useContext(
    SidebarContext
  )
  const { menuItemStyles } = useMenu()

  const getMenuItemStyles = element => {
    if (menuItemStyles) {
      const params = { level, disabled, active, isSubmenu: false }
      const {
        root: rootElStyles,
        button: buttonElStyles,
        label: labelElStyles,
        icon: iconElStyles,
        prefix: prefixElStyles,
        suffix: suffixElStyles
      } = menuItemStyles

      switch (element) {
        case "root":
          return typeof rootElStyles === "function"
            ? rootElStyles(params)
            : rootElStyles

        case "button":
          return typeof buttonElStyles === "function"
            ? buttonElStyles(params)
            : buttonElStyles

        case "label":
          return typeof labelElStyles === "function"
            ? labelElStyles(params)
            : labelElStyles

        case "icon":
          return typeof iconElStyles === "function"
            ? iconElStyles(params)
            : iconElStyles

        case "prefix":
          return typeof prefixElStyles === "function"
            ? prefixElStyles(params)
            : prefixElStyles

        case "suffix":
          return typeof suffixElStyles === "function"
            ? suffixElStyles(params)
            : suffixElStyles

        default:
          return undefined
      }
    }
  }

  const sharedClasses = {
    [menuClasses.active]: active,
    [menuClasses.disabled]: disabled
  }

  return (
    <StyledMenuItem
      ref={ref}
      className={classnames(menuClasses.menuItemRoot, sharedClasses, className)}
      menuItemStyles={getMenuItemStyles("root")}
      level={level}
      collapsed={collapsed}
      rtl={rtl}
      disabled={disabled}
      active={active}
      buttonStyles={getMenuItemStyles("button")}
      rootStyles={rootStyles}
    >
      <MenuButton
        className={classnames(menuClasses.button, sharedClasses)}
        data-testid={`${menuClasses.button}-test-id`}
        component={component}
        tabIndex={0}
        {...rest}
      >
        {icon && (
          <StyledMenuIcon
            rtl={rtl}
            className={classnames(menuClasses.icon, sharedClasses)}
            rootStyles={getMenuItemStyles("icon")}
          >
            {icon}
          </StyledMenuIcon>
        )}

        {prefix && (
          <StyledMenuPrefix
            collapsed={collapsed}
            transitionDuration={transitionDuration}
            firstLevel={level === 0}
            className={classnames(menuClasses.prefix, sharedClasses)}
            rtl={rtl}
            rootStyles={getMenuItemStyles("prefix")}
          >
            {prefix}
          </StyledMenuPrefix>
        )}

        <StyledMenuLabel
          className={classnames(menuClasses.label, sharedClasses)}
          rootStyles={getMenuItemStyles("label")}
        >
          {children}
        </StyledMenuLabel>

        {suffix && (
          <StyledMenuSuffix
            collapsed={collapsed}
            transitionDuration={transitionDuration}
            firstLevel={level === 0}
            className={classnames(menuClasses.suffix, sharedClasses)}
            rootStyles={getMenuItemStyles("suffix")}
          >
            {suffix}
          </StyledMenuSuffix>
        )}
      </MenuButton>
    </StyledMenuItem>
  )
}

export const MenuItem = React.forwardRef(MenuItemFR)
