import React, { Component } from 'react';
import axios from 'axios';
import API from '../environment'


export default class EditBook extends Component {
    constructor(props: {}) {
        super(props);

        this.state = {
            name: '',
            id: '',
            description: '',
            progress: ''
        }
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeProgress = this.onChangeProgress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    private onChangeDescription(e: Event) {
        this.setState({
            description: e.target.value
        });
    }

    private onChangeName(e: Event) {
        this.setState({
            name: e.target.value
        });
    }

    private onChangeProgress(e: Event) {
        this.setState({
            progress: e.target.value
        });
    }
    componentDidMount() {
        axios.get(API + 'book?id='+this.props.match.params.id)
            .then(response => {
                console.log(response);
                this.setState({
                    name: response.data.name,
                    description: response.data.description,
                    progress: response.data.progress,
                    id: response.data.id
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    private onSubmit(e: Event) {
        e.preventDefault();
        const newBook = {
            description: this.state.description,
            progress: this.state.progress,
            id: this.state.id,
            name: this.state.name
        };
        const edit_component = this;
        console.log(newBook);
        axios.post(API + 'update_book', newBook)
            .then(function (res) {
                console.log(res.data);
                edit_component.props.history.push('/');
            });

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