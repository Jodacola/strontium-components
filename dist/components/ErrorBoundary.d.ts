import React from "react";
import { SrUiComponent } from "react-strontium";
type IErrorBoundaryProps = {
    onError?: (error: any, info: any) => void;
    showOnError?: React.ReactNode;
} & React.PropsWithChildren;
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
    performRender(): React.ReactNode;
}
export {};
