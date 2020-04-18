import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { fetchBookById } from '../state/fetchBookById';
import { IBook } from '../../List/interfaces/IBook';
import { EditBookFormContainer } from '../containers/EditBookFormContainer';

// this is what we expect coming from '/edit/:id' to 'this.props.match.params.*'
type PathParamsType = {
  id: string;
};

export class EditBook extends Component<
  RouteComponentProps<PathParamsType>,
  IBook
> {
  constructor(props: RouteComponentProps<PathParamsType>) {
    super(props);

    this.state = {
      name: '',
      id: '',
      description: '',
      progress: 0,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    fetchBookById(match.params.id).then((book) => this.setState(book));
  }

  render() {
    const { description, name, progress, id } = this.state;
    console.log(this.state);
    // todo if loading.. return 0, else, return edit book with right data

    return (
      <EditBookFormContainer
        id={id}
        currentName={name}
        currentDescription={description}
        currentProgress={progress}
        submitButtonText="Update Book"
        title="Edit Book"
      />
    );
  }
}
