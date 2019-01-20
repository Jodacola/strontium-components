import * as React from "react";
import { SrUiComponent } from "react-strontium";
export default class Link extends SrUiComponent<{
    href?: string;
    alert?: boolean;
    text?: string;
    navTo?: string;
    className?: string;
    onClick?: (e: React.MouseEvent<any>) => void;
}, {}> {
    performRender(): JSX.Element;
}
