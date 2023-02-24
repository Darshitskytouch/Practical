import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Facorite from '../assets/images/favorite.svg'
import Facorite2 from '../assets/images/favorite_selected.svg'
import Location from '../assets/images/location.svg'
import Watch from '../assets/images/watch.svg'


const Populer = ({ item, onUpdate }) => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={item.image} style={{ borderRadius: 15 }} />
                <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10, }} onPress={() => onUpdate()} >
                    {item.favorite ? <Facorite2 /> : <Facorite />}
                </TouchableOpacity>
            </View>
            <View style={{ width: '67%', paddingHorizontal: 10 }}>
                <View style={styles.row}>
                    <Text style={styles.bigtext}>{item.title}</Text>
                    <View>
                        <Text style={styles.bluetext}>$25</Text>
                        <Text style={styles.smalltext}>/ day</Text>
                    </View>
                </View>
                <Text style={[styles.text, { fontSize: 14, marginBottom: 5 }]}>Gym "Seven "</Text>
                <View style={styles.row2}>
                    <Location height={15} />
                    <Text style={styles.text}>{item.location}</Text>
                </View>
                <View style={styles.row2}>
                    <Watch height={15} />
                    <Text style={styles.text}>{item.time}</Text>
                </View>
            </View>
        </View>
    )
}

export default Populer

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: 124,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        flexDirection: 'row',
        marginBottom: 15
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        width: "100%"
    },
    row2: {
        flexDirection: 'row',
        marginTop: 5,
        width: "100%",
        alignItems: 'center'
    },
    bigtext: {
        fontSize: 16,
        color: '#000',
        fontWeight: '500'
    },
    smalltext: {
        fontSize: 11,
        color: '#000',
    },
    text: {
        fontSize: 12,
        color: '#000',
    },
    bluetext: {
        fontSize: 13,
        color: 'skyblue',
    }
})