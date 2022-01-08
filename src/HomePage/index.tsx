import { createClient, SupabaseClient } from '@supabase/supabase-js';
import React, { useEffect } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTYxMzU2NCwiZXhwIjoxOTU3MTg5NTY0fQ.OEOyYPRi_kXH1hwyMvbysGoQRNpuqSXZaHfuX4cRdwU"
const supabaseURL = "https://funshmuvixwrnxzlxtcb.supabase.co"
const supabase: SupabaseClient = createClient(supabaseURL, anonKey, {
  localStorage: AsyncStorage,
  detectSessionInUrl: false
})

export const HomePage = () => {

  const connect = async () => {
    supabase.getSubscriptions()
    const { data, error } = await supabase.from("pages").select()
    if (error) console.error(error)
    console.log(data)
  }

  useEffect(() => {
    connect()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mundo de Notas</Text>
      <Text>1- Escolha um bloco de notas</Text>
      <Text>2- Escreva</Text>
      <Text>3- Compartilhe</Text>
      <TextInput placeholder="URL" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 16,
    textAlign: "center",

  }
})
