import * as React from "react";
import { SrUiComponent } from "react-strontium"

export default class Alert extends SrUiComponent<{ type?: string, classes?: string }, {}> {
    performRender() {
        return <div className={this.classes(`alert alert-${this.props.type || "info"}`, this.props.classes)}>{this.props.children}</div>;
    }
}