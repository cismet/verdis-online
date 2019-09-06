import React from 'react';

// Since this component is simple and static, there's no parent container for it.
const Comp = (
	messages = [],
	userMap = { verdis: { name: 'VerDIS-Online', color: '#006D71' }, citizen: {}, system: {} },
	width,
	background
) => {
	return (
		<div
			style={{
				marginTop: '10px',
				marginLeft: '10px',
				fontSize: '80%'
			}}
		>
			{from}
			<div
				style={{
					fontSize: '125%',
					border: '1px solid transparent',
					borderRadius: '5px',
					padding: '15px',
					_borderRightColor: '#00aabb',
					_borderLeft: '10px',
					marginTop: '1px',
					marginLeft: '1px',
					background: background || '#00aabb',
					width: width || '75%'
				}}
			>
				{messagetext}
			</div>
		</div>
	);
};

export default Comp;
