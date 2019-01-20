/// <reference types="react" />
import { SrUiComponent } from "react-strontium";
export default class LinkButton extends SrUiComponent<{
    glyph?: string;
    label: string;
    onClick?: () => void;
}, {}> {
    performRender(): JSX.Element;
    clicked(): void;
}
