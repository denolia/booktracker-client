import React, { Component, FormEvent, ChangeEvent } from 'react';
import axios from 'axios';
import API from '../environment'
import { RouteComponentProps } from 'react-router';

interface State {
    name: string,
    id: string,
    description: string,
    progress: string
}

type StateKeys = keyof State;

// this is what we expect coming from '/edit/:id' to 'this.props.match.params.*'
type PathParamsType = {
    id: string,
}

export default class EditBook extends Component<RouteComponentProps<PathParamsType>, State> {
    constructor(props: RouteComponentProps<PathParamsType>) {
        super(props);

        this.state = {
            name: '',
            id: '',
            description: '',
            progress: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    componentDidMount() {
        axios.get(API + 'book?id=' + this.props.match.params.id)
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

    private onChange(e: ChangeEvent<HTMLInputElement>) {
        const name = e.target.name as StateKeys
        const value: string = e.target.value

        this.setState(prevState => ({
          ...prevState,
          [name]: value
        }));
      }

    private onSubmit(e: FormEvent<HTMLFormElement>) {
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
            <div style={{ marginTop: 10 }}>
                <h3 style={{ textAlign: "center" }}>Edit Book</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            name="name"
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.description}
                            name="description"
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Progress: </label>
                        <input type="number"
                            className="form-control"
                            min="0"
                            max="100"
                            value={this.state.progress}
                            name="progress"
                            onChange={this.onChange}
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