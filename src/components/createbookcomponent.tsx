import * as React from 'react';
import axios from 'axios';
import API from '../environment'
import { FormEvent, ChangeEvent } from 'react';

export default class CreateBook extends React.Component<any, any> {
    constructor(props: {}) {
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

    private onChangeDescription(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            description: e.target.value
        });
    }

    private onChangeName(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            name: e.target.value
        });
    }

    private onChangeProgress(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            progress: e.target.value
        });
    }

    private onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Name: ${this.state.name}`);
        console.log(`Description: ${this.state.description}`);
        console.log(`Progress: ${this.state.progress}`);

        const newBook = {
            description: this.state.description,
            progress: this.state.progress,
            name: this.state.name
        };
        axios.post(API + 'update_book', newBook)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            description: '',
            progress: ''
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Create New Book Record</h3>
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
                        <input type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>

                    <div className="form-group">
                        <label>Progress: </label>
                        <input type="number"
                            className="form-control"
                            min="0"
                            max="100"
                            value={this.state.progress}
                            onChange={this.onChangeProgress}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Book" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}