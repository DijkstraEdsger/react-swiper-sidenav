import React, { createContext, useContext } from 'react'

type SideNavProviderValue = {
  renderLink?: (props?: any) => React.JSX.Element
}

type SideNavProviderProps = {
  children: React.ReactNode
  value: SideNavProviderValue
}

const SideNavContext = createContext<SideNavProviderValue>({})

export const SideNavProvider = ({ children, value }: SideNavProviderProps) => {
  return <SideNavContext.Provider value={value}>{children}</SideNavContext.Provider>
}

export const useSideNavContext = () => {
  return useContext(SideNavContext)
}
