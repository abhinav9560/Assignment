import axios from "axios";
import React, { useEffect, useState } from "react";
import { SectionList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DATA = [
    {
        title: "Main dishes",
        data: [
            {
                id: 'sdcdc',
                start: '14:00',
                ends: '16:00',
                city: 'Helsinki'
            },
        ]
    },
    {
        title: "Sides",
        data: [
            {
                id: 'sdcdc',
                start: '14:00',
                ends: '16:00',
                city: 'Helsinki'
            },
        ]
    },
    {
        title: "Drinks",
        data: [
            {
                id: 'sdcdc',
                start: '14:00',
                ends: '16:00',
                city: 'Helsinki'
            },
            {
                id: 'sdcdc',
                start: '14:00',
                ends: '16:00',
                city: 'Helsinki'
            },
        ]
    },
    {
        title: "Desserts",
        data: [
            {
                id: 'sdcdc',
                start: '14:00',
                ends: '16:00',
                city: 'Helsinki'
            },
        ]
    }
];
export default function MyShifts() {
    const [sifts, setShifts] = useState([])

    useEffect(() => {
        getShifts()
    }, [])

    const getShifts = () => {
        axios.get('http://127.0.0.1:8080/shifts').then(res => {
            // filterData(res?.data)
            const segregatedData = res?.data.filter((item) => {
                return item?.startTime == res?.data[0]?.startTime
            })
            console.log(segregatedData);
            setShifts([])
        }).catch(err => {
            console.log(err);
        })
    }

    const filterData = () => {

    }
    const renderItem = ({ item }) => {
        return (
            <View style={styles?.itemContainer}>
                <View>
                    <Text style={{
                        color: '#4F6C92',
                        marginBottom:2,
                        fontSize:14,
                        fontWeight:'500'
                    }}>{item?.start} - {item?.ends}</Text>
                    <Text style={{
                        color: '#A4B8D3',
                        fontSize:16,
                    }}>{item?.city}</Text>
                </View>
                <TouchableOpacity style={[styles.button]}>
                    <Text style={{
                        fontWeight: 'bold',
                        color: '#E2006A'
                    }}>Cancel</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const renderHeader = () => {
        return (
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Today </Text>
                <Text style={{
                    color: '#A4B8D3'
                }}>2 shifts, 4 h</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
            <SectionList
                sections={DATA}
                renderItem={renderItem}
                style={{
                    // paddingHorizontal: 15
                }}
                ItemSeparatorComponent={() => <View style={styles.seperator} />}
                renderSectionHeader={renderHeader}
                SectionSeparatorComponent={() => <View style={styles.seperator} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#E2006A'
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 15,
        alignItems:'center'
    },
    seperator: {
        borderBottomWidth: 1,
        borderColor: '#CBD2E1'
    },
    titleContainer: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#F1F4F8',
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        color: '#4F6C92',
        fontSize:16
    }
})