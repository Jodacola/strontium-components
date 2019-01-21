import * as React from "react";
import { SrUiComponent } from "react-strontium";
export default class Textbox extends SrUiComponent {
    constructor() {
        super(...arguments);
        this.refHandler = (r) => { this.inputRef = r; };
    }
    initialState() {
        this.controlled = (this.props.controlled || this.props.value ? true : false);
        return { value: (this.props.value || this.props.defaultValue || "").toString() };
    }
    focus() {
        this.inputRef.focus();
    }
    value() {
        return this.inputRef.value;
    }
    clear() {
        if (this.inputRef) {
            this.inputRef.value = null;
        }
    }
    onComponentMounted() {
        if (this.props.focus) {
            this.focus();
        }
    }
    onNewProps(props) {
        if (this.controlled) {
            this.set({ value: props.value });
        }
    }
    performRender() {
        if (this.props.textarea === true) {
            return (React.createElement("textarea", { disabled: this.props.disabled, ref: this.refHandler, className: this.props.className, onChange: (e) => { this.changed(e); }, onKeyDown: (e) => { this.onKeyDown(e); }, onKeyPress: (e) => { this.onKeyPressed(e); }, placeholder: this.props.placeholder, defaultValue: this.controlled ? undefined : this.state.value, value: this.controlled ? this.state.value : undefined }));
        }
        return (React.createElement("input", { disabled: this.props.disabled, ref: this.refHandler, type: "text", className: this.props.className, onChange: (e) => { this.changed(e); }, onKeyDown: (e) => { this.onKeyDown(e); }, onKeyPress: (e) => { this.onKeyPressed(e); }, placeholder: this.props.placeholder, defaultValue: this.controlled ? undefined : this.state.value, value: this.controlled ? this.state.value : undefined }));
    }
    onKeyPressed(e) {
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
    onKeyDown(e) {
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
    changed(e) {
        if (this.controlled && this.props.autoset) {
            this.set({ value: e.target.value });
            if (this.props.changeDelay && this.props.changeDelay > 0) {
                this.deferred(() => {
                    this.notifyChanged(this.state.value);
                });
                return;
            }
        }
        this.notifyChanged(e.target.value);
    }
    notifyChanged(value) {
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    }
}
//# sourceMappingURL=Textbox.js.map