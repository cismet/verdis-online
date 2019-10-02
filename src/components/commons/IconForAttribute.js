import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Comp = ({ iconAttributeMap, value }) => {
	return <FontAwesomeIcon icon={iconAttributeMap[value]} />;
};
export default Comp;
