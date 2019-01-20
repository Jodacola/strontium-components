/// <reference types="react" />
import { SrUiComponent } from "react-strontium";
export default class Title extends SrUiComponent<{
    className?: string;
}, {}> {
    performRender(): JSX.Element;
}
