import * as React from "react";
import { SrUiComponent } from "react-strontium";
export default class Header extends SrUiComponent {
    performRender() {
        return React.createElement("h3", { className: this.classes("header", this.props.className) }, this.props.children);
    }
}
//# sourceMappingURL=Header.js.map