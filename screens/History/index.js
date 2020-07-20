import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const History = ({ navigation, route }) => {

    const { history } = route.params;
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image resizeMode="contain" style={styles.image} source={{ uri: item.userChoice }} />
            <Text style={[styles.text, { color: item.color }]}>{item.result}</Text>
            <Image resizeMode="contain" style={styles.image} source={{ uri: item.computerChoice }} />
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.title}>{"<"}</Text>
                </TouchableOpacity>
                <Text style={[styles.title, { alignSelf: "center" }]}>History</Text>
                <TouchableOpacity>
                    <Text style={styles.title}></Text>
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
                <Text style={[styles.title, { alignSelf: "center" }]}>Player</Text>
                <Text style={[styles.title, { alignSelf: "center" }]}>Computer</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={history}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default History;