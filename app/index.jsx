import {StatusBar} from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Link} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";

export default function App() {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-white">
            <ScrollView contentContainerStyle={{height: '100%'}}>
                <View className="w-full flex justify-center items-center h-full px-4">
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

