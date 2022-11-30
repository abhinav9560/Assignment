import React, { useEffect, useState } from "react";
import {
    FlatList,
    SafeAreaView, SectionList,
    StyleSheet, Text, TouchableOpacity,
    ActivityIndicator,
    View
} from "react-native";


const DATA = [
    {
        id: 'scds',
        city: 'Helsinki',
        shifts: 4
    },
    {
        id: 'scads',
        city: 'Turku',
        shifts: 5
    },
    {
        id: 'scdacds',
        city: 'Tampere',
        shifts: 9
    },
]


const DATA1 = [
    {
        title: "Today",
        data: [
            {
                id: 'y64h4',
                start: '14:00',
                ends: '16:00',
                city: 'Helsinki',
                status: 0
            },
            {
                id: 'sd657j6cdc',
                start: '14:00',
                ends: '16:00',
                city: 'Helsinki',
                status: 1
            },
        ]
    },
    {
        title: "November 20",
        data: [
            {
                id: 'br',
                start: '14:00',
                ends: '16:00',
                city: 'Helsinki',
                status: 1
            },
        ]
    },
    {
        title: "November 2",
        data: [
            {
                id: 'sddcdc',
                start: '14:00',
                ends: '16:00',
                city: 'Helsinki',
                status: 0
            },
        ]
    },
    {
        title: "October 31",
        data: [
            {
                id: 'fvrvr',
                start: '14:00',
                ends: '16:00',
                city: 'Helsinki',
                status: 0
            },
        ]
    }
];
export default function AvailableShifts() {
    const [selectedFilter, setSelectedFilter] = useState('scds')
    const [loader, setLoader] = useState('')
    
    const setBooking = (item) => {
        setLoader(item?.id)
        setTimeout(() => {
            setLoader('')
            item.staus = 1
        },1000)
    }
    const setCancle = (item) => {
        setLoader(item?.id)
        setTimeout(() => {
            setLoader('')
            item.status = 0
        },1000)
    }
    const renderFilter = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => setSelectedFilter(item?.id)}
                style={styles.filterContainer}>
                <Text style={[styles.title, selectedFilter == item?.id && {
                    color: '#004FB4'
                }]}>
                    {item?.city}
                    ({item?.shifts})
                </Text>
            </TouchableOpacity>
        )
    }
    const renderItem = ({ item }) => {
        return (
            <View style={styles?.itemContainer}>
                <Text style={{
                    color: '#4F6C92',
                    marginBottom: 2,
                    fontSize: 14,
                    fontWeight: '500'
                }}>{item?.start} - {item?.ends}</Text>
                <Text style={styles.sectionTitle}>
                    Booked
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        item?.status ?
                            setCancle(item) :
                            setBooking(item)
                    }}
                    style={[styles.button, !item?.status && {
                        borderColor: '#16A64D'
                    }]}>
                    {(loader !== item?.id) && <Text style={{
                        fontWeight: 'bold',
                        color: item?.status ? '#E2006A' : '#16A64D'
                    }}>{item?.status ? "Cancel" : "Book"}</Text>}
                    {loader == item?.id &&
                        <ActivityIndicator
                            color={item?.status  ? '#E2006A' : '#16A64D'}
                        />}
                </TouchableOpacity>
            </View>
        )
    }
    const renderHeader = ({section:item}) => {
        
        return (
            <View style={styles.sectionTitleContainer}>
                <Text style={styles.sectionTitle}>{item?.title}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
            <View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={DATA}
                    renderItem={renderFilter}
                    style={{
                        borderWidth: 1,
                        borderColor: '#CBD2E1'
                    }}
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: 'space-between',
                        paddingHorizontal: 10,
                        paddingVertical: 10
                    }}
                />
            </View>
            <SectionList
                sections={DATA1}
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
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#E2006A',
        width: 100
    },
    title: {
        fontSize: 16,
        width: 100,
        textAlign: 'center',
        fontWeight: '600',
        color: '#A4B8D3'
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    seperator: {
        borderBottomWidth: 1,
        borderColor: '#CBD2E1'
    },
    filterContainer: {
        paddingVertical: 10
    },
    sectionTitle: {
        fontWeight: 'bold',
        color: '#4F6C92',
        fontSize: 16
    },
    sectionTitleContainer: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#F1F4F8',
        flexDirection: 'row',
        alignItems: 'center'
    }
})