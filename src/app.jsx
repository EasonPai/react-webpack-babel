import React from 'react';
import '../res/styles/index.scss';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Title from 'react-title-component';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const styles = {
	root: {
		padding: 0,
		textAlign: 'center',
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
			drawerOpen: false,
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

	toggleDrawer = () => this.setState({drawerOpen: !this.state.drawerOpen});

	render() {

		const standardActions = (
			<FlatButton
				label="Ok"
				primary={true}
				onTouchTap={this.handleRequestClose}
			/>
		);

		return (
				<MuiThemeProvider muiTheme={muiTheme}>
					<div style={styles.root}>
						<Drawer
							docked={false}
							open={this.state.drawerOpen}
							onRequestChange={(drawerOpen) => this.setState({drawerOpen})}
							>
							<MenuItem onTouchTap={this.toggleDrawer}>Menu Item</MenuItem>
							<MenuItem onTouchTap={this.toggleDrawer}>Menu Item 2</MenuItem>
						</Drawer>
						<AppBar
							title="Title"
							onLeftIconButtonTouchTap={this.toggleDrawer}
						/>
						<Title render="App" />
						<Dialog
							open={this.state.open}
							title="Dialog Title"
							actions={standardActions}
							onRequestClose={this.handleRequestClose}>
							Dialog Content
						</Dialog>
						<h1>Material-UI</h1>
						<h2>example project</h2>
						<RaisedButton
							label="Toggle Dialog"
							secondary={true}
							onTouchTap={this.handleTouchTap}
						/>
					</div>
				</MuiThemeProvider>
		)
	}
}
