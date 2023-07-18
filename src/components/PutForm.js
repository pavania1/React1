import React, { Component } from 'react'
import axios from 'axios';

class PutForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        };
    }
    changeHandler = (e) => {
        let obj = {...this.state};
        obj[e.target.name] = e.target.value;
        this.setState(obj)
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        const { userId, title, body } = this.state;
        const postId = 1;
        axios
            .put('https://jsonplaceholder.typicode.com/posts/${postId}', {
                userId,
                title,
                body
            })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log("errrrrrrrrrrrrrrrrr", error)

            });

    }

    render() {
        const { userId, title, body } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input
                            type="text"
                            name="userId"
                            value={userId}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <input type="text"
                            name="title"
                            value={title}
                            onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text"
                            name="body"
                            value={body}
                            onChange={this.changeHandler} />
                    </div>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

export default PutForm;