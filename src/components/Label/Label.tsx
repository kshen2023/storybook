import styled from "styled-components";
import { LabelProps } from "./Label.types";
import { getCursorStyle, getOpacityStyle } from "./Label.lib";

export const Label = styled.label<LabelProps>`
  color: ${({ color }) => color || "#000"};
  font-family: "Roboto", sans-serif;
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  cursor: ${({ disabled }) => getCursorStyle(disabled)};
  visibility: ${({ hidden }) => (hidden ? "hidden" : "visible")};
  opacity: ${({ disabled }) => getOpacityStyle(disabled)};
`;
