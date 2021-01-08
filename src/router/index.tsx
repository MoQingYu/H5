import React  from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppWrap from "./AppWrap";
import Demo from "@page/Demo";

export default () => {
  return (
    <BrowserRouter>
      <AppWrap>
        <Switch>
          <Route exact path="/" render={()=> <Demo />}/>
        </Switch>
      </AppWrap>
    </BrowserRouter>
  )
}