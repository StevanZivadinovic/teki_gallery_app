import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { auth } from './../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'expo-router';

 function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const router = useRouter();
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Uspešno ste se ulogovali!');
       router.replace('/(protected)/Home'); // ili tvoja glavna stranica
    } catch (error: any) {
      Alert.alert('Greška', error.message);
    }
  };

  return (
    <View className="flex-1 bg-neutral-900 px-6 justify-center">
      <Text className="text-white text-3xl font-bold text-center mb-6">Prijava</Text>

      <TextInput
        className="bg-neutral-800 text-white p-4 rounded-xl mb-4"
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        className="bg-neutral-800 text-white p-4 rounded-xl mb-6"
        placeholder="Lozinka"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Pressable onPress={handleLogin} className="bg-orange-500 rounded-xl p-4">
        <Text className="text-center text-white font-bold text-lg">Uloguj se</Text>
      </Pressable>

      <Pressable onPress={() => router.push('/SignIn')} className="mt-4">
        <Text className="text-orange-400 text-center">Nemate nalog? Registrujte se</Text>
      </Pressable>
    </View>
  );
}


export default LoginScreen;