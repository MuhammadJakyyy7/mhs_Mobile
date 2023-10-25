import {View, Image, Text} from 'react-native';
import React from 'react';

const Home = () => {
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
          source={require('../assets/images/logomhss.png')}
        />
        <Image
          reziseMode="contain"
          style={{height: 30, width: 30, margin: 5}}
          source={require('../assets/images/menu-line.png')}
        />
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

      <Text
        style={{
          marginTop: 33,
          marginHorizontal: 16,
          fontWeight: 'bold',
          color: 'black',
          fontSize: 16,
        }}>
        Menu Makanan
      </Text>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            paddingTop: 12,
            padding: 12,
            flex: 1,
          }}>
          <Image
            reziseMode="contain"
            style={{
              height: 195,
              width: 160,
              marginHorizontal: 16,
              borderRadius: 12,
            }}
            source={require('../assets/images/naspad.jpg')}
          />
          <Text
            style={{
              marginTop: 12,
              fontSize: 16,
              marginHorizontal: 16,
              color: 'black',
              margin: 3,
            }}>
            Nasi Padang
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
          }}>
          <Image
            reziseMode="contain"
            style={{
              height: 195,
              width: 160,
              marginHorizontal: 16,
              borderRadius: 12,
            }}
            source={require('../assets/images/nasgor.jpg')}
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
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            padding: 12,
            flex: 1,
            borderWidth: 1,
          }}>
          <Image
            reziseMode="contain"
            style={{
              height: 195,
              width: 160,
              marginHorizontal: 16,
              borderRadius: 12,
            }}
            source={require('../assets/images/naspad.jpg')}
          />
          <Text
            style={{
              marginTop: 12,
              fontSize: 16,
              marginHorizontal: 16,
              color: 'black',
              margin: 3,
            }}>
            Nasi Padang
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
          }}>
          <Image
            reziseMode="contain"
            style={{
              height: 195,
              width: 160,
              marginHorizontal: 16,
              borderRadius: 12,
            }}
            source={require('../assets/images/nasgor.jpg')}
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

export default Home;
