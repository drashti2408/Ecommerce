import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
	root: {
		maxWidth: '100%',
	},
	media: {
		height: 200,
		backgroundSize: 'contain',
		backgroundPosition: 'center',
	},
	cardActions: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	cardContent: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	productDescription: {
		fontSize: 24,
	},
}));
