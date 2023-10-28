import {View, Text, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import React from 'react';

const Detail = ({navigation}) => {
  return (
    <ScrollView
      style={{
        backgroundColor: '#D7D1CF',
      }}>
        
      <View
        style={{
          flexDirection: 'row',
          height: 60,
          width: 60,
          backgroundColor: '#898484',
          marginHorizontal: 16,
          marginTop: 16,

          borderRadius: 30,
        }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          style={{
            height: 40,
            width: 40,
            marginHorizontal: 10,
            marginVertical: 10,
          }}
          source={require('../assets/images/rename.png')}
        />
        </TouchableOpacity>
        <View
          style={{
            height: 50,
            width: 100,
            marginHorizontal: -5,
            marginVertical: 15,
          }}>
          <Text
            style={{
              fontSize: 18,
              marginLeft: 20,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Kembali
          </Text>
        </View>
      </View>
      <View>
        <Image
          reziseMode="contain"
          style={{
            height: 280,
            width: 328,
            marginHorizontal: 50,
            borderRadius: 12,
            alignContent: 'center',
            marginTop: 32,
          }}
          source={require('../assets/images/naspad.jpg')}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            display: 'flex',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: 'black',
              marginLeft: 50,
              marginTop: 12,
              
            }}>
              
            Nasi Padang
          </Text>
            
            <Text
              style={{
                fontWeight: 'bold',
                marginTop: 12,
                fontSize: 14,
                color: 'red',
                marginRight: 50,
              }}>
              Rp 12.000
            </Text>
        </View>
        <Text
          style={{
            fontSize: 14,
            marginHorizontal: 30,
            padding: 15,
          }}>
          Terbuat dari potongan daging ayam yang diolah menjadi patty, kemudian
          dipanggang atau digoreng hingga matang.
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          height: 50,
          width: 350,
          borderRadius: 15,
          marginTop: 20,
          alignSelf:'center',
          alignItems:'center'
        }}>
          <TextInput style={{
          }} placeholder='Masukkan Jumlah Pesanan'>
          
          </TextInput>
        </View>
      <View
        style={{
          justifyContent: 'space-between',
          alignSelf:'center',
          height: 50,
          width:350,
          alignItems: 'center',
          backgroundColor: '#898484',
          marginHorizontal: 16,
          marginTop: 50,
          padding: 16,
          borderRadius: 15,
        }}>
          <TouchableOpacity onPress={() => navigation.navigate('Succes')} style= {{
            textAlign:'center',
            alignSelf:'center',
            alignItems:'center',
            alignContent:'center'
          }}>
          <Text style={{
            fontWeight:'bold',
            textAlign:'center'
          }}>Konfirmasi Pemesanan</Text>
          </TouchableOpacity>
          
        </View>
    </ScrollView>
  );
};

export default Detail;
