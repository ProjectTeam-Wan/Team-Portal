import React from "react"
import { SidebarProvider } from "./LegacySidebarContext"

/**
 * @deprecated
 * `ProSidebarProvider` is deprecated and will be removed in the next major release.
 */
export const ProSidebarProvider = ({ children }) => {
  console.warn(
    "ProSidebarProvider is deprecated and will be removed in the next major release."
  )
  return <SidebarProvider>{children}</SidebarProvider>
}
