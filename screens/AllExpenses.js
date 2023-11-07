import { useContext, useEffect, useState } from "react";

import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

// get components
import List from "../components/List";
import Total from "../components/Total";
import Message from "../components/Message";
import Loading from "../components/Loading";

// get contexts
import { ExpenseCtx } from "../store/context/ExpenseContext";

const AllExpenses = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const data = await get();
            ctx.fetchData(data);
            setIsLoading(false);
        }
        getData();
        
    },[]);
    const ctx = useContext(ExpenseCtx);
    
    const allExpenseList = ctx.list;
    const total = allExpenseList.reduce((acc, expense) => {
        return acc + +expense.amount;
    }, 0);

    let content = <View style={styles.container}>
                        <Total total={total} title="All Expense total" />
                        <List list={allExpenseList} />
                    </View>;

    if(allExpenseList.length === 0) {
        content = <View style={styles.container}>
                    <Message message="No Expenses added yet." />
                 </View>
    }  
    
    if(isLoading) {
        content = <View style={styles.container}>
                    <Loading />
                </View>
    }         
         
    return (
        content
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