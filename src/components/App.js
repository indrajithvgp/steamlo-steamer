import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import StreamCreate from './streams/steam-create.component'
import StreamList from './streams/stream-list.component'
import StreamEdit from './streams/stream-edit.component'
import StreamDelete from './streams/stream-delete.component'
import StreamShow from './streams/stream-show.component'
import Header from './header.component'
import history from '../history'


function App() {
    return (
        <div className="ui container">
            
            <Router history={history}>
                <div>
                <Header/>
                <hr/>
                <Switch>
                <Route path='/' exact component={StreamList}/>
                <Route path='/streams/new'  component={StreamCreate}/>
                <Route path='/streams/edit/:id' component={StreamEdit}/>
                <Route path='/streams/delete/:id' component={StreamDelete}/>
                <Route path='/streams/:id'  component={StreamShow}/>
                </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App
