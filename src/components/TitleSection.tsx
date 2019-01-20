import * as React from "react";
import Title from "./Title";
import Clear from "./Clear";
import { SrUiComponent } from "react-strontium";

export default class TitleSection extends SrUiComponent<{ className?: string, titleClassName?: string, titleContent?: any }, {}> {
    performRender() {
        return (
            <div className="title-section">
                <div className="col-sm-6 title-col">
                    <Title className={this.props.titleClassName}>{this.props.titleContent}</Title>
                </div>
                <div className="col-sm-6 content-col">
                    {this.props.children}
                </div>
                <Clear />
            </div>);
    }
}
