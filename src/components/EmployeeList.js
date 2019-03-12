import * as React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import EmployeeItem from "./EmployeeItem";

export default class EmployeeList extends React.Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>従業員No.</th>
              <th>氏名</th>
              <th>年齢</th>
              <th>性別</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.emps.map(emp => (
              <EmployeeItem
                emp={emp}
                onDelete={() => this.props.deleteEmp(emp.id)}
                key={emp.id}
              />
            ))}
          </tbody>
        </table>
        <Link to="/emp/create" className="button">
          新規登録
        </Link>
      </div>
    );
  }
}

EmployeeList.propTypes = {
  emps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      sex: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  deleteEmp: PropTypes.func.isRequired
};
