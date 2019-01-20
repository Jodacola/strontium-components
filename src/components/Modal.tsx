import * as React from "react";
import { Modal as BsModal } from "react-bootstrap";
import { SrUiComponent, Log } from "react-strontium";

export interface IModalProps {
    title: string;
    className?: string;
    footerContent?: JSX.Element;
    labelledBy?: string;
    closeButton?: boolean;
    staticBackground?: boolean;
    show?: boolean;
    onClose?: () => void;
}

export default class Modal extends SrUiComponent<IModalProps, {}>{
    performRender() {
        try {
            let footer = (this.props.footerContent ? <BsModal.Footer>{this.props.footerContent}</BsModal.Footer> : null);

            return (
                <BsModal
                    dialogClassName={this.props.className}
                    onExited={() => { this.broadcast("modalClosed"); }}
                    onEnter={() => { this.broadcast("modalShown"); }}
                    backdrop={this.props.staticBackground === true ? 'static' : undefined}
                    show={this.props.show}
                    onHide={() => {
                        if (this.props.onClose) {
                            this.props.onClose();
                        }
                    }}>
                    <BsModal.Header closeButton={this.props.closeButton}>
                        <BsModal.Title>{this.props.title}</BsModal.Title>
                    </BsModal.Header>
                    <BsModal.Body>
                        {this.props.children}
                    </BsModal.Body>
                    {footer}
                </BsModal >);
        } catch (exc) {
            Log.e(this, 'Unable to create react-bootstrap modal. Please check your bundler config or included libraries.', { exception: exc });
            return null;
        }
    }

    modalClasses(): string {
        return this.classes("modal fade", this.props.className);
    }
}