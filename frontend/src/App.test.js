import { render, screen } from '@testing-library/react';
import React from 'react';
import ToDoList from './ToDoList';

test('renders todo list', () => {
  render(<ToDoList data={[]}/>)
    expect(screen.getByText('My To Do List')).toBeInTheDocument()
});
