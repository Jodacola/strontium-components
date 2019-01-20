/// <reference types="react" />
import { LoadStates, SrUiComponent, IApiLoadingState } from "react-strontium";
export interface ILoadIndicatorProps {
    alertClassName?: string;
    spinClassName?: string;
    state: LoadStates;
    loadingMessage?: string;
    errorMessage?: string;
}
export default class LoadIndicator extends SrUiComponent<{
    alertClassName?: string;
    spinClassName?: string;
    state: LoadStates;
    loadingMessage?: string;
    errorMessage?: string;
}, IApiLoadingState> {
    initialState(): {
        loadState: LoadStates;
        successMessage: any;
        errorMessage: string;
        loadingMessage: string;
    };
    onNewProps(props: ILoadIndicatorProps): void;
    performRender(): JSX.Element;
}
