import * as React from "react";
import { SrUiComponent } from "react-strontium";

export default class Header extends SrUiComponent<{ className?: string }, {}> {
    performRender() {
        return <h3 className={this.classes("header", this.props.className)}>{this.props.children}</h3>;
    }
}
