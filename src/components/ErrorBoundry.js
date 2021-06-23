import React, {Component} from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    didComponentHasError(error, info) {
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oooooops. This is not good...</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundry;