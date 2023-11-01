import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconBtn = ({ name, color, size, pressHandler, incomingStyles }) => {

    return (
        <Pressable style={[styles.container, ...incomingStyles]} onPress={pressHandler}>
            <Ionicons name={name} size={size} color={color} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 10
    }
});

export default IconBtn;