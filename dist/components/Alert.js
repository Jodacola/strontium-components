import * as React from "react";
import { SrUiComponent } from "react-strontium";
export default class Alert extends SrUiComponent {
    performRender() {
        return React.createElement("div", { className: this.classes(`alert alert-${this.props.type || "info"}`, this.props.classes) }, this.props.children);
    }
}
//# sourceMappingURL=Alert.js.map