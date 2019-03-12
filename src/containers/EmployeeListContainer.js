import { connect } from "react-redux";
import { deleteEmp } from "../actions";
import EmployeeList from "../components/EmployeeList";

const mapStateToProps = state => ({
  emps: state.emps
});

const mapDispatchToProps = dispatch => ({
  deleteEmp: id => dispatch(deleteEmp(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeList);
