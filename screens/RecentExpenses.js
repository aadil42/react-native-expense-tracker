import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

import List from "../components/List";

import Total from "../components/Total";

import { ExpenseCtx } from "../store/context/ExpenseContext";

const RecentExpenses = ({ navigation }) => {

    const ctx = useContext(ExpenseCtx);
    const recentList = ctx.list.sort((a,b) => {
        return b.date - a.date;        
    });

    const total = recentList.slice(0,7).reduce((acc, expense) => {
        return acc + +expense.amount; 
    }, 0);

    return (
        <View style={styles.container}>
            <Total title="Last 7 days" total={total}/>
            <List navigation={navigation} list={recentList.slice(0, 7)} />
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