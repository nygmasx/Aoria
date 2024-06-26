import React from 'react';
import {Text, View} from "react-native";
import {TouchableOpacity} from "react-native";

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center
            ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            activeOpacity={0.7}
        >
            <Text className={`text-primary text-lg font-psemibold ${textStyles}`}>{title}</Text>
        </TouchableOpacity>

    );
};

export default CustomButton;