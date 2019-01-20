import * as React from "react";
import Glyph from "./Glyph";
import { SrUiComponent } from "react-strontium";

export default class LinkButton extends SrUiComponent<{ glyph?: string, label: string, onClick?: () => void }, {}> {
    performRender() {
        var glyph: JSX.Element = null;
        if (this.props.glyph) {
            glyph = <Glyph glyph={this.props.glyph} />;
        }
        return (<span onClick={() => { this.clicked(); }} className="link-button">{glyph}{this.props.label}</span>);
    }

    clicked() {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }
}