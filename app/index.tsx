// app/index.tsx
import { Redirect } from 'expo-router';
import './../tailwind.css';

export default function Index() {
  return <Redirect href="/(protected)/Home" />;
}
