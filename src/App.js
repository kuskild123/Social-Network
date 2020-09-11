import React from 'react';
import './index.css';
import {Header} from './components/header/header.js';
import {Menu} from './components/menu/menu.js';
import {Dialog} from './dialogs/dialogs.js';
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/others/music/music";
import {News} from "./components/others/news/news";
import {Settings} from "./components/others/settings/settings";
import {PageMessage} from "./components/body/message";
import store from "./redux/redux-store";
import {Form} from "./dialogs/form";

function App(props) {

  return (

          <div className='app-wrapper'>
              <Header></Header>
              <div className='app'>
                  <Menu></Menu>
                  <div className='app-content'>
                      <Route path='/dialogs'render={ () => <Dialog NewDialogValue={props.state.DialogPage.NewDialogValue} dispatch={store.dispatch.bind(store)} DialogData={props.state.DialogPage.DialogData} MessageData1={props.state.DialogPage.MessageData1} MessageData2={props.state.DialogPage.MessageData2}></Dialog>}></Route>
                      <Route path='/messages'render={ () => <PageMessage NewPostValue={props.state.MessagePage.NewValue} dispatch={store.dispatch.bind(store)} LikesData={props.state.MessagePage.LikesData} ImageCenterData={props.state.MessagePage.ImageCenterData}></PageMessage>}></Route>
                      <Route path='/music'render={ () => <Music></Music>}></Route>
                      <Route path='/news'render={ () => <News></News>}></Route>
                      <Route path='/settings'render={ () => <Settings></Settings>}></Route>

                  </div>
              </div>
          </div>

  );
}

export default App;
