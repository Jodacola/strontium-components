import { SrUiComponent, Log } from "react-strontium";
export default class ErrorBoundary extends SrUiComponent {
    initialState() {
        return { hasError: false, error: null, info: null };
    }
    componentDidCatch(error, info) {
        this.setState({ hasError: true, error: error, info: info });
        Log.e(this, 'Error within component', { error: error, info: info });
        if (this.props.onError) {
            this.props.onError(error, info);
        }
    }
    performRender() {
        if (this.state.hasError) {
            return this.props.showOnError;
        }
        return this.props.children;
    }
}
//# sourceMappingURL=ErrorBoundary.js.map