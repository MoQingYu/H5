"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
class App extends React.Component {
    render() {
        return React.createElement("h1", null, "Hello world");
    }
}
react_dom_1.render(React.createElement(App, null), document.body);
