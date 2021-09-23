import React, { FC, useContext } from 'react'
import { IButton } from './Button.types'
import { AppContext } from '../../context/context/AppContext'
import { startChatOrText } from '../../utils/startChatOrText'
import './Button.css'

export const Button: FC<IButton> = ({ text, type, additionalClassNames }) => {
  const { state, dispatch } = useContext(AppContext)
  const { fullPageAdData, isChatReady, livePerson } = state
  const chatProvider = fullPageAdData?.chatProvider

  const handleStartChatOrText = () => {
    if (chatProvider) {
      startChatOrText({ chatProvider, type, livePerson, dispatch })
    }
  }

  return (
    <button
      className={`button ${additionalClassNames ?? ''}`}
      disabled={!isChatReady}
      onClick={handleStartChatOrText}
      type="button"
    >
      {text}
    </button>
  )
}
