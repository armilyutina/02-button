import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';


import { BrowserRouter, Switch, Route } from 'react-router-dom';


import About from './About';
import Alisa from './Alisa';
import Nasa from './fetchGet/Nasa';
import SandboxPortal from './Portal/SandboxPortal';
import Sandbox from './Icon/Sandbox';
import SandboxImage from './Img/SandboxImage';
import SandboxButton from './Button/SandboxButton';
import SandboxButtonGroup from './ButtonGroup/SandboxButtonGroup';
import SandboxChip from './Chip/SandboxChip';
import SandboxBadge from './Badge/SandboxBadge';
import SandboxListGroup from './ListGroup/SandboxListGroup';
import SandboxInput from './Input/SandboxInput';
import SandboxTabs from './Tabs/SandboxTabs';
import SandboxTooltip from './Tooltip/SandboxTooltip';
import SandboxMW from './ModalWindow/SandboxMW';




ReactDOM.render(
  <BrowserRouter>
    <App >
      <Switch>
        <Route path = '/image' component = {SandboxImage} />
        <Route path = '/alisa' component = {Alisa} />
        <Route path = '/nasa' component = {Nasa} />
        <Route path = '/portal' component = {SandboxPortal} />
        <Route path = '/icon' component = {Sandbox} />
        <Route path = '/button' component = {SandboxButton} />
        <Route path = '/group_button' component = {SandboxButtonGroup} />
        <Route path = '/chip' component = {SandboxChip} />
        <Route path = '/badge' component = {SandboxBadge} />
        <Route path = '/list_group' component = {SandboxListGroup} />
        <Route path = '/input' component = {SandboxInput} />
        <Route path = '/tabs' component = {SandboxTabs} />
        <Route path = '/tooltip' component = {SandboxTooltip} />
        <Route path = '/modal_window' component = {SandboxMW} />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
