import { useContext, useEffect, useState } from "react";

import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

// get components
import List from "../components/List";
import Total from "../components/Total";
import Message from "../components/Message";
import Loading from "../components/Loading";
import Error from "../components/Error";

// get contexts
import { ExpenseCtx } from "../store/context/ExpenseContext";

const AllExpenses = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    
    useEffect(() => {
        const getData = async () => {

            try {
                const data = await get();
                if(!data) throw new Error("Can't fetch the data. Check your API url.");
                ctx.fetchData(data);
            } catch {
                setIsError(true);
                throw new Error("Can't fetch the data. Check your API url.");
            }

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
    if(isError) {
        content = <View style={styles.container}>
                    <Error text="Opps. Something Went wrong" />
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