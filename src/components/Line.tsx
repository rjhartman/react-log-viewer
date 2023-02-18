import React, { useState } from 'react'
import { FixedSizeListProps, ListChildComponentProps } from 'react-window'
import styled from 'styled-components'

import { useSettingsContext } from '../context/SettingsContext'

export interface LineProps {
  children: React.ReactNode
}

interface DivProps {
  selected: boolean
}

interface LineNoProps {
  selected: boolean
  width: number
}

const CHAR_WIDTH = 0.6

const Div = styled.div<DivProps>`
  font-family: 'Roboto', 'Courier';
  font-style: monospace;
  text-rendering: optimizeLegibility;
  white-space: nowrap;
  cursor: pointer;
  background-color: ${(p) =>
    p.selected ? 'rgba(255, 255, 255, 0.2)' : 'transparent'};
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
  display: flex;
  align-items: center;
  justify-content: start;
  text-align: left;
  padding: 0 1rem;
`

const LineNo = styled.div<LineNoProps>`
  display: flex;
  justify-content: flex-end;
  min-width: ${(p) => p.width * CHAR_WIDTH}rem;
  color: ${(p) => (p.selected ? '#fff' : '#888')};
  margin-right: 1rem;
  text-align: right;
`

const Line: React.FC<ListChildComponentProps> = ({ data, index, style }) => {
  const { showLineNumbers } = useSettingsContext()
  const [selected, setSelected] = useState(false)

  return (
    <Div
      selected={selected}
      onClick={() => {
        setSelected((prev) => !prev)
      }}
      style={style}
    >
      {showLineNumbers && (
        <LineNo selected={selected} width={(data.length + 1).toString().length}>
          {index + 1}|
        </LineNo>
      )}
      {data[index]}
    </Div>
  )
}

export default Line
