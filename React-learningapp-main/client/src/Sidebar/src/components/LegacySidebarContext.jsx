import React from "react"

export const LegacySidebarContext = React.createContext(undefined)

export const SidebarProvider = ({ children }) => {
  const [sidebarState, setSidebarState] = React.useState({
    collapsed: false,
    toggled: false,
    broken: false,
    rtl: false,
    transitionDuration: 300
  })

  const updateSidebarState = React.useCallback(values => {
    setSidebarState(prevState => ({ ...prevState, ...values }))
  }, [])

  const updateCollapseState = React.useCallback(() => {
    setSidebarState(prevState => ({
      ...prevState,
      collapsed: !Boolean(prevState?.collapsed)
    }))
  }, [])

  const updateToggleState = React.useCallback(() => {
    setSidebarState(prevState => ({
      ...prevState,
      toggled: !Boolean(prevState?.toggled)
    }))
  }, [])

  const providerValue = React.useMemo(
    () => ({
      ...sidebarState,
      updateSidebarState,
      updateCollapseState,
      updateToggleState
    }),
    [sidebarState, updateCollapseState, updateSidebarState, updateToggleState]
  )

  return (
    <LegacySidebarContext.Provider value={providerValue}>
      {children}
    </LegacySidebarContext.Provider>
  )
}
