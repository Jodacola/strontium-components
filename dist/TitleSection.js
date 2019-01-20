import * as React from "react";
import Title from "./Title";
import Clear from "./Clear";
import { SrUiComponent } from "react-strontium";
export default class TitleSection extends SrUiComponent {
    performRender() {
        return (React.createElement("div", { className: "title-section" },
            React.createElement("div", { className: "col-sm-6 title-col" },
                React.createElement(Title, { className: this.props.titleClassName }, this.props.titleContent)),
            React.createElement("div", { className: "col-sm-6 content-col" }, this.props.children),
            React.createElement(Clear, null)));
    }
}
//# sourceMappingURL=TitleSection.js.map