import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export function Geografia() {
    const { navigate } = useNavigation()
    const navegar = (title) => {
        navigate(`${title}`)
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { navigate('Geografia') }}><Text>Voltar</Text></TouchableOpacity>
        </View>
    );
}