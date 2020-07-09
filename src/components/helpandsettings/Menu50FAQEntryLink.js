import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Comp = (props) => {
	const { id, title, containerId = 'myMenu', bsStyle = 'default', showOnSeperatePage } = props;
	return (
		<Link
			to={id}
			containerId={showOnSeperatePage === false ? containerId : undefined}
			style={{ textDecoration: 'none' }}
		>
			<Label style={{ cursor: 'pointer' }} bsStyle={bsStyle}>
				{title}
			</Label>{' '}
		</Link>
	);
};

export default Comp;
Comp.propTypes = {
	key: PropTypes.string,
	title: PropTypes.string,
	containerId: PropTypes.string,
	bsStyle: PropTypes.string
};
