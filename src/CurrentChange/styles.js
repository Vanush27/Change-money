import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '10%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    prompt: {
        margin: 20,
        fontSize: 20,
    },
    button: {
        height: 35,
        width: 200,
        margin: 10,
        borderWidth: 2,
        borderRadius: 20,
        alignItems: 'center',
        borderColor: 'lightblue',
        justifyContent: 'center',
    },
    currencyText: {
        fontSize: 30,
        color: 'green',
        fontWeight: 'bold'
    },
    inputStyle: {
        textAlign:'center',
        height: 60,
        padding: 5,
        width: 250,
        fontSize: 30,
        borderWidth: 1,
        borderColor: 'lightblue'
    }
});
