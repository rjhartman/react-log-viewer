import React, { useState } from "react";
import { FixedSizeListProps, ListChildComponentProps } from "react-window";
import styled from "styled-components";

export interface LineProps {
  children: React.ReactNode;
}

interface DivProps {
  selected: boolean;
}

const Div = styled.div<DivProps>`
  font-family: "Roboto", "Courier";
  font-style: monospace;
  text-rendering: optimizeLegibility;
  white-space: nowrap;
  cursor: pointer;
  background-color: ${(p) =>
    p.selected ? "rgba(255, 255, 255, 0.2)" : "transparent"};
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
  display: flex;
  align-items: center;
  justify-content: start;
  text-align: left;
  padding: 0 1rem;
`;

const Line: React.FC<ListChildComponentProps> = ({ data, index, style }) => {
  const [selected, setSelected] = useState(false);
  return (
    <Div
      selected={selected}
      onClick={() => {
        setSelected((prev) => !prev);
      }}
      style={style}
    >
      {data[index]}
    </Div>
  );
};

export default Line;
