import * as React from "react";
import Glyph from "./Glyph";
import { SrUiComponent } from "react-strontium";
export default class LinkButton extends SrUiComponent {
    performRender() {
        var glyph = null;
        if (this.props.glyph) {
            glyph = React.createElement(Glyph, { glyph: this.props.glyph });
        }
        return (React.createElement("span", { onClick: () => { this.clicked(); }, className: "link-button" },
            glyph,
            this.props.label));
    }
    clicked() {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }
}
//# sourceMappingURL=LinkButton.js.map