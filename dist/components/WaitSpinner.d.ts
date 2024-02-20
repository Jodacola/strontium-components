import * as React from "react";
import { SrUiComponent } from "react-strontium";
export default class WaitSpinner extends SrUiComponent<{
    className?: string;
    key?: any;
    message?: any;
    left?: string;
    top?: string;
    fillheight?: string;
    color?: string;
}, {}> {
    private spinner;
    private divRef;
    private refHandler;
    private spinup;
    onComponentWillUnmount(): void;
    performRender(): React.JSX.Element;
}
