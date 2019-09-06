import React from 'react';
import FlexView from 'react-flexview';

// Since this component is simple and static, there's no parent container for it.
const Comp = ({
	msg,
	from,
	width,
	background,
	alignment = 'left',
	margin = '10px',
	padding = '15px'
}) => {
	let textAlign;
	if (alignment === 'left') {
		textAlign = 'start';
	} else if (alignment === 'center') {
		textAlign = 'start'; //'center';
	} else {
		textAlign = 'start'; //'end';
	}
	return (
		<FlexView
			column
			hAlignContent={alignment}
			style={{
				marginTop: margin,
				marginLeft: 15,
				marginRight: 15,
				fontSize: '80%'
			}}
		>
			{from}
			<FlexView
				hAlignContent={alignment}
				style={{
					fontSize: '125%',
					border: '1px solid transparent',
					borderRadius: '5px',
					padding: padding,
					_borderRightColor: '#00aabb',
					_borderLeft: '10px',
					marginTop: '1px',
					marginLeft: '1px',
					marginRight: '1px',
					background: background || '#00aabb99',
					width: width || '75%',
					textAlign
				}}
			>
				{msg}
			</FlexView>
		</FlexView>
	);
};

export default Comp;
