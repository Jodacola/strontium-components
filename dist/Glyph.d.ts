/// <reference types="react" />
import { SrUiComponent } from "react-strontium";
export default class Glyph extends SrUiComponent<{
    glyph: string;
    classes?: string;
}, {}> {
    performRender(): JSX.Element;
}
