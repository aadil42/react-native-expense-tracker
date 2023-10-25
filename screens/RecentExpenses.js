import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

import List from "../components/List";

import { ExpenseCtx } from "../store/context/ExpenseContext";

const RecentExpenses = () => {

    const ctx = useContext(ExpenseCtx);
    const recentList = ctx.list.sort((a,b) => {
        return b.date - a.date;        
    });

    return (
        <View style={styles.container}>
            <List list={recentList.slice(0, 7)} />
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