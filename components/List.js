import { FlatList, StyleSheet, View} from "react-native";
import { useNavigation } from "@react-navigation/native";

import ListItem from "./ListItem";

const List = ({ list }) => {    

    const navigation = useNavigation();
    const renderer = (itemData) => {
        const item = itemData.item;

        const pressHandler = () => {
            navigation.navigate('expensePrompt', {
                id: item.id,
                title: item.title,
                amount: item.amount,
                date: item.date.toJSON()
            });
        }
        // console.log(item.date, 'from list', typeof item.date);
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