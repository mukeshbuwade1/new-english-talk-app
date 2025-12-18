// app/(app)/_layout.tsx
import { Stack } from 'expo-router';
import React, { useEffect } from 'react';

export default function AppLayout() {
     useEffect(() => {
      }, []);
  return (
   <Stack
   screenOptions={{
    headerShown:false,
    headerBackTitle:"Back" //check it
   }}
   >
    <Stack.Screen name="index" options={{ title:"Home" }} />
    <Stack.Screen name="call" options={{ title:"Call" }} />
   </Stack>
  )
}