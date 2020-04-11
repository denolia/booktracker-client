import React, { ChangeEvent, Component, FormEvent } from 'react';
import axios from 'axios';
import { RouteComponentProps } from 'react-router';
import { API } from '../../environment';
import { EditBookForm } from './EditBookForm';

interface State {
  name: string;
  id: string;
  description: string;
  progress: string;
}

type StateKeys = keyof State;

// this is what we expect coming from '/edit/:id' to 'this.props.match.params.*'
type PathParamsType = {
  id: string;
};

export class EditBook extends Component<
  RouteComponentProps<PathParamsType>,
  State
> {
  constructor(props: RouteComponentProps<PathParamsType>) {
    super(props);

    this.state = {
      name: '',
      id: '',
      description: '',
      progress: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    axios
      .get(`${API}book?id=${match.params.id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          name: response.data.name,
          description: response.data.description,
          progress: response.data.progress,
          id: response.data.id,
        });
      })
      .catch((error) => {
        console.log(error);
      });
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
    const { description, id, name, progress } = this.state;
    const newBook = {
      description,
      progress,
      id,
      name,
    };
    const editComponent = this;
    axios.post(`${API}update_book`, newBook).then((res) => {
      editComponent.props.history.push('/');
    });
  }

  render() {
    const { description, name, progress } = this.state;
    return (
      <EditBookForm
        onSubmit={this.onSubmit}
        name={name}
        onChange={this.onChange}
        description={description}
        progress={progress}
        submitButtonText="Update Book"
        title="Edit Book"
      />
    );
  }
}
