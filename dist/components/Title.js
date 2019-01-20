import * as React from "react";
import { SrUiComponent } from "react-strontium";
export default class Title extends SrUiComponent {
    performRender() {
        return React.createElement("h1", { className: this.classes("title", this.props.className) }, this.props.children);
    }
}
//# sourceMappingURL=Title.js.map