import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import NotesList from './components/NotesList'
import NotesNew from './components/NotesNew'
import NotesShow from './components/NotesShow'
import NotesEdit from './components/NotesEdit'
import CategoryList from './components/CategoryList'
import CategoryShow from './components/CategoryShow'
import CategoryEdit from './components/CategoryEdit'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>Welcome to notes app</h2>

        <Link to='/notes' style={{ paddingLeft: 10 }}>Notes</Link>
        <Link to='/categories' style={{ paddingLeft: 10 }}>Categories</Link>

        <Switch>
          <Route path='/notes' component={NotesList} exact={true} />
          <Route path='/notes/new' component={NotesNew} exact={true} />
          <Route path='/notes/:id' component={NotesShow} exact={true} />
          <Route path='/notes/edit/:id' component={NotesEdit} />

          <Route path='/categories' component={CategoryList} exact={true} />
          <Route path='/categories/:id' component={CategoryShow} exact={true} />
          <Route path='/categories/edit/:id' component={CategoryEdit} exact={true} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
