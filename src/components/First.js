import React from "react";
import PropTypes from "prop-types";

const First = ({ desc, desc2 }) => {
    return (
    	<div>
    		<h1>{desc}</h1>
    		<h1>{desc2}</h1>
    	</div>
	);
};

First.propTypes = {
    desc: PropTypes.string,
    desc2: PropTypes.string
};

export default First;
