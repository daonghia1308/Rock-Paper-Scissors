import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9ebee',
        padding: 10
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center"
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    image: {
        width: 150,
        height: 150,
        padding: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold"
    }
})