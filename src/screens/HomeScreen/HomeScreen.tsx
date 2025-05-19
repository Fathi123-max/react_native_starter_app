import Header from '@/src/componant/Header/Header'
import MainNews from '@/src/componant/MainNews/MainNews'
import React from 'react'
import { SafeAreaView, View } from 'react-native'


const HomeScreen= ()=>  {
  return (
    <SafeAreaView>
      <View>
        <Header/>
        <MainNews/>
      </View>
    </SafeAreaView>
    
  )
}



export default HomeScreen