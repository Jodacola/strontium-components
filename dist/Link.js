import * as React from "react";
import { SrUiComponent } from "react-strontium";
export default class Link extends SrUiComponent {
    performRender() {
        return (React.createElement("a", { href: this.props.href, onClick: (e) => {
                if (this.props.onClick) {
                    this.props.onClick(e);
                }
                if (this.props.navTo) {
                    this.navigate(this.props.navTo);
                }
            }, className: this.classes("app-link interactable", (this.props.alert ? "alert-link" : null), this.props.className) }, this.props.text || this.props.children));
    }
}
//# sourceMappingURL=Link.js.map