import React from 'react';
import {BrowserRouter as Router, Switch,Route, Link} from "react-router-dom";
import {SignIn} from '../screens/SignIn';
import { Indentification } from '../screens/Indentification';
import { Sucesss} from '../screens/Sucess';
export  function Routes() {
 return (
    <Switch>
        <Route exact path="/" component={SignIn}/>
        <Route path="/indentificacao" component={Indentification}/>
        <Route path="/sucesso" component={Sucesss}/>
    </Switch>
  );
}