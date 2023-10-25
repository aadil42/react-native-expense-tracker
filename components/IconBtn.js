import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconBtn = ({ name, color, size, pressHandler }) => {

    return (
        <Pressable onPress={pressHandler}>
            <Ionicons name={name} size={size} color={color} />
        </Pressable>
    );
}

export default IconBtn;