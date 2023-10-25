import { FlatList, StyleSheet, Text, View } from "react-native";

import ListItem from "./ListItem";

const List = ({ list, navigation }) => {    


    const renderer = (itemData) => {
        const item = itemData.item;
        console.log(item);
        const pressHandler = () => {
            navigation.navigate('expensePrompt', {
                id: item.id
            });
        }

        return <ListItem 
            title={item.title}
            amount={item.amount}
            date={item.date}
            pressHandler={pressHandler}
        />
    }


    return (
        <View style={styles.container}>
            <FlatList 
            data={list}
            renderItem={renderer}
            keyExtractor={(item) => item.id}
            style={styles.subContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 20,
        width: "100%"
    },
    subContainer: {
        width: "95%"
    }
});

export default List;