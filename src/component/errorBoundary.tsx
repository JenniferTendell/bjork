import { Component, ErrorInfo } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface Props extends RouteComponentProps{}
interface State {
    hasError: boolean; 
}
class ErrorBoundary extends Component<Props, State> {
    state: State = {
        hasError: false,
    };

    static getDerivedStateFromError(): State {
        return { hasError: true}
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log({ error, errorInfo });
    }

    reloadPage = () =>  {
        window.location.reload();
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <div>
                        <h2>Oops something went wrong</h2>
                        <button onClick={this.reloadPage}  className='button'>
                        Go back
                        </button>
                    </div>
                </div>
            ); 
        } 
        return this.props.children;
    } 
}

export default withRouter(ErrorBoundary);