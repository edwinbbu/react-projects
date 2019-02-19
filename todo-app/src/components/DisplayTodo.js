import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toogleNote } from "../actions/notesAction";

class DisplayTodo extends Component {
  handleClick = id => {
    console.log("completed:", id);
    this.props.toogleNote(id);
  };
  render() {
    let list = this.props.notes;
    let notes = list.map((item, i) => {
      return (
        <li
          style={{ fontSize: "18px", textDecoration: item.completed ? "line-through" : "none" }}
          key={i}
          onClick={() => this.handleClick(i)}
        >
          {item.note}
        </li>
      );
    }, this);
    let displayComponent = <p>No Todo Created</p>;
    if (list.length > 0) {
      displayComponent = <ul>{notes}</ul>;
    }
    return (
      <div style={{ marginTop: "20px" }}>
        <h3>List</h3>
        {displayComponent}
      </div>
    );
  }
}

DisplayTodo.propTypes = {
  toogleNote: PropTypes.func.isRequired,
  notes: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(
  mapStateToProps,
  { toogleNote }
)(DisplayTodo);
