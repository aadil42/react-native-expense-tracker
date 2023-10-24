import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

const RecentExpenses = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.container}>
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
    },
    text: {
        color: GlobalStyles.colors.primary50,
        fontSize: GlobalStyles.fonts.sizeL
    }
});

export default RecentExpenses;