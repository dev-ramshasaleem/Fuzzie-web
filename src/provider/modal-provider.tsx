"use client"
import { createContext, useContext, useState } from "react"

interface ModalProviderProps {
    children: React.ReactNode
}


type ModalContextType = {
    data: object
    isOpen: boolean
    setOpen: (modal: React.ReactNode, fetchData?: () => Promise<unknown>) => void
    setClose: () => void
}

export const ModalContext = createContext<ModalContextType>({
    data: {},
    isOpen: false,
    setOpen: (modal: React.ReactNode, fetchData?: () => Promise<unknown>) => { },
    setClose: () => { },
})

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState({})
    const [showingModal, setShowingModal] = useState<React.ReactNode>(null)

const setOpen = async (
    modal: React.ReactNode,
    fetchData?: () => Promise<unknown>
  ) => {
    if (modal) {
      if (fetchData) {
        setData({ ...data, ...((await fetchData()) ?? {}) })
      }
      setShowingModal(modal)
      setIsOpen(true)
    }
  }

  const setClose = () => {
    setIsOpen(false)
    setData({})
  }

  return (
    <ModalContext.Provider value={{ data, setOpen, setClose, isOpen }}>
      {children}
      {showingModal}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within the modal provider')
  }
  return context
}

export default ModalProvider