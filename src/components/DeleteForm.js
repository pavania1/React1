import React, { Component } from 'react'
import axios from 'axios';

class DeleteForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         postId: ''
      };
    }
    changeHandler = (e) => {
        this.setState({postId : e.target.value});
    }
    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state)

        const {postId} = this.state
        axios ( {
            method: 'delete',
            url : 'https://jsonplaceholder.typicode.com/posts/${postId}'
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
  render() {
    const {postId} = this.state
    return (
      <div>
        <form>
            <div>
                <input type = "text" 
                name = "postId"
                value = {postId}
                onChange={this.changeHandler}
                />
            </div>
            <button type="submit">Delete post</button>
        </form>
      </div>
    )
  }
}

export default DeleteForm