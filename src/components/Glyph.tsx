import * as React from "react";
import { SrUiComponent } from "react-strontium";

export default class Glyph extends SrUiComponent<{ glyph: string, classes?: string }, {}>{
    performRender() {
        return (<i
            className={this.classes("glyphicon", `glyphicon-${this.props.glyph}`, this.props.classes)} />);
    }
}