
import {View, Text, StyleSheet} from "react-native";

const Error = ({text}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "white",
        fontSize: 25
    }
});

export default Error;