import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router'
import { AppContext } from '../context/context/AppContext'
import * as AppActions from '../context/actions/app/actions'
import { pageRoutes } from '../global/constants'
import { addGubagooScript } from '../utils/addGubagooScript'
import { addLivePersonScript } from '../utils/addLivePersonScript'
import { addContactAtOnceScript } from '../utils/addContactAtOnceScript'

export const useSelectChatProviderScript = () => {
  const { state, dispatch } = useContext(AppContext)
  const { pathname } = useLocation()
  const { fullPageAdData, livePerson } = state
  const chatButtonRef = livePerson?.chatButtonRef?.current
  const textButtonRef = livePerson?.textButtonRef?.current

  useEffect(() => {
    const { gubagoo, livePerson, contactAtOnce } = pageRoutes

    const getScriptIdFormat = (scriptId: string) =>
      `script-${scriptId.toLowerCase().replace(' ', '-')}`

    const chatProviderRaw = fullPageAdData?.chatProvider || ''
    const scriptId = getScriptIdFormat(chatProviderRaw)
    const DID = fullPageAdData?.DID || 0

    switch (pathname) {
      case gubagoo.slug:
        if (fullPageAdData) {
          addGubagooScript(fullPageAdData, scriptId, DID)
        }
        dispatch(AppActions.setIsChatReady(true))
        break

      case contactAtOnce.slug:
        if (fullPageAdData) {
          // addLivePersonScript(scriptId)
          addContactAtOnceScript(scriptId)
          console.log(window.lpTag)
        }
        dispatch(AppActions.setIsChatReady(true))
        break

      case livePerson.slug:
      case `${livePerson.slug}-2`:
        addLivePersonScript(scriptId)
        break

      default:
        break
    }

    return () => {
      try {
        console.log('Attempt to remove child nodes from hidden engagement')
        const removeAllChildNodes = (parent?: HTMLElement) => {
          while (parent?.firstChild) {
            parent.removeChild(parent.firstChild)
          }
        }

        if (chatButtonRef) {
          removeAllChildNodes(chatButtonRef)
        }
        if (textButtonRef) {
          removeAllChildNodes(textButtonRef)
        }

        chatButtonRef?.removeAttribute('id')
        textButtonRef?.removeAttribute('id')

        // On unmount, remove script
        const scriptTag = document.getElementById(scriptId)

        if (scriptTag) {
          // remove script tag
          console.log('remove window')
          if (window.lpTag?.taglets?.lpUnifiedWindow) {
            window.lpTag.taglets.lpUnifiedWindow.onBeforeNavigation({
              dispose: true,
            })
          }
        }
      } catch (error) {
        console.error({ error })
        window.lpTag.newPage(document.URL)
      }
    }
  }, [pathname, fullPageAdData, chatButtonRef, textButtonRef, dispatch])
}
