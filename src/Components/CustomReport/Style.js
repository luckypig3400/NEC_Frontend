import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
    container: { display: 'flex', alignItems: 'center', height: '86%', width: '100%' },
    scrollspy: { marginRight: '1rem', padding: '.3rem' },
    scrollspyButton: {
        fontSize: '1.5rem',
        marginBottom: '1rem',
        color: theme.palette.primary.light_secondary,
        // '&:hover': {
        //     backgroundColor: theme.palette.primary.light,
        // },
        [theme.breakpoints.down('lg')]: {
            fontSize: '1.3rem',
        },
    },
    formContainer: {
        padding: '.5rem',
        display: 'flex',
        alignItems: 'center',
    },
    formLabel: {
        fontSize: '1.8rem',
        color: theme.palette.primary.main,
        whiteSpace: 'nowrap',
        [theme.breakpoints.down('lg')]: {
            fontSize: '1.5rem',
        },
    },
    inputLabel: {
        textTransform: 'none',
        // fontSize: '1.3rem',
        padding: '.3rem',

        [theme.breakpoints.down('lg')]: {
            // fontSize: '1rem',
        },
    },
    toggleButton: {
        // marginRight: '1rem',
        padding: '0 .4rem',
        margin: '.3rem',
        border: 'none',
        borderRadius: '1rem',
    },
    reportListItem: {
        padding: 0,
    },
    patientInfo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // backgroundColor: theme.palette.primary.light_secondary,
        color: theme.palette.primary.main,
        // borderRadius: '1rem',
        padding: '1rem',
    },
    chip: {
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
        fontSize: '1.1rem',
        padding: '.6rem',
        [theme.breakpoints.down('lg')]: {
            fontSize: '.8rem',
            padding: '.3rem',
        },
    },
    optionToggleButton: {
        padding: '.5rem',
    },
    popover: {
        padding: '.5rem',
        maxHeight: '30rem',
    },
}))

export default useStyles
