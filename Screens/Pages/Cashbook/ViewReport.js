import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import metrics from '../../../Constants/metrics';
import { Calendar, CalendarList } from 'react-native-calendars';
import CashIn from '../../../Components/Cash/CashIn';
import CashOut from '../../../Components/Cash/CashOut';

const ViewReport = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectDate, setSelectDate] = useState("Hii");
    return (
        <>
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.cardBody}>
                        <View style={styles.boxOne}>
                            <Text style={{ fontSize: 24, color: '#1790FF', fontWeight: 'bold', fontFamily: 'Roboto' }}>₹ 0</Text>
                            <Text style={{ color: '#828282', fontSize: 14, fontWeight: '700', fontFamily: 'Roboto' }}>Cash In Hand</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={{ fontSize: 24, color: '#12CE12', fontWeight: 'bold', fontFamily: 'Roboto' }}>₹ 0</Text>
                            <Text style={{ color: '#828282', fontSize: 14, fontWeight: '700', fontFamily: 'Roboto' }}>Today's Income</Text>
                        </View>
                    </View>
                </View>

                <View>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, marginBottom: 10 }}>
                        <Text style={{ color: '#20409A', fontSize: 20, fontWeight: '600' }}>Transaction History</Text>
                        <View style={{
                            flexDirection: 'row', width: '50%',
                        }}>
                            <TextInput
                                placeholder='Search'
                                placeholderTextColor={"#333"}
                                style={{ width: '100%', position: 'relative', paddingLeft: metrics.horizontalScale(20), paddingVertical: metrics.verticalScale(10) }}
                            />
                            <TouchableOpacity style={{ position: 'absolute', right: 10, alignSelf: 'center' }}>
                                <Icon name="search" color={'#333'} size={24} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginBottom: metrics.verticalScale(20), borderBottomWidth: 1.5, borderBottomColor: "#828282", paddingVertical: metrics.verticalScale(20), flexDirection: 'row', justifyContent: 'space-between' }} >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: '50%', borderRightColor: '#828282', borderRightWidth: 1 }}>
                            <TouchableOpacity onPress={() => setShowModal(true)}>
                                <Icon name='calendar' size={22} color={'#20409A'} />
                            </TouchableOpacity>
                            <View>
                                <Text style={{ color: '#20409A', }}>From Date</Text>
                                <Text style={{ color: '#20409A', fontSize: 16, fontWeight: '700' }}>{selectDate}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '50%', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => setShowModal(true)}>
                                <Icon name='calendar' size={22} color={'#349EFF'} />
                            </TouchableOpacity>
                            <View>
                                <Text style={{ color: '#349EFF' }}>To Date</Text>
                                <Text style={{ color: '#349EFF', fontSize: 16, fontWeight: '700' }}>01 Apr 2022</Text>
                            </View>
                        </View>
                    </View>
                    <CashOut />
                    <CashIn />
                </View>
                <TouchableOpacity style={{ width: '100%', paddingVertical: 15, borderRadius: 50, borderWidth: 2, borderColor: '#349EFF', backgroundColor: '#349EFF', position: 'absolute', bottom: 20, marginHorizontal: metrics.horizontalScale(20) }}>
                    <Text style={{ color: '#fff', textAlign: 'center', fontSize: 18, fontWeight: '600', }}>Back</Text>
                </TouchableOpacity>

                <Modal visible={showModal} transparent
                    animationType="fade" >
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                        backgroundColor: '#000000aa',
                    }}>
                        <Calendar style={{ borderRadius: 10, width: '100%'}}
                            onDayPress={(date) => {
                                console.log(date)
                                setSelectDate()
                                setShowModal(false)
                            }}
                            enableSwipeMonths={true}
                        />
                    </View>
                </Modal>
                {/* <Text style={{color:"#333"}}>Hii</Text> */}
            </View>
        </>
    )
}

export default ViewReport;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: metrics.horizontalScale(20),
        backgroundColor: '#E8EEFF',
        paddingVertical: metrics.verticalScale(15),
        position: 'relative',
        flex: 1
    },
    card: {
        width: '100%',
        backgroundColor: '#fff',
        paddingVertical: metrics.verticalScale(10),
        borderRadius: 6,
    },
    cardBody: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxOne: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        paddingVertical: metrics.verticalScale(15),
        borderRightWidth: 2,
        borderColor: '#ccc'

    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: metrics.horizontalScale(40),
        paddingVertical: metrics.verticalScale(15),
        // backgroundColor: '#ccc'

    },
    cardBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'dodgerblue',
        paddingVertical: metrics.verticalScale(6),
        borderRadius: 10,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
    },
});