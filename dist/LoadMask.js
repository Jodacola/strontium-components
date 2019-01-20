import * as React from "react";
import { SrUiComponent, LoadStates } from "react-strontium";
export default class LoadMask extends SrUiComponent {
    performRender() {
        if (this.props.state === LoadStates.Loading) {
            return React.createElement("div", { className: "load-mask", onClick: (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                } });
        }
        return null;
    }
}
//# sourceMappingURL=LoadMask.js.map