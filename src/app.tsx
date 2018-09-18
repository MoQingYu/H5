import { render } from 'react-dom';
import * as ReactDOM from "react-dom";
import { router } from "./config/router";
import './public/common.less';


ReactDOM.render(router, document.getElementById("app"))