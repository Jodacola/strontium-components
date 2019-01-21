import { SrUiComponent, Log } from "react-strontium";

interface IErrorBoundaryProps {
    onError?: (error: any, info: any) => void,
    showOnError?: React.ReactNode
}
export default class ErrorBoundary extends SrUiComponent<IErrorBoundaryProps, { hasError: boolean, error: any, info: any }>{
    initialState() {
        return { hasError: false, error: null, info: null };
    }

    componentDidCatch(error: any, info: any) {
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