import React, { Component } from 'react';

class AddProject extends Component {
	static defaultProps ={
		categories: ['Web Design', 'Mobile Development', "Web Development"]
	}

  handleSubmit(){
  	
  }

  render() {
  	let categoryOptions = this.props.categories.map(category => {
  		return <option key={category} value="category">{category}</option>
  	});
    return (
      <div>
        <h3>Add project</h3>
        <form onSubmit={this.handleSubmit}>
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
        </form>
      </div>
    );
  }
}

export default AddProject;
