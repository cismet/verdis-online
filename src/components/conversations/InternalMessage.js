import React from 'react';
import FlexView from 'react-flexview';

// Since this component is simple and static, there's no parent container for it.
const Comp = ({
	msg = '',
	from,
	width = '75%',
	background = '#00aabb99',
	color = 'black',
	alignment = 'left',
	margin = '10px',
	padding = '15px',
	fontSizeSender = 0.8,
	fontSize = 1
}) => {
	let textAlign;
	if (alignment === 'left') {
		textAlign = 'start';
	} else if (alignment === 'center') {
		textAlign = 'start'; //'center';
	} else {
		textAlign = 'end'; //'end';
	}
	let messageToDisplay = msg;
	if (typeof msg === 'string') {
		messageToDisplay = msg.split('\n').map((i, index) => {
			return (
				<p key={'INTERNALMESSAGE.p.' + index} style={{ margin: '0px', minHeight: '20px' }}>
					{i}
				</p>
			);
		});
	}

	return (
		<FlexView
			column
			hAlignContent={alignment}
			style={{
				marginTop: margin,
				marginLeft: 15,
				marginRight: 15,
				fontSize: fontSizeSender * 100 + '%'
			}}
		>
			{from}
			<FlexView
				hAlignContent={alignment}
				style={{
					fontSize: fontSize / fontSizeSender * 100 + '%',
					border: '1px solid transparent',
					borderRadius: '5px',
					padding: padding,
					_borderRightColor: '#00aabb',
					_borderLeft: '10px',
					marginTop: '1px',
					marginLeft: '1px',
					marginRight: '1px',
					background: background,
					color: color,
					maxWidth: width,
					textAlign
				}}
			>
				<div>{messageToDisplay}</div>
			</FlexView>
		</FlexView>
	);
};

export default Comp;
