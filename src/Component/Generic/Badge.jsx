import React from "react";
import PropTypes from "prop-types";

export default function Badge({ text }) {
  return <span className="badge bg-secondary mx-3">{text}</span>;
}
Badge.propTypes = {
  text: PropTypes.string,
};
