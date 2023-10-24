import { FlatList, StyleSheet, Text } from "react-native";


const List = ({ list }) => {    

    const renderer = (itemData) => {
        const item = itemData.item;
        return <Text>{item.title}</Text>
    }


    return (
        <FlatList 
        data={list}
        renderItem={renderer}
        keyExtractor={(item) => item.id}
        />
    );
}

const styles = StyleSheet.create({
    
});

export default List;