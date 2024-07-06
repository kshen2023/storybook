import styled from "styled-components";
import { LinkProps } from "./Links.types";
import {
  getCursorStyle,
  getVisibilityStyle,
} from "./Links.lib";

export const Links = styled.a<LinkProps>`
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  color: ${({ color }) => color || "#000"};
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  background-color: ${(props) => props.bgColor};
  cursor: ${({ disabled }) => getCursorStyle(disabled)};
  visibility: ${({ hidden }) => getVisibilityStyle(hidden)};
  text-decoration: none;

  &:hover {
    color: ${({ disabled, color }) =>
    !disabled ? color || "#3b8026" : "grey"};
  }
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;
