import * as React from "react";
import WaitSpinner from "./WaitSpinner";
import Alert from "./Alert";
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
            content = React.createElement(Alert, { key: "load-success", type: "success", classes: this.classes("load", this.props.alertClassName) }, this.state.successMessage);
        }
        else if (this.state.loadState === LoadStates.Failed && this.state.errorMessage) {
            content = React.createElement(Alert, { key: "load-error", type: "danger", classes: this.classes("load", this.props.alertClassName) }, this.state.errorMessage);
        }
        else if (this.state.loadState === LoadStates.Loading) {
            content = React.createElement(WaitSpinner, { className: this.props.spinClassName, key: "load-loading", message: this.state.loadingMessage });
        }
        return content;
    }
}
//# sourceMappingURL=LoadIndicator.js.map