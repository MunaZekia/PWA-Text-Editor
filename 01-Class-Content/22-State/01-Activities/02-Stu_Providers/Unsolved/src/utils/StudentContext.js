import React, { createContext, useContext } from 'react';

// Initialize new context for students
const StudentContext = createContext();

// We create a custom hook to provide immediate usage of the student context in other components
export const useStudentContext = () => useContext(StudentContext);

// StudentProvider is a function that will return a provider component that makes global state available
export const StudentProvider = ({ children }) => {
  const initialState = {
    students: [
      {
        name: 'Ahmed',
        major: 'Computer Science',
        id: 1,
      },
    ],
      // TODO: Add two students with a `name`, `major` and `id` property
    //],
  };

  // TODO: Fill in the value prop for the provider
  return (
    <StudentContext.Provider value={initialState}>
      // this is the global state, which means that any component that is a child of the provider component will have access to the global state
      {children}// this is the children property, which is a reference to the components that are wrapped by the provider component
    </StudentContext.Provider>
    // we are returning the provider component
    // this is the provider component, 
    //which is a wrapper component that makes the 
    //global state available to all of its children
  );
};
