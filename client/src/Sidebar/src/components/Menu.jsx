import React from "react"
import classnames from "classnames"
import { StyledUl } from "../styles/StyledUl"
import styled from "@emotion/styled"
import { menuClasses } from "../utils/utilityClasses"

const StyledMenu = styled.nav`
  &.${menuClasses.root} {
    ${({ rootStyles }) => rootStyles}
  }
`

export const MenuContext = React.createContext(undefined)

export const LevelContext = React.createContext(0)

const MenuFR = (
  {
    children,
    className,
    transitionDuration = 300,
    closeOnClick = false,
    rootStyles,
    menuItemStyles,
    renderExpandIcon,
    ...rest
  },
  ref
) => {
  const providerValue = React.useMemo(
    () => ({
      transitionDuration,
      closeOnClick,
      menuItemStyles,
      renderExpandIcon
    }),
    [transitionDuration, closeOnClick, menuItemStyles, renderExpandIcon]
  )

  return (
    <MenuContext.Provider value={providerValue}>
      <LevelContext.Provider value={0}>
        <StyledMenu
          ref={ref}
          className={classnames(menuClasses.root, className)}
          rootStyles={rootStyles}
          {...rest}
        >
          <StyledUl>{children}</StyledUl>
        </StyledMenu>
      </LevelContext.Provider>
    </MenuContext.Provider>
  )
}

export const Menu = React.forwardRef(MenuFR)
