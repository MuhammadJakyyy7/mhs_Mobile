import {View, Text, Image} from 'react-native';
import React from 'react';

const detail = () => {
  return (
    <View
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
        <Image
          style={{
            height: 40,
            width: 40,
            marginHorizontal: 10,
            marginVertical: 10,
          }}
          source={require('../assets/images/rename.png')}
        />
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
            }}>
            Nasi Padang
            <Text
              style={{
                fontSize: 14,
                color: 'red',
                marginLeft: 200,
              }}>
              Rp 12.000
            </Text>
          </Text>
        </View>
        <View></View>
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
          borderRadius: 40,
          marginTop: 20,
          alignItems: 'center',
          marginHorizontal: 50,
        }}></View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 50,
          alignItems: 'center',
          backgroundColor: '#898484',
          marginHorizontal: 16,
          marginTop: 180,
          padding: 16,
          borderRadius: 40,
        }}></View>
    </View>
  );
};

export default detail;
