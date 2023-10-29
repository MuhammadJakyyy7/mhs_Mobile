import {ScrollView, View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <ScrollView
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
          marginTop: 15,
          padding: 16,
          borderRadius: 40,
        }}>
        {/* logo diatas */}
        <Image
          reziseMode="contain"
          style={{height: 40, width: 150}}
          source={require('../assets/images/logomhss.png')}
        />
        {/* logo menu */}
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
        <TouchableOpacity
          onPress={() => navigation.navigate('Detail')}
           style={{
            paddingTop: 12,
            padding: 12,
            flex: 1,
          }}>
          {/* nasipadang */}
          <Image
            reziseMode="contain"
            style={{
              height: 190,
              width: 180,
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
            Rp 12.000
          </Text>
        </TouchableOpacity>

        <View
          style={{
            padding: 12,
            flex: 1,
          }}>
          <Image
            reziseMode="contain"
            style={{
              height: 190,
              width: 180,
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
      <Text
        style={{
          marginTop: 33,
          marginHorizontal: 16,
          fontWeight: 'bold',
          color: 'black',
          fontSize: 16,
        }}>
        Menu Minuman
      </Text>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            padding: 12,
            flex: 1,
          }}>
          <Image
            reziseMode="contain"
            style={{
              height: 190,
              width: 180,
              marginHorizontal: 16,
              borderRadius: 12,
            }}
            source={require('../assets/images/lemontea.jpg')}
          />
          <Text
            style={{
              marginTop: 12,
              fontSize: 16,
              marginHorizontal: 16,
              color: 'black',
              margin: 3,
            }}>
            Lemon Tea
          </Text>
          <Text
            style={{
              marginTop: 4,
              fontSize: 14,
              marginHorizontal: 16,
              color: 'red',
            }}>
            Rp 10.000
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
              height: 190,
              width: 180,
              marginHorizontal: 16,
              borderRadius: 12,
            }}
            source={require('../assets/images/minuman.jpg')}
          />
          <Text
            style={{
              marginTop: 12,
              fontSize: 16,
              marginHorizontal: 16,
              color: 'black',
            }}>
            Milk Coffie
          </Text>
          <Text
            style={{
              marginTop: 4,
              fontSize: 14,
              marginHorizontal: 16,
              color: 'red',
            }}>
            Rp 13.000
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
