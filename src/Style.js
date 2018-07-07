import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },

    headerContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'blue',
        fontStyle: 'italic',
        textDecorationLine: 'underline'
    },

    scoreContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'flex-end',
    },

    scoreText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'lightblue',
    },

    footerContainer: {
        flex: 2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    boardContainer: {
        flex: 6,
        backgroundColor: 'black',
        borderWidth:1,
        borderColor:'gray',
    },

    numberButtonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'gray'
    },

    commandButtonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'gray',
    },

    numberButtonBlankContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white',
    },

    footerContainerHeader: {
        flex: 2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    footerContainerBody: {
        flex: 2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    footerContainerFooter: {
        flex: 2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    numberButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },

    commandButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'lightblue'
    },

    numberRow: {
        flex: 1,
        flexDirection: 'row'
    },

    gameStatusContainer: {
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        flex:1
    },

    gameStatusText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'green',
    },
    
});

export default Style;