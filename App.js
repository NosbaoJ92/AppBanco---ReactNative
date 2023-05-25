import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TelaInicio } from './tela/TelaInicio';
import { TelaCadastro } from './tela/TelaCadastro';
import { TelaForget } from './tela/TelaForget';
import { TelaLogado } from './tela/TelaLogado';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='TelaA'>
      <Stack.Screen 
       options={{  //OPÇÃO QUE RETIRA A BARRA DE TÍTULO DA TELA
              title:'',
              headerTransparent:  true,
              headerShown: false,     
              }}
      name="TelaInicio" component={TelaInicio}/>
      <Stack.Screen 
      options={{   //OPÇÃO QUE RETIRA A BARRA DE TÍTULO DA TELA
              title:'',
              headerTransparent:  true,
              headerShown: false,     
              }}
      name="TelaCadastro" 
      component={TelaCadastro}/>
      <Stack.Screen 
       options={{  //OPÇÃO QUE RETIRA A BARRA DE TÍTULO DA TELA  
              title:'',
              headerTransparent:  true,
              headerShown: false,     
              }}
        name="TelaForget" component={TelaForget}/>
      <Stack.Screen 
       options={{   //OPÇÃO QUE RETIRA A BARRA DE TÍTULO DA TELA 
              title:'',
              headerTransparent:  true,
              headerShown: false,     
              }}
      name="TelaLogado" component={TelaLogado}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}


