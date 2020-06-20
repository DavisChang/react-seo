import React from "react";
import PropTypes from "prop-types";

const First = ({ desc }) => {
    return (<h1>{desc}</h1>);
};

First.propTypes = {
    desc: PropTypes.string
};

export default First;
