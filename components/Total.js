import { StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../constants/styles";
const Total = ({ total, title }) => {

    return (
        <View style={styles.recentTotalContainer}>
            <Text style={styles.lightTextColor}>{title}</Text>
            <Text style={styles.darkTextColor}>${total}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    recentTotalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "95%",
        marginTop: 20,
        backgroundColor: "white",
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    lightTextColor: {
        opacity: .7,
        fontSize: 20,
        color: GlobalStyles.colors.primary500
    },
    darkTextColor: {
        fontSize: 25,
        fontWeight: "bold",
        color: GlobalStyles.colors.primary500
    },
});


export default Total;