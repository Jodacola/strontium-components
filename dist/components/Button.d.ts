import * as React from "react";
import { SrUiComponent } from "react-strontium";
export default class Button extends SrUiComponent<{
    type?: string;
    classes?: string;
    onClick?: () => void;
    href?: string;
    glyph?: string;
}, {}> {
    performRender(): JSX.Element;
    handleClick(e: React.MouseEvent<any>): void;
}
