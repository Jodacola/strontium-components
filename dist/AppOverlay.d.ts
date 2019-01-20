/// <reference types="react" />
import { SrUiComponent, SrAppMessage } from "react-strontium";
export default class AppOverlay extends SrUiComponent<{
    manuallyShow?: boolean;
    show?: boolean;
    classes?: string;
}, {
    show: boolean;
}> {
    initialState(): {
        show: boolean;
    };
    getHandles(): string[];
    onAppMessage(msg: SrAppMessage): void;
    performRender(): JSX.Element;
}
