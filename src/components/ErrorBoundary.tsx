﻿import { SrUiComponent, Log } from "react-strontium";

export default class ErrorBoundary extends SrUiComponent<{}, { hasError: boolean, error: any, info: any }>{
    initialState() {
        return { hasError: false, error: null, info: null };
    }

    componentDidCatch(error: any, info: any) {
        this.setState({ hasError: true, error: error, info: info });
        Log.e(this, 'Error within component', { error: error, info: info });
    }

    performRender() {
        if (this.state.hasError) {
            return null;
        }

        return this.props.children as JSX.Element;
    }
}