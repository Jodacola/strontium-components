import { Popover as BsPopover, OverlayTrigger } from "react-bootstrap";
import * as React from "react";
import { SrUiComponent, Log, runtime } from "react-strontium";
;
export default class Popover extends SrUiComponent {
    performRender() {
        try {
            var popover = (React.createElement(BsPopover, { id: this.props.id, title: this.props.title }, this.props.content));
            return (React.createElement(OverlayTrigger, { trigger: "click", containerPadding: 10, rootClose: this.props.rootClose !== false, onEntering: () => { this.overlayEntering(); }, onExiting: () => { this.overlayExiting(); }, overlay: popover, container: this.props.container, placement: this.props.placement || "bottom" }, this.props.children));
        }
        catch (exc) {
            Log.e(this, 'Unable to create react-bootstrap modal. Please check your bundler config or included libraries.', { exception: exc });
            return null;
        }
    }
    overlayEntering() {
        if (!this.props.preventOverlay) {
            runtime.ui.showOverlay();
        }
    }
    overlayExiting() {
        if (!this.props.preventOverlay) {
            runtime.ui.hideOverlay();
        }
    }
}
//# sourceMappingURL=Popover.js.map