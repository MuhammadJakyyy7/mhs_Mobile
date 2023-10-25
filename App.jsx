import {View, Image, Text} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View
      style={{
        backgroundColor: '#D7D1CF',
      }}>
      {/*header*/}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 60,
          alignItems: 'center',
          backgroundColor: '#898484',
          marginHorizontal: 16,
          marginTop: 16,
          padding: 16,
          borderRadius: 40,
        }}>
        <Image
          reziseMode="contain"
          style={{height: 40, width: 150}}
          source={require('./src/assets/images/logomhss.png')}
        />
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: 'black',
          }}></View>
      </View>
      <Text style={{marginTop: 12, fontSize: 12, marginHorizontal: 16}}>
        Selamat Datang di
      </Text>
      <Text
        style={{
          marginTop: 4,
          fontSize: 32,
          marginHorizontal: 16,
          color: 'black',
          fontWeight: 'bold',
        }}>
        Kantin Multistudi
      </Text>

      <View
        style={{
          borderWidth: 1,
          flexDirection: 'row',
        }}>
        <View
          style={{
            padding: 12,
            flex: 1,
            borderWidth: 1,
          }}>
          <View
            style={{height: 200, borderRadius: 12, backgroundColor: '#898484'}}
          />
          <Text
            style={{
              marginTop: 12,
              fontSize: 16,
              marginHorizontal: 16,
              color: 'black',
            }}>
            Nasi Goreng Sedap
          </Text>
          <Text
            style={{
              marginTop: 4,
              fontSize: 14,
              marginHorizontal: 16,
              color: 'red',
            }}>
            Rp 15.000
          </Text>
        </View>
        <View
          style={{
            padding: 12,
            flex: 1,
            borderWidth: 1,
          }}>
          <View
            style={{height: 200, borderRadius: 12, backgroundColor: '#898484'}}
          />
          <Text
            style={{
              marginTop: 12,
              fontSize: 16,
              marginHorizontal: 16,
              color: 'black',
            }}>
            Nasi Goreng Sedap
          </Text>
          <Text
            style={{
              marginTop: 4,
              fontSize: 14,
              marginHorizontal: 16,
              color: 'red',
            }}>
            Rp 15.000
          </Text>
        </View>
      </View>
    </View>
  );
};

export default App;
