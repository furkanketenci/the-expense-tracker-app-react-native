import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  // const colorScheme = useColorScheme();

  return (
    <View style={styles.centered}>
      <Text>TabLayout</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
})