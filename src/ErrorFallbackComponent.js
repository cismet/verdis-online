import React from 'react';
import { Well, Button } from 'react-bootstrap';
import { Icon } from 'react-fa';
import { getVersion } from './constants/versions';
import { Panel, Form, FormGroup, Grid, Row, Col } from 'react-bootstrap';
import Loadable from 'react-loading-overlay';

export default function ErrorFallback({ error, componentStack, resetErrorBoundary }) {
	console.log('componentStack', componentStack);

	return (
		<div
			style={{
				backgroundColor: 'red',
				width: '100%',
				height: '100%',
				minHeight: '100vh',
				background: "url('/images/error.jpg')",
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat'
			}}
		>
			<div
				style={{
					position: 'absolute',
					top: '0px',
					left: '0px',
					width: '100%',
					height: '200px',
					backgroundColor: 'rgba(0,0,0,0.4)'
				}}
			/>

			<div
				style={{
					position: 'absolute',
					bottom: '0px',
					left: '0px',
					width: '100%'
				}}
			>
				<div
					style={{
						fontSize: '9px',
						textAlign: 'right',
						color: 'rgba(256,256,256,0.5)',
						margin: 4
					}}
				>
					{getVersion()}
				</div>
			</div>
			<Grid>
				<Row className='show-grid'>
					<Col xs={12} md={12}>
						<h1 style={{ color: 'white' }}>
							<img alt='' width={180} src='/images/wuppertal-white.svg' />
						</h1>
						<h2 style={{ color: 'white' }}>VerDIS - online</h2>
						<h3 style={{ color: 'white' }}>Versiegelungsdaten | Flächenentwässerung</h3>
					</Col>
				</Row>
				<Row>
					<Col xs={5} md={5}>
						<div
							style={{
								position: 'fixed',
								top: '2%',
								right: '8%'
							}}
						>
							<h4 style={{ color: 'white' }}>Stadt Wuppertal</h4>
							<h4 style={{ color: 'white' }}>Vermessung, Katasteramt und Geodaten</h4>
							<h4 style={{ color: 'white' }}>
								102.23 Kommunalservice Liegenschaftskataster
							</h4>
							<h4 style={{ color: 'white' }}>
								<a
									style={{ color: 'white' }}
									href='mailto:regengeld@stadt.wuppertal.de'
								>
									regengeld@stadt.wuppertal.de
								</a>
							</h4>
						</div>
					</Col>
				</Row>
			</Grid>
			<div style={{ margin: 25, overflow: 'auto' }}>
				<h2 style={{ color: 'white' }}>
					Es ist ein Fehler aufgetreten. Das tut uns leid. ¯\_(ツ)_/¯
				</h2>
				<h4 style={{ color: 'white' }}>
					Sie können die Entwickler unterstützen, indem Sie den Fehler an uns melden.
				</h4>
				<pre style={{ backgroundColor: '#fff4', color: 'white' }}>{error.message}</pre>
				<pre style={{ height: '80%', backgroundColor: '#fff4', color: 'white' }}>
					{componentStack}
				</pre>
				<button style={{ marginTop: 25 }} onClick={resetErrorBoundary}>
					Einfach nochmal probieren (hilf eigentlich nie)
				</button>
				<br />

				{/* <button style={{ marginTop: 25 }} onClick={resetErrorBoundary}>
					Einfach nochmal probieren (hilf eigentlich nie)
				</button> */}
			</div>
		</div>
	);

	return (
		<div role='alert'>
			<p>Something went wrong:</p>
			<pre>{error.message}</pre>
			<pre>{componentStack}</pre>
			<button onClick={resetErrorBoundary}>Try again</button>
		</div>
	);
}
