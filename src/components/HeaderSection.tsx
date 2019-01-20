import * as React from "react";
import Header from "./Header";
import Clear from "./Clear";
import { SrUiComponent } from "react-strontium";

export default class HeaderSection extends SrUiComponent<{ className?: string, headerClassName?: string, headerContent?: any }, {}> {
    performRender() {
        return (
            <div className={this.classes("header-section", this.props.className)}>
                <div className="col-sm-6 header-col">
                    <Header className={this.props.headerClassName}>{this.props.headerContent}</Header>
                </div>
                <div className="col-sm-6 content-col">
                    {this.props.children}
                </div>
                <Clear />
            </div>);
    }
}
