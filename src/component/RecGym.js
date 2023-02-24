import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Facorite from '../assets/images/favorite.svg'
import Facorite2 from '../assets/images/favorite_selected.svg'


const RecGym = ({ item, onUpdate }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/map.png')} style={{ width: '100%', borderRadius: 15 }} />
            <Image source={item.image} style={{ width: '100%', position: 'absolute', top: 60 }} />
            <TouchableOpacity style={{ position: 'absolute', top: 75, right: 10, }} onPress={() => onUpdate()} >
                {item.favorite ? <Facorite2 /> : <Facorite />}
            </TouchableOpacity>
            <View style={styles.row}>
                <Text style={styles.bigtext}>{item.title}</Text>
                <View>
                    <Text style={styles.bluetext}>${item.price}</Text>
                    <Text style={styles.smalltext}>/ day</Text>
                </View>
            </View>
            <View style={styles.row}>
                <Text style={[styles.text, { fontSize: 14 }]}>{item.rating}</Text>
                <Text style={styles.text}>{item.date}</Text>
            </View>
        </View>
    )
}

export default RecGym

const styles = StyleSheet.create({
    container: {
        height: 280,
        width: 210,
        borderRadius: 15,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        marginLeft: 15,
        marginBottom: 5
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 10
    },
    bigtext: {
        fontSize: 16,
        color: '#000',
        fontWeight: '500'
    },
    smalltext: {
        fontSize: 10,
        color: '#000',
    },
    text: {
        fontSize: 11,
        color: '#000',
    },
    bluetext: {
        fontSize: 12,
        color: 'skyblue',
    }
})