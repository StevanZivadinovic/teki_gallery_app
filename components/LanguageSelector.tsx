import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '@/helperFunctions/global';

const LanguageSelector = () => {
  const { t } = useTranslation();

  return (
    <View className="flex-row items-center justify-between w-[70%] mx-5">
      <Text className="text-white text-xl leading-none">{t('SelectLanguage')}:</Text>

      <RNPickerSelect
        useNativeAndroidPickerStyle={false}
        onValueChange={(value) => changeLanguage(value)}
        placeholder={{}}
        items={[
          { label: '🇷🇸 Српски', value: 'sr-Rs' },
          { label: '🇬🇧 English', value: 'en' },
          { label: '🇷🇺 Русский', value: 'ru' },
        ]}
        style={pickerSelectStyles}
      />
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    fontSize: 20, 
    padding: 12,
    color: 'white',
    paddingRight: 30,
  },
});

export default LanguageSelector;
