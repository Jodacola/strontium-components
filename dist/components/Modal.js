import * as React from "react";
import { Modal as BsModal } from "react-bootstrap";
import { SrUiComponent, Log } from "react-strontium";
export default class Modal extends SrUiComponent {
    performRender() {
        try {
            let footer = (this.props.footerContent ? React.createElement(BsModal.Footer, null, this.props.footerContent) : null);
            return (React.createElement(BsModal, { dialogClassName: this.props.className, onExited: () => { this.broadcast("modalClosed"); }, onEnter: () => { this.broadcast("modalShown"); }, backdrop: this.props.staticBackground === true ? 'static' : undefined, show: this.props.show, onHide: () => {
                    if (this.props.onClose) {
                        this.props.onClose();
                    }
                } },
                React.createElement(BsModal.Header, { closeButton: this.props.closeButton },
                    React.createElement(BsModal.Title, null, this.props.title)),
                React.createElement(BsModal.Body, null, this.props.children),
                footer));
        }
        catch (exc) {
            Log.e(this, 'Unable to create react-bootstrap modal. Please check your bundler config or included libraries.', { exception: exc });
            return null;
        }
    }
    modalClasses() {
        return this.classes("modal fade", this.props.className);
    }
}
//# sourceMappingURL=Modal.js.map