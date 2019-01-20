/// <reference types="react" />
import { SrUiComponent } from "react-strontium";
export default class HeaderSection extends SrUiComponent<{
    className?: string;
    headerClassName?: string;
    headerContent?: any;
}, {}> {
    performRender(): JSX.Element;
}
