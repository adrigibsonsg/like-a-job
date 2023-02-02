import React, {useLayoutEffect} from 'react';

import {Button, Text, View,ImageBackground,TouchableOpacity} from 'react-native';
import useAuth from "../hooks/useAuth";
import {useTailwind} from 'tailwind-rn';
import {useNavigation} from "@react-navigation/core";

const LoginScreen = () => {
    const {signInWithGoogle, loading} = useAuth();
    const navigation = useNavigation();
    const tw = useTailwind();

    return (
        <View style={tw("flex-1")}>
            <ImageBackground
                resizeMode="cover"
                style={tw("flex-1")}
                source={require("../src/bgf.png")}
            >
                <TouchableOpacity
                 style={[tw("absolute bottom-60 w-52 bg-blue-300 p-4 rounded-2xl"),
                    { marginHorizontal: "25%" }]}
                    onPress={signInWithGoogle} >
                    <Text style={tw("font-semibold text-center")} >Sign In and find a Job!</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
};

export default LoginScreen;
