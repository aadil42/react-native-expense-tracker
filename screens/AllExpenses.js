import { useContext } from "react";

import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

// get components
import List from "../components/List";
import Total from "../components/Total";

// get contexts
import { ExpenseCtx } from "../store/context/ExpenseContext";

const AllExpenses = ({ navigation }) => {

    const ctx = useContext(ExpenseCtx);
    
    const allExpenseList = ctx.list;
    const total = allExpenseList.reduce((acc, expense) => {
        return acc + +expense.amount;
    }, 0);

    return (
        <View style={styles.container}>
            <Total total={total} title="All Expense total" />
            <List navigation={navigation} list={allExpenseList} />
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