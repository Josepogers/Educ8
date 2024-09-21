import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    item: {

        backgroundColor: '#1E1E1E',
        gap: 10,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#333333',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 4,
    },
    icon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    title: {
        fontWeight: 'bold',
        width: 150,
        fontSize: 24,
        marginLeft: 25,
        color: '#BB86FC',
    },
    b_estudar: {
        fontSize: 20,
        color: '#03DAC6',
        marginLeft: 'auto',
    },
    header: {
        margin: 5,
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#BB86FC'
    }
});

