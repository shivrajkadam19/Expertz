import React from 'react'
import ImageCarousel from '../../components/ImageCarousel'
import HeaderSearchComponent from '../../components/HeaderSearchComponent'
import { Text, View, Button, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import Title from '../../components/Title'
const HomeScreen = ({navigation}) => {

    return (
        <ScrollView>
            <HeaderSearchComponent />
            <ImageCarousel />
            <View style={{ paddingLeft: 20 }}>
                <Title variant={"titleLarge"} >
                    Our Services
                </Title>
            </View>

        </ScrollView>
    )
}

export default HomeScreen
