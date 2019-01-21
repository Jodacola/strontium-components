import * as React from "react";
import WaitSpinner from "./WaitSpinner";
import { LoadStates, SrUiComponent, IApiLoadingState } from "react-strontium";

export interface ILoadIndicatorProps {
    spinClassName?: string,
    state: LoadStates,
    loadingMessage?: string,
    errorMessage?: string,
    successClass?: string,
    errorClass?: string,
    successBuilder?: () => React.ReactNode,
    errorBuilder?: () => React.ReactNode
}

export default class LoadIndicator extends SrUiComponent<ILoadIndicatorProps, IApiLoadingState> {
    initialState() {
        return {
            loadState: this.props.state,
            successMessage: null,
            errorMessage: this.props.errorMessage,
            loadingMessage: this.props.loadingMessage
        };
    }

    onNewProps(props: ILoadIndicatorProps): void {
        this.setState({
            loadState: props.state,
            successMessage: null,
            errorMessage: props.errorMessage,
            loadingMessage: props.loadingMessage
        });
    }

    performRender() {
        var content: React.ReactNode = null;
        if (this.state.loadState === LoadStates.Succeeded && this.state.successMessage) {
            content = (this.props.successBuilder ? this.props.successBuilder() : <p key="load-success" className={this.props.successClass || 'load-indicator load-success'}>{this.state.successMessage}</p>);
        } else if (this.state.loadState === LoadStates.Failed && this.state.errorMessage) {
            content = (this.props.successBuilder ? this.props.successBuilder() : <p key="load-error" className={this.props.errorClass || 'load-indicator load-error'}>{this.state.successMessage}</p>);
        } else if (this.state.loadState === LoadStates.Loading) {
            content = <WaitSpinner className={this.props.spinClassName} key="load-loading" message={this.state.loadingMessage} />;
        }

        return content;
    }
}
