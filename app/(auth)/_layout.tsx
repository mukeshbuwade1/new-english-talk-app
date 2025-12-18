// app/(auth)/_layout.tsx
import { Stack } from 'expo-router';
import React, { useEffect } from 'react';

const AuthLayout = () => {
     useEffect(() => {
          }, []);
  return (
   <Stack
   screenOptions={{
    headerShown:false,
    gestureEnabled:false // check  it
   }}>
    <Stack.Screen name="onboarding"  />

   </Stack>
  )
}

export default AuthLayout
