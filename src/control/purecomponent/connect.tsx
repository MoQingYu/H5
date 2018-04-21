import * as React from 'react';
import { Component } from "react";

export const connect = (mapStateToProps) => (WrappedComponent)=>{
    class Connect extends Component<any, any> {
        static contextTypes = {
            store: React.PropTypes.any
        }

        constructor() {
            super();
            this.state = {
                allProps: {}
            }
        }

        componentWillMount() {
            const { store } = this.context;
            this.updateProps();
            store.subscribe(()=> this.updateProps());
        }

        private updateProps() {
            const { store } = this.context;
            const stateProps = mapStateToProps(store.getState(), this.props);
            this.setState({
                allProps: {
                    ...stateProps,
                    ...this.props
                }
            })
        }

        render() {
            const { allProps } = this.state;
            return <WrappedComponent {...allProps}/>
        }
    }

    return Connect;
}
