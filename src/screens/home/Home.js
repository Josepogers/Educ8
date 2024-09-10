import React from 'react';
import { Image, View, Text, TouchableOpacity, SafeAreaView, StyleSheet, FlatList, StatusBar, Alert } from 'react-native';
import { styles } from './style.js'
const Icon = require('../../assets/images.png')
// import { Header } from './src/components/Header';
// import { Modal } from './src/components/Modal';
const Materias = [
    {
        title: 'Português',
        icon: Icon,
        butao: <TouchableOpacity><Text>botao</Text></TouchableOpacity>
    },
    {
        title: 'Matemática',
        icon: Icon,
    },
    {
        title: 'Física',
        icon: Icon,
    },
    {
        title: 'Inglês',
        icon: Icon,
    },
    {
        title: 'História',
        icon: Icon,
    },
    {
        title: 'Geográfia',
        icon: Icon,
    }, {
        title: 'Biologia',
        icon: Icon,
    },
    {
        title: 'Quimica',
        icon: Icon,
    }, {
        title: 'Redação',
        icon: Icon,
    }, {
        title: 'Filosófia',
        icon: Icon,
    },
];/*
Agora é concatenar na string que vai como paramentro do navigate, inserindo o titulo do item do botao clicado
*/
const navegar = (title) => {
    console.log(`navegando pra tela ${title}`)
}
const handlePress = (title) => {
    Alert.alert(`Estudando ${title}`)
};
const Item = ({ title, icon, butao }) => (
    <View style={styles.item}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={() => navegar(title)}><Text style={styles.b_estudar}>Estudar </Text></TouchableOpacity>
    </View>
);

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 30 }}>
                <FlatList
                    data={Materias}
                    renderItem={({ item }) => <Item icon={item.icon} title={item.title} />}
                    keyExtractor={item => item.title}
                />
            </View>
            {/* <Modal /> */}
        </SafeAreaView>
    );
};

export default Home;