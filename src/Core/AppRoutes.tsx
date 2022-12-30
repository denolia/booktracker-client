import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { SignInContainer } from '@app/Auth/Login/containers/SignInContainer';
import { SignUpContainer } from '@app/Auth/Login/containers/SignUpContainer';
import { CreateBookPage } from '../Books/Editor/components/CreateBookPage';
import { EditPage } from '../Books/Editor/components/EditPage';
import { BookList } from '../Books/List/components/BookList';
import { Header } from './Header';

const sections = [
  { title: 'Books', url: '/' },
  { title: 'Add Book', url: '/create' },
];

export function AppRoutes() {
  return (
    <div className="container">
      <Header title="Book tracker" sections={sections} />

      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/create" element={<CreateBookPage />} />
        <Route path="/login" element={<SignInContainer />} />
        <Route path="/register" element={<SignUpContainer />} />
      </Routes>
    </div>
  );
}
