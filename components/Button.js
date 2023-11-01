import { Pressable, Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
const Button = ({title, incomingStyle, pressHandler}) => {

    return (
        <Pressable onPress={pressHandler}>
            <View style={[styles.container, ...incomingStyle]}>
                <Text style={styles.text}>
                    {title}
                </Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container:  {
        backgroundColor: GlobalStyles.colors.primary500,
        minWidth: 120,
        paddingVertical: 7,
        borderRadius: 10
    },
    text: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        borderRadius: 10
    },

});

export default Button;
