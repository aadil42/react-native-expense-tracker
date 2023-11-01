import { Pressable, Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
const Button = ({title, incomingStyle, pressHandler}) => {

    return (
        <View style={[styles.container, ...incomingStyle]}>
            <Pressable android_ripple={{
                color: " #eoeoeo",
            }} style={({ pressed }) => {
                return pressed ? [styles.pressedStyle, styles.btn] : [styles.btn]
            }} onPress={pressHandler}>
               <Text style={styles.text}>
                        {title}
               </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container:  {
        backgroundColor: GlobalStyles.colors.primary500,
        minWidth: 120,
        borderRadius: 10,
        overflow: "hidden"
    },
    btn: {
        paddingVertical: 7,
    },
    text: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        borderRadius: 10
    },
    pressedStyle: {
        opacity: .7
    }
});

export default Button;
