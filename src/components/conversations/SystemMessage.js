import React from 'react';
import Msg from './InternalMessage';

const Comp = ({ msg }) => {
	return (
		<Msg
			msg={msg}
			alignment='center'
			background='#eee'
			color='#666'
			margin={5}
			padding={5}
			fontSize={0.9}
			width='40%'
		/>
	);
};
export default Comp;
