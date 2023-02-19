import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { FixedSizeList } from 'react-window'

import Line from './Line'
import { SettingsProvider } from '../context/SettingsContext'

export interface LogViewerProps {
  text: string
  height?: number
  showLineNumbers: boolean
}

interface ViewerProps {
  height?: number
}

const Viewer = styled.div<ViewerProps>`
  background-color: #121212;
  color: #fff;
  overflow: auto;
  padding: 1rem 0;
`

const LogViewer: React.FC<LogViewerProps> = ({
  text,
  height,
  showLineNumbers,
}) => {
  const lines = text.split('\n')
  const [selectedLine] = useState<number>(5000)
  const listRef = useRef<FixedSizeList>(null)

  useEffect(() => {
    const list = listRef.current
    if (list && selectedLine) list.scrollToItem(selectedLine)
  }, [selectedLine])

  return (
    <SettingsProvider showLineNumbers={showLineNumbers}>
      <Viewer height={height}>
        <FixedSizeList
          itemData={lines}
          itemSize={25}
          itemCount={lines.length}
          height={800}
          overscanCount={25}
          width="100%"
          ref={listRef}
        >
          {Line}
        </FixedSizeList>
      </Viewer>
    </SettingsProvider>
  )
}

export default LogViewer
