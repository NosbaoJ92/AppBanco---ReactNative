import React from 'react';
import { View, Button, StyleSheet, Image, TextInput, ImageBackground, Linking, Text} from 'react-native';

export function TelaInicio({navigation}) {
    return (
        <View style={{flex: 1, backgroundColor: "", alignItems: 'center', justifyContent: 'center'}}>
            <Image style={styles.img} source={require('../src/assets/img/pngegg.png')}></Image>
            <TextInput style={styles.Inputs}placeholder='Username or Email'></TextInput>
            <TextInput style={styles.Inputs} secureTextEntry={true} placeholder='Password'></TextInput>
            <View style={styles.Login}>
                <Button  style={styles.button}
                    title='LOGIN'
                    onPress={() => navigation.navigate('TelaLogado')}
                    color="#841584"
                    underlayColor='#fff'
                >
                </Button>
            </View>
            <View style={styles.ForgetCreate}>
                <Text 
                style={styles.hyperlinkStyle} 
                onPress={() => navigation.navigate('TelaForget')}> 
                Forget Password?
                </Text> 
                <View style={styles.cadastro}>
                    <Text 
                    > 
                    Now to Bank App? 
                        <Text 
                        style={styles.hyperlinkStyle} 
                        onPress={() => navigation.navigate('TelaCadastro')}>
                        Sign Up
                        </Text> 
                    </Text> 
                </View>
            </View>
        </View>  
    );
}



const styles = StyleSheet.create({
    Inputs: {
        backgroundColor: '#fff',
        width: '300px', 
        height: '30px',
        marginBottom: '10px',
        paddingLeft: '10px',
        borderRadius: '6px',
    },
    Login: {
        width: '300px', 
        height: '30px',       
    },

    hyperlinkStyle:{
        marginTop: '10px',
        color: '#2B68F5',
        fontWeight: 'bold',
        marginLeft: '5px',
    },

    ForgetCreate:{
        justifyContent: 'center',
        alignItems: 'center',
    },

    img:{
       width:'400px',
       height:'400px',
    },
  
});