import * as React from "react";
import { LoadStates, SrUiComponent, IApiLoadingState } from "react-strontium";
export interface ILoadIndicatorProps {
    spinClassName?: string;
    state: LoadStates;
    loadingMessage?: string;
    errorMessage?: string;
    successClass?: string;
    errorClass?: string;
    successBuilder?: () => React.ReactNode;
    errorBuilder?: () => React.ReactNode;
}
export default class LoadIndicator extends SrUiComponent<ILoadIndicatorProps, IApiLoadingState> {
    initialState(): {
        loadState: LoadStates;
        successMessage: any;
        errorMessage: string;
        loadingMessage: string;
    };
    onNewProps(props: ILoadIndicatorProps): void;
    performRender(): React.ReactNode;
}
