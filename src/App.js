import React from 'react';
import TaskForm from './components/Form';
import Header from './components/Header';
function App() {

  return (
  <React.Fragment>
      <Header/>
       <TaskForm></TaskForm>
      {/* <TaskList /> */}
  </React.Fragment>
  )
}

export default App;
