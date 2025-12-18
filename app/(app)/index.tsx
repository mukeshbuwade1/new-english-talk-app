import RenderComp from '@/components/home/RenderComp'
import { ImageBackground } from 'expo-image'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const Home = () => {
  return (
     <ImageBackground source={require("../../assets/images/home/home.webp")} style={{flex: 1}}>
      <View style={styles.container}>
        {/* {loading ? (
          <LoadingState/>
        ) : ( */}
         <RenderComp/>
        {/* )} */}
      </View>
    </ImageBackground>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
 
});