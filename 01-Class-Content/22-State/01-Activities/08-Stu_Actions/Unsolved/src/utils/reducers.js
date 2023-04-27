import {
  ADD_STUDENT,
  REMOVE_STUDENT,
  UPDATE_STUDENT,
  ADD_MAJOR,
  REMOVE_MAJOR,
} from './actions';
import createId from './createId';

// TODO: Add a comment explaining what a reducer is
// it takes in the current state and an action and it returns a new state
// An example would be a reducer that takes in the current state of a shopping cart and an action to add an item to the cart
// Your comment here
export default function reducer(state, action) {
  switch (action.type) {
    case ADD_STUDENT: {
      const newStudentId = createId(state.students);

      const newStudent = { ...action.payload, id: newStudentId };

      return {
        ...state,
        students: [...state.students, newStudent],
      };
    }
    case REMOVE_STUDENT: {
      return {
        ...state,
        students: [...state.students].filter(
          (student) => student.id !== action.payload
        ),
      };
    }
    case UPDATE_STUDENT: {
      // TODO: Add a comment describing how we get the student index 
      // we get the student index by finding the index of the student with the id that matches the id of the student in the payload.
      //using the findIndex method, which returns the index of the first element in the array.
      // Your comment here
      const studentIndex = state.students.findIndex(
        (student) => student.id === action.payload.id
      );

      // TODO: Add a comment describing what the spread operator is doing
      // the spread operator is creating a new array with the updated student object
      // Your code here
      const updatedStudent = {// this is the updated student object
        ...state.students[studentIndex],// this is the student object that is being updated
        ...action.payload,// ...action.payload means that the updated student object will have all the properties of the student object that is being updated
      };

      const newStudentsList = [...state.students];

      newStudentsList[studentIndex] = updatedStudent;

      return {
        ...state,
        students: newStudentsList,
      };
    }
    case ADD_MAJOR: {
      // TODO: Add a comment explaining what this case is returning
      // this case is returning a new state with the new major added to the majors array
      return {
        ...state,
        majors: [...state.majors, action.payload],
      };
      
    }
    case REMOVE_MAJOR: {
      // TODO: Add a comment explaining what this case is returning
      // this case is returning a new state with the major removed from the majors array and all students with that major removed from the students array 
      return {
        ...state,
        majors: [...state.majors].filter((major) => major !== action.payload),
      };
    }
    default:
      return state;
  }
}
