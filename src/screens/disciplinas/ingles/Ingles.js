import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export function Ingles() {
  const { navigate } = useNavigation()
  const navegar = (title) => {
    navigate(`${title}`)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ top: 1 }} onPress={() => navegar('Home')}><Text>Voltar</Text></TouchableOpacity>
    </View>
  );
}