import React from 'react';
import { View, Button, Image, Text, TextInput, StyleSheet} from 'react-native';

export function TelaCadastro({navigation}) {
    return (
        <View style={styles.container}>
            <Image style={styles.perfil} source={require('../src/assets/img/user-circle-svgrepo-com.svg')}></Image>
            <View>
                <Text style={styles.text}>Your Name</Text>
                <TextInput  style={styles.inputs} placeholder=''></TextInput>
            </View>
            <View>
                <Text style={styles.text}>Email</Text>
                <TextInput  style={styles.inputs} placeholder=''></TextInput>
            </View>
            <View>
                <Text style={styles.text}>Password</Text>
                <TextInput secureTextEntry={true} style={styles.inputs} placeholder=''></TextInput>
            </View>
            <View>
                <Text style={styles.text}>Confirm Password</Text>
                <TextInput secureTextEntry={true} style={styles.inputs} placeholder=''></TextInput>
            </View>
            <View>
                <Text style={styles.text}>Phone Number</Text>
                <TextInput style={styles.inputs} placeholder='(xx) xxxx-xxxx'></TextInput>
            </View>
            <View>
                <Text style={styles.text}>Your Address</Text>
                <TextInput style={styles.inputs} placeholder=''></TextInput>
            </View>  
            <View style={styles.cadastrar}>
                <Button 
                    title='CADASTRAR'
                    onPress={() => navigation.navigate('TelaInicio')}>
                </Button>
            </View>
            <View style={styles.sair}>
                <Button 
                    title='CANCEL'
                    onPress={() => navigation.navigate('TelaInicio')}>
                </Button>
            </View>
        </View>  
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },

    perfil:{
        width:'100px',
        height:'100px',
        marginBottom:'10px'
    },
    
    inputs: {
        backgroundColor: '#fff',
        width: '300px', 
        height: '30px',
        marginBottom: '10px',
        paddingLeft: '10px',
        borderRadius: '6px',
    },

    text:{
        fontWeight:'bold',
    },

    cadastrar:{
        width: '300px', 
        height: '30px',  
    },

    sair:{
        marginTop:'10px',
        width: '300px', 
        height: '30px',  
    },
});