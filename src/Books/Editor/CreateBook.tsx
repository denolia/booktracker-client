import * as React from 'react';
import { ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { RouteComponentProps } from 'react-router';
import { API } from '../../environment';

interface State {
  name: string;
  description: string;
  progress: string;
}

type StateKeys = keyof State;

export default class CreateBook extends React.Component<
  RouteComponentProps,
  State
> {
  constructor(props: RouteComponentProps) {
    super(props);

    this.state = {
      name: '',
      description: '',
      progress: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  private onChange(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.name as StateKeys;
    const value: string = e.target.value;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
      name: this.state.name,
    };
    axios
      .post(API + 'update_book', newBook)
      .then((res) => console.log(res.data));

    this.setState({
      name: '',
      description: '',
      progress: '',
    });
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
              name="name"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.description}
              name="description"
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Progress: </label>
            <input
              type="number"
              className="form-control"
              min="0"
              max="100"
              value={this.state.progress}
              name="progress"
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Book"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
