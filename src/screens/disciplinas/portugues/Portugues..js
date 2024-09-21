import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export function Portugues() {
    const { navigate } = useNavigation()
    const navegar = (title) => {
        navigate(`${title}`)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ top: 1 }} onPress={() => navegar('Home')}><Text>Voltar</Text></TouchableOpacity>
            <Text>portugues</Text>
        </View>
    );
}