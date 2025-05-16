import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../firebaseConfig';
import { useRouter } from 'expo-router';
import Loading from '@/components/Loading';

 function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)
  const router = useRouter();

  const handleSignUp = async () => {
    setLoading(true)
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Uspešno ste se registrovali!');
        router.replace('/(protected)/Settings');
   
      setLoading(false)
    } catch (error: any) {
      Alert.alert('Greška', error.message);
      setLoading(false)
    }
  };

    if (loading) {
    return <Loading />;
  }

  return (
    <View className="flex-1 bg-neutral-900 px-6 justify-center">
      <Text className="text-white text-3xl font-bold text-center mb-6">Registracija</Text>

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

      <Pressable onPress={handleSignUp} className="bg-orange-500 rounded-xl p-4">
        <Text className="text-center text-white font-bold text-lg">Registruj se</Text>
      </Pressable>

      <Pressable onPress={() => router.back()} className="mt-4">
        <Text className="text-orange-400 text-center">Već imate nalog? Prijavite se</Text>
      </Pressable>
    </View>
  );
}


export default SignUpScreen;