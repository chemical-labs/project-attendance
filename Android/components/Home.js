import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import Modal from 'react-native-modal'
import Icons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

export default class Tab extends Component{
    render(){
        let Tabs = createBottomTabNavigator()
        return(
            <Tabs.Navigator screenOptions={({ route }) => ({
               tabBarStyle: {
                    backgroundColor: 'white',
                    elevation: 0,
                    width: 300,
                    marginLeft: 25,
                    marginRight: 25,
                    borderRadius: 20,
                    marginBottom: 25,
                    position: 'absolute'
                },

            })}>
                <Tabs.Screen name="Index" component={Index} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (
                    <Icons name='home-outline' size={30} color={"black"} />
                ) }} />
                <Tabs.Screen name="Settings" component={Settings} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (
                    <Icons name='cog-outline' size={30} color={"black"} />
                ) }} />
            </Tabs.Navigator>
        )
    }
}

class Settings extends Component{
    render(){
        return(
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#191A19' }}>
                <StatusBar barStyle={"light-content"} backgroundColor={"#191A19"} />
                
            </View>
        )
    }
}

class Index extends Component{
    render(){
        return(
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#191A19' }}>
                <StatusBar barStyle={"light-content"} backgroundColor={"#191A19"} />
                
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', marginTop: 25, marginLeft: 20 }}>
                        <TouchableOpacity>
                            <Image source={{ uri: "https://66.media.tumblr.com/47998268dff640c66e36e73c82a21b7b/tumblr_pwdyhlqrAo1qfzymao1_1280.jpg" }} style={{ width: 50, height: 50, borderRadius: 100, borderWidth: 2, borderColor: 'white' }} />
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                            <Text style={{ color: 'white', fontSize: 16 }}>Wellcome Back</Text>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Fajar Firdaus</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'column', marginRight: 30, marginTop: 30 }}>
                        <TouchableOpacity>
                            <Icons name="notifications-outline" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginTop: 35, marginLeft: 15 }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>What lesson would you</Text>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>like to learn today ?</Text>
                </View>
            </View>
        )
    }
}
