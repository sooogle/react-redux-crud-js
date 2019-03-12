import * as React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class EmployeeItem extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleDelete = this.handleDelete.bind(this);
  // }

  // // 親のstateを変更するため、propsとして関数をもらってそれを呼び出す
  // handleDelete() {
  //   this.props.onDelete(this.props.emp.id);
  // }

  render() {
    return (
      <tr>
        <td>
          <Link to={`emp/${this.props.emp.id}/update`}>
            {this.props.emp.id}
          </Link>
        </td>
        <td>{this.props.emp.name}</td>
        <td>{this.props.emp.age}</td>
        <td>{this.props.emp.sex === "1" ? "男" : "女"}</td>
        <td>
          <button
            className="button is-danger is-small"
            onClick={this.props.onDelete}
          >
            削除
          </button>
        </td>
      </tr>
    );
  }
}

// 型チェックの仕組みは、他にもFlow, TypeScriptなどの選択の余地がある
EmployeeItem.propTypes = {
  emp: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    sex: PropTypes.string.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired
};
