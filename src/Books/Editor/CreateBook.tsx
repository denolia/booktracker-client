import * as React from 'react';
import { ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { RouteComponentProps } from 'react-router';
import { API } from '../../environment';
import { EditBookForm } from './EditBookForm';

interface State {
  name: string;
  description: string;
  progress: string;
}

type StateKeys = keyof State;

export class CreateBook extends React.Component<RouteComponentProps, State> {
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
    const { value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  private onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { description, name, progress } = this.state;
    console.log('Form submitted:');
    console.log(`Name: ${name}`);
    console.log(`Description: ${description}`);
    console.log(`Progress: ${progress}`);

    const newBook = {
      description,
      progress,
      name,
    };
    axios
      .post(`${API}update_book`, newBook)
      .then((res) => console.log(res.data));

    this.setState({
      name: '',
      description: '',
      progress: '',
    });
  }

  render() {
    const { description, name, progress } = this.state;
    return (
      <EditBookForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        name={name}
        description={description}
        progress={progress}
        submitButtonText="Create Book"
        title="Create New Book Record"
      />
    );
  }
}
