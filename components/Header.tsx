import { styles, theme } from '@/style';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/outline';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth } from '@/context/AuthContext';
import { db } from '@/firebaseConfig';
import { doc, setDoc, deleteDoc, getDoc} from "firebase/firestore";

type Props = {
  type: 'favoriteMovies' | 'favoriteActors'; // mora da se slaže sa strukturom u bazi
  itemData: any;
};

export const Header = ({type, itemData }: Props) => {
  const insets = useSafeAreaInsets();
  const [favorite, setFavorite] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

  const itemRef = user?.uid && itemData?.id
  ? doc(db, "users", user.uid, type, String(itemData?.id))
  : null;

  // ✅ Provera da li je već omiljen
  useEffect(() => {
    const checkFavorite = async () => {
      if (!itemRef) return;
      const snapshot = await getDoc(itemRef);

      setFavorite(snapshot.exists());
    };

    checkFavorite();
  }, [itemRef, user]);

  // ✅ Dodaj / ukloni iz omiljenih
  const toggleFavorite = async () => {
    if (!user || !itemRef) return;

    if (!favorite) {
      await setDoc(doc(db, "users", user.uid, type, String(itemData?.id)), itemData, { merge: true });
      setFavorite(true);
    } else {
      await deleteDoc(itemRef);
      setFavorite(false);
    }
  };

  return (
    <View
      style={{ flex: 1, marginTop: insets.top + 15 }}
      className="z-20 w-full flex-row justify-between items-center px-4"
    >
      <TouchableOpacity
        style={styles.background}
        className="rounded-xl p-1"
        onPress={() => router.back()}
      >
        <ChevronLeftIcon size={28} strokeWidth={2.5} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleFavorite} className="rounded-xl p-1">
        <HeartIcon size={28} fill={favorite ? theme.background : 'white'} />
      </TouchableOpacity>
    </View>
  );
};
