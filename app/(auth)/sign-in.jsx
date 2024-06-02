import React, {useState} from 'react';
import {Image, Platform, ScrollView, Text, TextInput, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {images} from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import {Link} from "expo-router";
import axios from "axios";


const SignIn = () => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    async function submit() {
        try {
            const {data} = await axios.post(
                "http://aoria-api.test/api/login",
                {
                    email: form.email,
                    password: form.password,
                    device_name: `${Platform.OS} ${Platform.Version}`
                },
                {
                    headers: {
                        Accept: "application/json"
                    }
                }
            )
            console.log("res", data)
        } catch (e) {
            console.log(e.request)
        }
    }

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className="w-full justify-center h-full px-4 my-6">
                    <Image source={images.logo} resizeMode='contain' className="w-[115px] h-[35px]"/>
                    <Text className="text-white text-2xl mt-10 font-psemibold">Log in to Aora</Text>
                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => setForm({...form, email: e})}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({...form, password: e})}
                        otherStyles="mt-7"
                    />
                    <CustomButton
                        containerStyles="mt-7"
                        title="Sign In"
                        handlePress={submit}
                    />
                    <View className="pt-5 justify-center flex-row gap-2">
                        <Text className="text-lg font-pregular text-gray-100">Don’t have an account?</Text>
                        <Link className="text-lg font-psemibold text-secondary-200" href="/sign-up">Signup</Link>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    );
};

export default SignIn;