import { React, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import Player from '../../../components/Player';

export function Portugues() {
    const { navigate } = useNavigation()
    const navegar = (title) => {
        navigate(`${title}`)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{
                marginBottom: 50
            }}
                onPress={() => navegar('Home')}><Text style={{ fontSize: 30, position: 'absolute', top: 20, left: 1 }}>Voltar</Text></TouchableOpacity>
            <View>
                <View style={styles.playersArea}>
                    <Player idVideo="9tW83jfWX7U" />
                </View>
            </View>
        </View>
    );
}