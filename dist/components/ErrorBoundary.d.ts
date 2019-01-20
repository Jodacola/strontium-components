/// <reference types="react" />
import { SrUiComponent } from "react-strontium";
export default class ErrorBoundary extends SrUiComponent<{}, {
    hasError: boolean;
    error: any;
    info: any;
}> {
    initialState(): {
        hasError: boolean;
        error: any;
        info: any;
    };
    componentDidCatch(error: any, info: any): void;
    performRender(): JSX.Element;
}
