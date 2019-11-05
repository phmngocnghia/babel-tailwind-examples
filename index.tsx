import React from 'react'
import ReactDOM from 'react-dom'

import styled from 'styled-components'
/** @jsx jsx */
import { jsx, css as cssEmotion } from '@emotion/core'
import {css as cssLinaria} from 'linaria'
import emotion from '@emotion/styled'

// styled-componenets
const StyledComponentsButton = styled.button`
  ${tws`md`} {
    ${twa`mt-20 p-20`}
  }

  ${twa`mt-10 p-10 bg-testColor`}
  color: ${twt`colors.green.900`}
`
// emotion
const emotionButtonClass = cssEmotion`
  ${tws`md`} {
    ${twa`mt-20 p-20`}
  }

  ${twa`mt-10 p-10 bg-testColor `}
  color: ${twt`colors.green.900`}
`

const EmotionButton = emotion.button`
  ${tws`md`} {
    ${twa`mt-20 p-20`}
  }

  ${twa`mt-10 p-10 bg-testColor` };
  color: ${twt`colors.green.900`}
`

// linaria
const linariaButtonClass = cssEmotion`
  ${tws`md`} {
    ${twa`mt-20 p-20`}
  }

  ${twa`mt-10 p-10 bg-testColor `}
  color: ${twt`colors.green.900`}
`


const App = () => {
  return (
    <div>
      <StyledComponentsButton>styled components</StyledComponentsButton>
      <button css={emotionButtonClass}>emotion class</button>
      <EmotionButton>emotion button</EmotionButton>
      <button css={linariaButtonClass}>emotion class</button>
    </div>
  )
}

const element = document.getElementById('root')
if (element) {
  ReactDOM.render(<App />, element)
}

