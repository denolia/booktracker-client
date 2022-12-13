import React from 'react';

type Action = { type: 'increment' } | { type: 'decrement' };

type Dispatch = (action: Action) => void;
type State = { count: number };
const BooksContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function bookReducer(state: State, action: Action) {
  switch (action.type) {
    case 'increment': {
      return { count: state.count + 1 };
    }
    case 'decrement': {
      return { count: state.count - 1 };
    }
    default: {
      throw new Error(`Unhandled action: ${action}`);
    }
  }
}

export function BooksProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(bookReducer, { count: 0 });
  const value = { state, dispatch };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
}

export function useBooks() {
  const context = React.useContext(BooksContext);
  if (!context) {
    throw new Error('useBooks must be used within a BooksProvider');
  }
  return context;
}
