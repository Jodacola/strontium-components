/// <reference types="react" />
import { SrUiComponent } from "react-strontium";
export default class TitleSection extends SrUiComponent<{
    className?: string;
    titleClassName?: string;
    titleContent?: any;
}, {}> {
    performRender(): JSX.Element;
}
