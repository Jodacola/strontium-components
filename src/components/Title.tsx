import * as React from "react";
import { SrUiComponent } from "react-strontium";

export default class Title extends SrUiComponent<{className?:string},{}> {
    performRender() {
        return <h1 className={this.classes("title", this.props.className)}>{this.props.children}</h1>;
    }
}
