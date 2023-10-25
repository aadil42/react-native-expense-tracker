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
            <View style={styles.recentTotalContainer}>
                <Text style={styles.lightTextColor}>Last 7 days</Text>
                <Text style={styles.darkTextColor}>${recentList.slice(0, 7).reduce((acc, curr) => (acc+ +(curr.amount)), 0)}</Text>
            </View>
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
    recentTotalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "95%",
        marginTop: 20,
        backgroundColor: "white",
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 8,
    }
});

export default RecentExpenses;