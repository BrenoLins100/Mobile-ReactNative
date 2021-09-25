import React from 'react';
import { View, Text, Image} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawer(props) {
 return (
    <DrawerContentScrollView {...props} >
        <View style={{
        width: '100%', height: 90, alignItems: 'center', justifyContent: 'center',
        marginTop: 25
        }}>
        <Image
        source={require('../img/brenor.jpg')}
        style={{width: 85, height: 85, borderRadius: '50%'}}
        />
        <Text style={{color: '#000', fontSize: 17, marginTop: 5, marginBottom:25}}>
            Breno Lins Arbeche
        </Text>
        </View>

        <DrawerItemList {...props} />

  </DrawerContentScrollView>
  );
}