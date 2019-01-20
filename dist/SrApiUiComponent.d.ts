import { IApiLoadingState, SrUiComponent } from "react-strontium";
export default abstract class SrApiUiComponent<P, SApi extends IApiLoadingState> extends SrUiComponent<P, SApi> {
    protected isLoading(): boolean;
    protected isLoaded(): boolean;
    protected trySetApiLoading(loadMsg: string): boolean;
    protected setApiLoading(msg: string): void;
    protected setApiSuccess(msg?: any): void;
    protected setApiError(msg?: any, errors?: string[]): void;
}
