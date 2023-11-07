import { View, Text, StyleSheet } from "react-native";
 
const Loading = () => {
    return (
        <View>
            <Text style={styles.text}>
                Loading...
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        color: "white",
    }
});

export default Loading;