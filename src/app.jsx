import React from 'react';
import '../res/styles/index.scss';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const styles = {
	container: {
		textAlign: 'center',
		paddingTop: 200,
	},
};

const muiTheme = getMuiTheme({
	palette: {
		accent1Color: deepOrange500,
	},
});

export default class App extends React.Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			open: false,
		};
	}

	handleRequestClose = () => {
		this.setState({
			open: false,
		});
	}

	handleTouchTap = () => {
		this.setState({
			open: true,
		});
	}

	render() {

		const standardActions = (
			<FlatButton
				label="Ok"
				primary={true}
				onTouchTap={this.handleRequestClose}
			/>
		);

		return (
			<div>
				<h1>It Works!</h1>
				<p>This React project just works including <span className="redBg">module</span> local styles.</p>
				<p>Enjoy!</p>
				<MuiThemeProvider muiTheme={muiTheme}>
					<div style={styles.container}>
						<Dialog
							open={this.state.open}
							title="Super Secret Password"
							actions={standardActions}
							onRequestClose={this.handleRequestClose}>
							1-2-3-4-5
						</Dialog>
						<h1>Material-UI</h1>
						<h2>example project</h2>
						<RaisedButton
							label="Super Secret Password"
							secondary={true}
							onTouchTap={this.handleTouchTap}
						/>
					</div>
				</MuiThemeProvider>
			</div>
		)
	}
}
