import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

const LoadingState = () => {
  return (
    <View style={styles.loaderView}>
                <Text style={[styles.homeSubTitle, {fontWeight: '700'}]}>
                  Loading App Data...
                </Text>
                <ActivityIndicator color={'#FFF'} />
              </View>
  )
}

export default LoadingState

const styles = StyleSheet.create({
     loaderView: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
   homeSubTitle: {
    fontSize: 14,
    fontWeight: 'regular',
    color: '#fff',
    fontStyle: 'italic',
  },
})