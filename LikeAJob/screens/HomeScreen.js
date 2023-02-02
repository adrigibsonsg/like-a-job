import React, {useLayoutEffect} from 'react';

import {Button, Text, View, SafeAreaView,TouchableOpacity, Image} from 'react-native';
import {useNavigation} from "@react-navigation/core";
import useAuth from "../hooks/useAuth";
import {useTailwind} from 'tailwind-rn';



const HomeScreen = () => {
    const {user,logout} = useAuth();
    const navigation = useNavigation();
    const tw = useTailwind();

    console.log(user);
    return (
        <SafeAreaView>
            {/*header*/}
            <View>
                <TouchableOpacity style={tw("absolute left-5 top-3")}>
                    <Image
                        style={tw("h-10 w-10 rounded-full")}
                        source={{uri: user.photoURL}} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style ={tw("h-11 w-11 ")}   source={require("../src/logo.png")}></Image>
                </TouchableOpacity>
            </View>
            {/*header end*/}
            {/*<Text> HomeScreen </Text>*/}
            {/*<Button title="Go to Chat Screen" onPress={() => navigation.navigate('Chat')} />*/}
            {/*<Button title="Logout" onPress={logout} />*/}
        </SafeAreaView>
    );
};

export default HomeScreen;
