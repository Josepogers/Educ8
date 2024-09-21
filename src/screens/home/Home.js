import React from 'react';
import { Image, View, Text, TouchableOpacity, SafeAreaView, StyleSheet, FlatList, StatusBar, Alert } from 'react-native';
import { styles } from './style.js'
import { useNavigation } from '@react-navigation/native';
const Icon = require('../../assets/images.png')
// import { Header } from './src/components/Header';
// import { Modal } from './src/components/Modal';
const Header = () => {
    return (
        <View>
            <Text style={styles.header}>Educ8</Text>
        </View>
    )
}
const Home = () => {
    const { navigate } = useNavigation()
    /*Agora é concatenar na string que vai como paramentro do navigate, inserindo o titulo do item do botao clicado
    */
    const navegar = (title) => {
        navigate(`${title}`)
    }

    const Materias = [
        {
            title: 'Portugues',
            icon: Icon,

        },
        {
            title: 'Matematica',
            icon: Icon,
        },
        {
            title: 'Fisica',
            icon: Icon,
        },
        {
            title: 'Ingles',
            icon: Icon,
        },
        {
            title: 'Historia',
            icon: Icon,
        },
        {
            title: 'Geografia',
            icon: Icon,
        }, {
            title: 'Biologia',
            icon: Icon,
        },
        {
            title: 'Quimica',
            icon: Icon,
        }, {
            title: 'Redacao',
            icon: Icon,
        }, {
            title: 'Filosofia',
            icon: Icon,
        },
    ];

    const Item = ({ title, icon, butao }) => (
        <View style={styles.item}>
            <Image source={icon} style={styles.icon} />
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={() => navegar(`${title}`)}><Text style={styles.b_estudar}>Estudar </Text></TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 30 }}>
                <FlatList
                    ListHeaderComponent={Header}
                    data={Materias}
                    renderItem={({ item }) => <Item icon={item.icon} title={item.title} />}
                    keyExtractor={item => item.title}

                />
            </View>
            {/* <Modal /> */}
        </SafeAreaView>
    )
}

export default Home;