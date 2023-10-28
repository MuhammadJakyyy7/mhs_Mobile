import { StyleSheet, Text, View, Image, TouchableOpacity , ScrollView} from 'react-native'
import React from 'react'

const Succes = ({navigation}) => {
  return (
    <ScrollView style={{
        backgroundColor: '#D7D1CF',
    }}>
      <Image source={require('../assets/images/success.png')}
          reziseMode="contain"
          style={{
            marginTop: 100,
            alignSelf: 'center',
            borderRadius: 12,
            alignContent: 'center',
          }}
        />
        <Text style={{
            marginTop: 35,
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'DM Sans',
            fontSize: 16,
            color: 'black'
        }}>Pemesanan Sukses!</Text>
        <Text style={{
            width: 350,
            height: 50,
            marginTop: 35,
            alignSelf: 'center',
            textAlign: 'center',
            fontFamily: 'DM Sans',
            fontSize: 14,
        }}>Pesanan Anda telah diterima dan akan segera
        diproses. Mohon ditunggu ya!</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Home')} style= {{
            borderWidth:1,
            height:50,
            width:350,
            backgroundColor:'#898484',
            borderRadius:12,
            textAlign:'center',
            alignSelf:'center',
            alignItems:'center',
            alignContent:'center',
            marginTop: 120
          }}>
          <Text style={{
            fontWeight:'bold',
            textAlign:'center',
            marginTop:10,
            alignSelf:'center',
            color:'black'
          }}>Back To Home</Text>
          </TouchableOpacity>
    </ScrollView>
  )
}

export default Succes

const styles = StyleSheet.create({})