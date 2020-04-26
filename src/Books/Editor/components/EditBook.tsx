import React, { Component } from 'react';
import { Redirect, RouteComponentProps } from 'react-router';
import { fetchBookById } from '../state/fetchBookById';
import { IBook } from '../../List/interfaces/IBook';
import { BookFormContainer } from '../containers/BookFormContainer';

// this is what we expect coming from '/edit/:id' to 'this.props.match.params.*'
type PathParamsType = {
  id: string;
};
interface IState {
  book?: IBook;
  loading: boolean;
  editFinished: boolean;
}

export class EditBook extends Component<
  RouteComponentProps<PathParamsType>,
  IState
> {
  constructor(props: RouteComponentProps<PathParamsType>) {
    super(props);

    this.state = {
      loading: true,
      editFinished: false,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    fetchBookById(match.params.id).then((book) =>
      this.setState({ book, loading: false }),
    );
  }

  render() {
    const { book, loading, editFinished } = this.state;

    if (loading) {
      return 'Loading...';
    }

    if (editFinished) {
      return <Redirect to="/" />;
    }

    if (book === undefined) {
      return 'Unable to fetch the book';
    }

    return (
      <BookFormContainer
        setEditFinished={() => this.setState({ editFinished: true })}
        currentBook={book}
        submitButtonText="Update Book"
        title="Edit Book"
      />
    );
  }
}
