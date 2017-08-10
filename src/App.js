import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects: [
      {
          title: 'Business website',
          category: 'Web design'
        },
        {
          title: 'Social app',
          category: 'Mobile development'
        },
        {
          title: 'Eccomerce Shopping Cart',
          category: 'Web development'
        }
      ]});
  };

  handleAddProject(project){
    
  }

  render() {
    return (
      <div className="App">
        <AddProject addproject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
