import React, { useState, createContext, useContext } from 'react'

interface SettingsContextProps {
  children: React.ReactNode
  showLineNumbers: boolean
}

interface SettingsContextValue {
  showLineNumbers: boolean
}

const SettingsContext = createContext<SettingsContextValue>({
  showLineNumbers: false,
})

export const SettingsProvider: React.FC<SettingsContextProps> = ({
  children,
  showLineNumbers,
}) => {
  const value = {
    showLineNumbers,
  }

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettingsContext = () => {
  return useContext(SettingsContext)
}
