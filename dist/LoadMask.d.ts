/// <reference types="react" />
import { SrUiComponent, LoadStates } from "react-strontium";
export default class LoadMask extends SrUiComponent<{
    state: LoadStates;
}, {}> {
    performRender(): JSX.Element;
}
