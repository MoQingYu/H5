import * as React from 'react';
import { Component } from "react";

export const connect = (mapStateToProps?:(state, props)=> void,
    mapDispatchToProps?:(state, props)=> void) => (WrappedComponent)=>{
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
            const stateProps = mapStateToProps 
                ? mapStateToProps(store.getState(), this.props)
                : {};
            const dispatchProps = mapDispatchToProps
                ? mapDispatchToProps(store.dispatch, this.props)
                : {};
            this.setState({
                allProps: {
                    ...stateProps,
                    ...dispatchProps,
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
