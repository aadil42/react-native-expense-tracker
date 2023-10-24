import { useContext } from "react";

import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

// get components
import List from "../components/List";

// get contexts
import { ExpenseCtx } from "../store/context/ExpenseContext";

const AllExpenses = () => {

    const ctx = useContext(ExpenseCtx);
    
    const allExpenseList = ctx.list;
    return (
        <View style={styles.container}>
            <List list={allExpenseList} />
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

export default AllExpenses;