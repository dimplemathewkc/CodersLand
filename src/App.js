import Editor from './components/editor';
import Navbar from './components/navbar';
import './App.css';
import brace from 'brace'
import "ace-builds/src-noconflict/ext-language_tools";
import 'brace/mode/python'
import 'brace/mode/javascript'
import 'brace/mode/ruby'
import 'brace/mode/java'
import 'brace/mode/yaml'
import 'brace/theme/twilight'
import 'brace/theme/kuroir'
import 'brace/theme/github'
import 'brace/theme/textmate'
import 'brace/theme/xcode'
import 'brace/theme/solarized_light'
import 'brace/theme/solarized_dark'
import 'brace/theme/terminal'
import 'brace/theme/monokai'
import 'brace/theme/tomorrow'
import { Route, Switch } from 'react-router';
import Login from './components/Login'
import React from 'react';
function App() {
  return (
    <React.Fragment style={{background:'#B4A5A5'}}>
      <Navbar/>
      <div className='content'>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/' component={Editor}/>
        </Switch>
      </div>
      
    </React.Fragment>
  );
}

export default App;
