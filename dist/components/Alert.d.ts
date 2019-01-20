/// <reference types="react" />
import { SrUiComponent } from "react-strontium";
export default class Alert extends SrUiComponent<{
    type?: string;
    classes?: string;
}, {}> {
    performRender(): JSX.Element;
}
