import EmployeeService from "../common/EmployeeService";

const emps = (state = EmployeeService.findList(), action) => {
  switch (action.type) {
    case "ADD_EMP":
      return [...state, action.emp];
    case "UPDATE_EMP":
      return state.map(x => (x.id === action.emp.id ? action.emp : x));
    case "DELETE_EMP":
      return state.filter(x => x.id !== action.id);
    default:
      return state;
  }
};

export default emps;
