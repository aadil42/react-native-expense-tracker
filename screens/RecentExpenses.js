import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

const RecentExpenses = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                This is recent
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: GlobalStyles.colors.primary700
    },
    text: {
        color: "white",
        fontSize: GlobalStyles.fonts.sizeL
    }
});

export default RecentExpenses;