import * as React from "react";
import WaitSpinner from "./WaitSpinner";
import { LoadStates, SrUiComponent } from "react-strontium";
export default class LoadIndicator extends SrUiComponent {
    initialState() {
        return {
            loadState: this.props.state,
            successMessage: null,
            errorMessage: this.props.errorMessage,
            loadingMessage: this.props.loadingMessage
        };
    }
    onNewProps(props) {
        this.setState({
            loadState: props.state,
            successMessage: null,
            errorMessage: props.errorMessage,
            loadingMessage: props.loadingMessage
        });
    }
    performRender() {
        var content = null;
        if (this.state.loadState === LoadStates.Succeeded && this.state.successMessage) {
            content = (this.props.successBuilder ? this.props.successBuilder() : React.createElement("p", { key: "load-success", className: this.props.successClass || 'load-indicator load-success' }, this.state.successMessage));
        }
        else if (this.state.loadState === LoadStates.Failed && this.state.errorMessage) {
            content = (this.props.successBuilder ? this.props.successBuilder() : React.createElement("p", { key: "load-error", className: this.props.errorClass || 'load-indicator load-error' }, this.state.successMessage));
        }
        else if (this.state.loadState === LoadStates.Loading) {
            content = React.createElement(WaitSpinner, { className: this.props.spinClassName, key: "load-loading", message: this.state.loadingMessage });
        }
        return content;
    }
}
//# sourceMappingURL=LoadIndicator.js.map