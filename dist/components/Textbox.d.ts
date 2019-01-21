import * as React from "react";
import { SrUiComponent } from "react-strontium";
export interface ITextboxProps {
    focus?: boolean;
    placeholder?: string;
    defaultValue?: any;
    textarea?: boolean;
    value?: any;
    onChange?: (value: string) => void;
    onEnter?: (value: string) => void;
    onKeyPressed?: (e: React.KeyboardEvent<any>) => void;
    onKeyDown?: (e: React.KeyboardEvent<any>) => void;
    className?: string;
    controlled?: boolean;
    autoset?: boolean;
    disabled?: boolean;
    changeDelay?: number;
}
export default class Textbox extends SrUiComponent<ITextboxProps, {
    value: string;
}> {
    private controlled;
    private inputRef;
    private refHandler;
    initialState(): {
        value: any;
    };
    focus(): void;
    value(): string;
    clear(): void;
    onComponentMounted(): void;
    onNewProps(props: ITextboxProps): void;
    performRender(): JSX.Element;
    onKeyPressed(e: React.KeyboardEvent<any>): void;
    onKeyDown(e: React.KeyboardEvent<any>): void;
    changed(e: any): void;
    notifyChanged(value: string): void;
}
