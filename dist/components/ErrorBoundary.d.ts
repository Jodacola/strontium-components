/// <reference types="react" />
import { SrUiComponent } from "react-strontium";
interface IErrorBoundaryProps {
    onError?: (error: any, info: any) => void;
    showOnError?: React.ReactNode;
}
export default class ErrorBoundary extends SrUiComponent<IErrorBoundaryProps, {
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
    performRender(): import("react").ReactNode;
}
export {};
