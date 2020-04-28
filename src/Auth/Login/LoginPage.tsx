import React, { useState } from 'react';

export function LoginPage() {
  const [pageMode, setPageMode] = useState<'login' | 'register'>('login');

  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
      </div>
      <div className="row">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button className="btn btn-secondary ml-auto">Register</button>
      </div>
    </form>
  );
}
