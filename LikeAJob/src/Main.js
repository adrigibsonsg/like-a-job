import {View, Text, Button} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {StatusBar} from 'expo-status-bar';

export default function Main() {
    const tw = useTailwind();
    return (
        <View style={tw('flex-1 justify-center items-center')}>
            <Text>Reconquista!</Text>
            <Button title="Click me!" />
            <StatusBar style="auto" />
        </View>
    );
}