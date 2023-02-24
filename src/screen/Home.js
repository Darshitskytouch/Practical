import { StyleSheet, Text, View, ScrollView,TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Dumbbell from '../assets/images/dumbbell.svg'
import Search from '../assets/images/search.svg'
import Map from '../assets/images/map.svg'

import Aerobics from '../assets/images/aerobics.svg'
import Box from '../assets/images/box.svg'
import Child from '../assets/images/children_selection.svg'
import Dance from '../assets/images/dances.svg'
import Gym from '../assets/images/gym.svg'
import Run from '../assets/images/run.svg'
import Swim from '../assets/images/swimming.svg'
import Yoga from '../assets/images/yoga.svg'
import Wre from '../assets/images/wrestling.svg'


import RecGym from '../component/RecGym'
import Populer from '../component/Populer'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = () => {

    const data = {
        "gyms": [
            {
                "id": 1,
                "title": "Gym Rebel",
                "rating": 5.5,
                "price": 250,
                "favorite": false,
                "date": "02 Aug - 25 Aug, 2020",
                "image": require('../assets/gym/gym_rebel.png'),
                "popular_clasess": [
                    {
                        "title": "Fitness Class",
                        "price": 350,
                        "favorite": false,
                        "location": "London, Spring st. 8",
                        "time": "1h 25min",
                        "image": require('../assets/class/fitness_class.png'),
                    }, {
                        "title": "Fitness with some friends",
                        "price": 250,
                        "favorite": false,
                        "location": "London, Spring st. 8",
                        "time": "45min",
                        "image": require('../assets/class/fitness_with_some_friends.png'),
                    }, {
                        "title": "Yoga Class",
                        "price": 150,
                        "favorite": false,
                        "location": "London, Wellness st. 23",
                        "time": "25min",
                        "image": require('../assets/class/yoga_class.png'),
                    }, {
                        "title": "Crossfit Class",
                        "price": 200,
                        "favorite": false,
                        "location": "London,Villers st. 1",
                        "time": "1h 30min",
                        "image": require('../assets/class/crossfit_class.png'),
                    }
                ]
            }, {
                "id": 2,
                "title": "Gym NonStop",
                "rating": 3.5,
                "price": 500,
                "favorite": false,
                "date": "01 Aug - 30 Aug, 2020",
                "image": require('../assets/gym/gym_non_stop.png'),
                "popular_clasess": [
                    {
                        "title": "Fitness Class",
                        "price": 350,
                        "favorite": false,
                        "location": "London, Spring st. 8",
                        "time": "1h 25min",
                        "image": require('../assets/class/fitness_class.png'),
                    }, {
                        "title": "Fitness with some friends",
                        "price": 250,
                        "favorite": false,
                        "location": "London, Spring st. 8",
                        "time": "45min",
                        "image": require('../assets/class/fitness_with_some_friends.png'),
                    }, {
                        "title": "Yoga Class",
                        "price": 150,
                        "favorite": false,
                        "location": "London, Wellness st. 23",
                        "time": "25min",
                        "image": require('../assets/class/yoga_class.png'),
                    }
                ]
            }, {
                "id": 3,
                "title": "Gym Gym",
                "rating": 1.5,
                "price": 150,
                "favorite": false,
                "date": "05 Aug - 16 Aug, 2020",
                "image": require('../assets/gym/gym_rebel.png'),
                "popular_clasess": []
            }
        ]
    }

    const popular_data = [
        {
            id: 1,
            'comonent': <Aerobics height={50} width={50} />
        },
        {
            id: 2,
            'comonent': <Box height={50} width={50} />
        },
        {
            id: 3,
            'comonent': <Child height={50} width={50} />
        },
        {
            id: 4,
            'comonent': <Dance height={50} width={50} />
        },
        {
            id: 5,
            'comonent': <Gym height={50} width={50} />
        },
        {
            id: 6,
            'comonent': <Run height={50} width={50} />
        },
        {
            id: 7,
            'comonent': <Swim height={50} width={50} />
        },
        {
            id: 8,
            'comonent': <Yoga height={50} width={50} />
        },
        {
            id: 9,
            'comonent': <Wre height={50} width={50} />
        },
    ]

    const [alldata, setAlldata] = useState(data)

    useEffect(() => {
        GetData()
    }, [])

    const SetData = async () => {
        await AsyncStorage.setItem('Data', JSON.stringify(alldata))
    }

    const GetData = async () => {
        let res = await AsyncStorage.getItem('Data')
        if (res) {
            setAlldata(JSON.parse(res))
        }
        else {
            console.log('error', res);
        }
    }

    const onUpdate = async (index) => {
        console.log('111111', index);
        const newArray = [...alldata.gyms];
        newArray[index].favorite = !newArray[index].favorite;
        setAlldata({ "gyms": newArray })
        await AsyncStorage.setItem('Data', JSON.stringify({ "gyms": newArray }))
    }

    const onUpdate2 = async (index, index1) => {
        console.log('111111', index);
        const newArray = [...alldata.gyms];
        newArray[index].popular_clasess[index1].favorite = !newArray[index].popular_clasess[index1].favorite;
        setAlldata({ "gyms": newArray })
        await AsyncStorage.setItem('Data', JSON.stringify({ "gyms": newArray }))
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.headercontainer}>
                <Dumbbell height={25} width={25} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Map height={25} width={25} />
                    <Search height={25} width={25} style={{ marginHorizontal: 25 }} />
                    <View style={{ height: 25, width: 25, borderRadius: 15, backgroundColor: 'yellow' }}>

                    </View>
                </View>
            </View>
            <View style={{ paddingHorizontal: 15, marginVertical: 10 }}>
                <Text style={styles.header}>Recommended Gyms</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    alldata.gyms.map((item, index) => {
                        return <RecGym item={item} onUpdate={() => onUpdate(index)} />
                    })
                }
            </ScrollView>
            <View style={{ paddingHorizontal: 15, marginVertical: 10 }}>
                <Text style={styles.header}>Populer Classes</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginLeft: 15, marginBottom: 15 }}>
                {
                    popular_data.map((item,index) => {
                        return <TouchableOpacity style={[styles.circle,{backgroundColor:index % 2 == 0 ?'#ffffff':'#3363b0'}]}>
                            {item.comonent}
                        </TouchableOpacity>
                    })
                }
            </ScrollView>
            <View style={{ paddingHorizontal: 15 }}>
                {
                    alldata.gyms.map((item, index) => {
                        return item.popular_clasess.map((item, index1) => {
                            return <Populer item={item} onUpdate={() => onUpdate2(index, index1)} />
                        })
                    })
                }
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebf2fc'
    },
    headercontainer: {
        backgroundColor: '#3363b0',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
    },
    header: {
        fontSize: 24,
        fontWeight: '700',
        color: '#000000'
    },
    circle: {
        height: 70,
        width: 70,
        marginRight: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white'
    }
})