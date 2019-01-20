/// <reference types="react" />
import { SrUiComponent } from "react-strontium";
export default class Header extends SrUiComponent<{
    className?: string;
}, {}> {
    performRender(): JSX.Element;
}
