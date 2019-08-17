import React, { Component } from 'react';
import axios from 'axios';

export default class EditBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            progress: ''
        }
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeProgress = this.onChangeProgress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeProgress(e) {
        this.setState({
            progress: e.target.value
        });
    }
    componentDidMount() {
        axios.get('http://192.168.1.45:8080/book?name='+this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    description: response.data.description,
                    progress: response.data.progress
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    onSubmit(e) {
        e.preventDefault();
        const newBook = {
            description: this.state.description,
            progress: this.state.progress,
            name: this.state.name
        };
        console.log(newBook);
        axios.post('http://192.168.1.45:8080/update_book', newBook)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3 align="center">Edit Book</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                />
                    </div>
                   
                    <div className="form-group"> 
                        <label>Progress: </label>
                        <input  type="number"
                                className="form-control"
                                min="0" 
                                max="100"
                                value={this.state.progress}
                                onChange={this.onChangeProgress}
                                />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Update Book" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}