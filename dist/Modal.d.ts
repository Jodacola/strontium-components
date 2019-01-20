/// <reference types="react" />
import { SrUiComponent } from "react-strontium";
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
export default class Modal extends SrUiComponent<IModalProps, {}> {
    performRender(): JSX.Element;
    modalClasses(): string;
}
