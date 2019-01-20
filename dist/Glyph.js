import * as React from "react";
import { SrUiComponent } from "react-strontium";
export default class Glyph extends SrUiComponent {
    performRender() {
        return (React.createElement("i", { className: this.classes("glyphicon", `glyphicon-${this.props.glyph}`, this.props.classes) }));
    }
}
//# sourceMappingURL=Glyph.js.map