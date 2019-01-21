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

export default class Textbox extends SrUiComponent<ITextboxProps, { value: string }> {
    private controlled: boolean;
    private inputRef: HTMLInputElement | HTMLTextAreaElement;
    private refHandler: (r: HTMLInputElement | HTMLTextAreaElement) => void = (r) => { this.inputRef = r; };

    initialState() {
        this.controlled = (this.props.controlled || this.props.value ? true : false);
        return { value: (this.props.value || this.props.defaultValue || "").toString() };
    }

    public focus() {
        this.inputRef.focus();
    }

    public value() {
        return this.inputRef.value;
    }

    public clear() {
        if (this.inputRef) {
            this.inputRef.value = null;
        }
    }

    onComponentMounted(): void {
        if (this.props.focus) {
            this.focus();
        }
    }

    onNewProps(props: ITextboxProps) {
        if (this.controlled) {
            this.set({ value: props.value });
        }
    }

    performRender() {
        if (this.props.textarea === true) {
            return (
                <textarea
                    disabled={this.props.disabled}
                    ref={this.refHandler}
                    className={this.props.className}
                    onChange={(e) => { this.changed(e); }}
                    onKeyDown={(e) => { this.onKeyDown(e); }}
                    onKeyPress={(e) => { this.onKeyPressed(e); }}
                    placeholder={this.props.placeholder}
                    defaultValue={this.controlled ? undefined : this.state.value}
                    value={this.controlled ? this.state.value : undefined} />);
        }

        return (
            <input
                disabled={this.props.disabled}
                ref={this.refHandler}
                type="text"
                className={this.props.className}
                onChange={(e) => { this.changed(e); }}
                onKeyDown={(e) => { this.onKeyDown(e); }}
                onKeyPress={(e) => { this.onKeyPressed(e); }}
                placeholder={this.props.placeholder}
                defaultValue={this.controlled ? undefined : this.state.value}
                value={this.controlled ? this.state.value : undefined} />);
    }

    onKeyPressed(e: React.KeyboardEvent<any>) {
        if (this.props.textarea !== true &&
            (e.keyCode === 13 || e.charCode === 13) &&
            this.props.onEnter) {
            e.preventDefault();
            e.stopPropagation();
            this.props.onEnter(this.inputRef.value);
        }

        if (this.props.onKeyPressed) {
            this.props.onKeyPressed(e);
        }
    }

    onKeyDown(e: React.KeyboardEvent<any>) {
        if (this.props.textarea === true &&
            e.ctrlKey &&
            (e.keyCode === 13 || e.charCode === 13) &&
            this.props.onEnter) {
            e.preventDefault();
            e.stopPropagation();
            this.props.onEnter(this.inputRef.value);
        }

        if (this.props.onKeyDown) {
            this.props.onKeyDown(e);
        }
    }

    changed(e: any) {
        if (this.controlled && this.props.autoset) {
            this.set({ value: e.target.value });
            if (this.props.changeDelay && this.props.changeDelay > 0) {
                this.deferred(() => {
                    this.notifyChanged(this.state.value);
                })
                
                return;
            }
        }

        this.notifyChanged(e.target.value);
    }

    notifyChanged(value: string) {
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    }
}
