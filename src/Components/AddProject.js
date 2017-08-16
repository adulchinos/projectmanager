import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
	constructor(){
		super();
		this.state = {
			newProject:{}
		}
	}

	static defaultProps ={
		categories: ['Web Design', 'Mobile Development', "Web Development"]
	}

  handleSubmit(e){
  	if(this.refs.title.value === ''){
  		alert('title is required');
  	} else {
  		this.setState({newProject:{
  			id: uuid.v4(),
  			title: this.refs.title.value,
  			category: this.refs.category.value
  		}}, function(){
  			//console.log(this.state);
  			this.props.addProject(this.state.newProject);
  		});
  	}
  	e.preventDefault();
  }

  render() {
  	let categoryOptions = this.props.categories.map(category => {
  		return <option key={category} value={category}>{category}</option>
  	});
    return (
      <div>
        <h3>Add project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
        	<div>
        		<label>Title</label><br />
        		<input type="text" ref="title" />
        	</div>
        	<div>
        		<label>Category</label><br />
        		<select type="text" ref="category">
        			{categoryOptions}
        		</select>
        	</div>
        	<input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;
