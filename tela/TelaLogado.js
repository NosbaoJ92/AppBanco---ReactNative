import React from 'react';
import { View, Button, StyleSheet, Image, TextInput, ImageBackground, Linking, Text} from 'react-native';

export function TelaLogado({navigation}) {
    return (
        <View style={styles.container}>
            <Image style={styles.perfil} source={require('../src/assets/img/user-circle-svgrepo-com.svg')}></Image>
            <View style={styles.login}>
                <Text style={styles.text}>Your Name</Text>
                <Text style={styles.text}>youremail@email.com</Text>
            </View>
                <View style={styles.div}>
                    <Text style={styles.text}>BALANCE</Text>
                    <Text style={styles.text}>$4,180.20</Text>
                    <View style={styles.transfer}>
                    <Button 
                        title='TRANSFER'
                        onPress={() => navigation.navigate('TelaTransfer')}>
                    </Button>
                </View>
            </View>
            <View style={styles.sair}>
            <Button 
                title='LOGOUT'
                onPress={() => navigation.navigate('TelaInicio')}>
            </Button>
        </View>
        </View>  
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
    },

    login:{
        alignItems: 'center',
    },

    div:{
        borderRadius: '8px',
        backgroundColor: '#fff',
        marginTop: '10px',
        width: '300px',
        height: '100px',
        alignItems: 'center',
        justifyContent: 'center',
    },

    transfer:{
        marginTop:'10px',
    },

    perfil:{
        width:'200px',
        height:'200px',
        marginBottom:'10px'
    },
    
    text:{
        fontWeight:'bold',
    },
    sair:{
        marginTop:'10px',
        width: '300px', 
        height: '30px',  
    },
});