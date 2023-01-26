import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const DATA = [
  {
    'title': 'Bitcoin'
  },
  {
    'title': 'Ethereum'
  },
  {
    'title': 'Ethereum'
  },
  {
    'title': 'Ethereum'
  },
  {
    'title': 'Ethereum'
  },
  {
    'title': 'Ethereum'
  },
]

const CryptoCard = ({item}) => (
  <TouchableHighlight>
    <View className='flex flex-row gap-2 items-center py-2 px-4 rounded-lg m-1 shadow-lg bg-slate-100'>
    <Image className='w-10 h-10 rounded-lg' source={{uri:'https://via.placeholder.com/150'}}/>
    <View className='flex-1'>
      <Text className='text-lg font-bold'>{item.title}</Text>
      <Text className='text-sm'>0.000453 BTC</Text>
    </View>
    <View className='ml-auto'>
      <Text className='font-medium text-md'>$120,000</Text>
    </View>
  </View>
  </TouchableHighlight>
)


export default function App() {
  return (
    <View className="flex-1 items-center justify-start bg-black px-1">
      <View>
        <Text className='text-2xl'>Header</Text>
      </View>
      <View className='py-12 px-4 w-full rounded-lg'>
        <Text className='text-center text-white font-semibold my-2'>Account Balance</Text>
        <Text className='text-4xl font-bold text-white text-center'>$100,00</Text>
      </View>
      <View className='w-full rounded-2xl bg-white min-h-full p-2'>
        <Text className='text-lg font-bold p-2'>Assets</Text>
        <FlatList className='mt-4' data={DATA} renderItem={({item}) => <CryptoCard item={item}/>} keyExtractor={(item, i) => 'key-' + i}/>
      </View>
    </View>
  );
}
