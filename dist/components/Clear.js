import * as React from "react";
import { SrUiComponent } from "react-strontium";
export default class Clear extends SrUiComponent {
    performRender() {
        let style = {
            clear: 'both',
            height: '0px !important',
            width: '0px !important',
            padding: '0 !important',
            margin: '0 !important',
            lineHeight: '0 !important'
        };
        return (React.createElement("div", { style: style }));
    }
}
//# sourceMappingURL=Clear.js.map