
import {StyleSheet, View, Text, Pressable } from "react-native";

import { GlobalStyles } from "../constants/styles";

const ListItem = ({ title, date, amount, pressHandler }) => {    

    const year = date.getUTCFullYear().toString().slice(-2);
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = date.getUTCDate().toString().padStart(2, '0');

    const readableDate = `${year}-${month}-${day}`;


    return (
       <Pressable onPress={pressHandler} style={styles.container}>
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{readableDate}</Text>
        </View>
        <View>
            <Text style={styles.amount}>
                {amount}
            </Text>
        </View>
       </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:  "center",
        padding: 15,
        marginBottom: 15,
        borderRadius: 8        
    },
    title: {
        fontWeight:  "bold",
        color: "white",
        fontSize:  20
    },
    date:  {
        fontWeight: "normal",
        color: "white",
        fontSize: 20,
        opacity: .7,
    },
    amount: {
        backgroundColor: "white",
        paddingVertical: 15,
        color:  GlobalStyles.colors.primary800,
        borderRadius: 5,
        minWidth: 100,
        fontSize: 20,
        fontWeight: "bold",
        textAlign:  "center"
    }
});

export default ListItem;