import { Box, Button, Heading } from "grommet";
import { Component, ErrorInfo } from "react";
import Lottie from "react-lottie";
import animationData from './assets/errorCat.json'
import { RouteComponentProps, withRouter } from "react-router-dom";

interface Props extends RouteComponentProps{}

interface State {
    hasError: boolean; 
}

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

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
        window.history.back();
    }

    render() {
        if (this.state.hasError) {
            return (
                <div >
                   <Box
                        justify='center'
                        align='center'
                        margin={{'top': '10rem'}}
                    >
                        <Heading 
                            level='3'
                            color='#37513B'
                        >
                            Ojdå, något gick fel!</Heading>
                        <Button 
                            label='Tillbaka'
                            size='small'
                            color='#708C7E'
                            style={{
                                'fontWeight': 'normal', 
                                'background': '#708C7E',
                                'fontSize': '1.5rem',
                                'color': 'white',
                                'padding': '1rem',
                            }}  
                            onClick={this.reloadPage}
                        >
                        </Button>
                        <Box pad={{'top': '2rem'}}>
                        <Lottie
                            options={defaultOptions}
                            height={400}
                            width={400}
                        />
                        </Box>
                    </Box>
                </div>
            ); 
        } 
        return this.props.children;
    } 
}

export default withRouter(ErrorBoundary);