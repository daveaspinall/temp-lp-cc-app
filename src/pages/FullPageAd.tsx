import React, { FC, useContext, useEffect, useRef } from 'react'
import { Button } from '../components/Button/Button'
import { AppContext } from '../context/context/AppContext'
import { EButtonTypes, EChatProviders } from '../global/types'
import * as AppActions from '../context/actions/app/actions'
import { useSelectChatProviderScript } from '../hooks/useSelectChatProviderScript'
import { useBindToLivePersonReady } from '../hooks/useBindToLivePersonReady'
import { HiddenEngagement } from '../components/HiddenEngagment/HiddenEngagement'
import { PopupChat } from '../components/PopupChat/PopupChat'

export const FullPageAd: FC = () => {
  const livePersonChatButtonRef = useRef(null)
  const livePersonTextButtonRef = useRef(null)
  const { state, dispatch } = useContext(AppContext)
  const { fullPageAdData } = state
  const make = fullPageAdData?.make
  const model = fullPageAdData?.model
  const condition = fullPageAdData?.stockType
  const title = fullPageAdData?.title

  const isLivePerson =
    fullPageAdData?.chatProvider === EChatProviders.LIVE_PERSON

  useSelectChatProviderScript()
  useBindToLivePersonReady()

  useEffect(() => {
    dispatch(AppActions.setLivePersonChatButtonRef(livePersonChatButtonRef))
    dispatch(AppActions.setLivePersonTextButtonRef(livePersonTextButtonRef))
  }, [dispatch])

  return (
    <section>
      <h1>{title}</h1>
      <p>
        {make} / {model} / {condition}
      </p>
      <Button text="Chat Now" type={EButtonTypes.CHAT} />
      <Button text="Send Text" type={EButtonTypes.TEXT} />
      {isLivePerson && (
        <div>
          <HiddenEngagement
            ref={livePersonChatButtonRef}
            type={EButtonTypes.CHAT}
          />
          <HiddenEngagement
            ref={livePersonTextButtonRef}
            type={EButtonTypes.TEXT}
          />
        </div>
      )}
      <PopupChat />
    </section>
  )
}
