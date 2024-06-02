import {StatusBar} from 'expo-status-bar';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Redirect, router} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import {images} from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{height: '100%'}}>
                <View className="w-full items-center justify-center min-h-[85vh] px-4">
                    <Image source={images.logo} resizeMode="contain" className="w-[130px] h-[84px]"/>
                    <Image source={images.cards} resizeMode="contain" className="max-w-[380px] h-[300px]"/>
                    <View className="relative mt-5">
                        <Text className="text-3xl text-white font-bold text-center">
                            Discover Endless Possibilities with{" "}
                            <Text className="text-secondary-200">Aora</Text>
                        </Text>
                    </View>
                    <Text className="text-sm font-pregular text-center mt-7 text-gray-100">
                        Where creativity meets innovation: embark on a journey of limitless exploration with Aora
                    </Text>
                    <CustomButton
                        title="Continue with Email"
                        handlePress={() => router.push('/sign-in')}
                        containerStyles="w-full mt-7"
                    />
                </View>
            </ScrollView>
            <StatusBar backgroundColor='#161622' style="light"/>
        </SafeAreaView>
    );
}

