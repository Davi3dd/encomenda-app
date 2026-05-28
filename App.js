import React, {useState} from "react";
import {
  View,Text,TextInput,Image,TouchableOpacity,StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons"


export default function App() {
  const [imagem,setImagem]= useState(null);
  const[mostrarsenha,setmostrarsenha]=useState(false);
  async function pegafoto(){
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ["images"],
    allowsEditing: true,
    aspect: [1,1],
    quality:1

  });

  if(!result.canceled){

    setImagem(result.assets[0].uri);

  }
}
  return(
  <View style={styles.container}>
  <TouchableOpacity onPress={pegafoto}>
  <View style={styles.areadafoto}>
   
   <Image
   source={
     imagem
     ?{uri:imagem}
     :{
       uri: 'https://cdn-icons-png.flaticon.com/512/847/847969.png'
     }
   }

   style={styles.foto}
   />
   <View style={styles.camerapqn}>
   <Ionicons
   name="camera"
   size={26}
   color="white"
   />
   </View>
   </View>
   </TouchableOpacity>
    <Text style={styles.titulo}>
    Login
    </Text>
  <View style= {styles.areaInput}>
    <Text style={styles.label}>
    Email
    </Text>

  <TextInput
    placeholder="Digite seu email"
    placeholderTextColor="#999"
    style={styles.input}
  />
  </View>
  <View style={styles.areaInput}>
  <Text style={styles.label}>
   Senha
   </Text>
   <View style={styles.areasenha}>

   <TextInput
    placeholder="Digite sua senha"
    placeholderTextColor="#999"
    secureTextEntry={!mostrarsenha}
    style={styles.inputsenha}
    />
    <TouchableOpacity
    onPress={() => setmostrarsenha(!mostrarsenha)}>
    <Ionicons
    name={mostrarsenha ? "eye":"eye-off"}
    size={24}
    color="#d96c93"
    style={{ marginRight: 5 }}
    />
    </TouchableOpacity>
    </View>
    </View>
    <TouchableOpacity style={styles.botaodentrar}>

     <Text style={styles.textodobotao}>
     Entrar
     </Text>
     </TouchableOpacity>
     <View style={styles.ou}>
     <View style={styles.linha}/>
     <Text style={styles.textoou}>
     ou
     </Text>
     <View style={styles.linha}/>
     </View>
     <TouchableOpacity style={styles.botaocriaconta}>
     <Text style={styles.textocriarconta}>
     Criar conta
     </Text>
     </TouchableOpacity>
     <TouchableOpacity>
     <Text style= {styles.textodeesquecersenha}>
     Esqueci minha senha
     </Text>
     </TouchableOpacity>
          
     </View>
  );
}
const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffd6e5"
  },
  titulo: {
    color: "#ff2e74",
    fontSize:38,
    textAlign: "center",
    marginTop: 5,
    fontWeight:"bold",
    letterSpacing:2
   },
   areaInput: {
     marginTop: 7,
     paddingHorizontal:20
   },
   label: {
     color: "#ff2e74",
     fontSize:22,
     marginBottom: 10,
     fontWeight:"bold"
   },
   input: {
     backgroundColor:"white",
     height:60,
     borderRadius:10,
     paddingHorizontal:15,
     fontSize: 16,
   },
     foto: {
       width: 170,
       height: 170,
       borderRadius:100,
       alignSelf:"center",
       marginTop:70,
       marginBottom:20,
       backgroundColor: '#ddd',
       borderWidth:4,
       borderColor:"white"
     },
     botaodentrar: {
       backgroundColor: "#ff2e74",
       height: 60,
       marginTop:40,
       marginHorizontal:20,
       borderRadius:15,
       justifyContent:"center",
       alignItems:'center'
     },
     textodobotao:{
       color:'white',
       fontSize:22,
       fontWeight:"bold"
     },
     camerapqn: {
       position: "absolute",
       bottom:15,
       right:5,
       backgroundColor:"#ff4f87",
       width:45,
       height:45,
       borderRadius:30,
       justifyContent:'center',
       alignItems:"center",
       
       borderWidth:3,
       borderColor:"white"
},
areadafoto:{
  alignSelf: "center",
  position:"relative"
},
ou:{
  flexDirection: "row",
  alignItems:"center",
  marginTop:16,
  marginHorizontal:20
},
linha:{
  flex:1,
  height:1,
  backgroundColor:"#e999b5"
},
textoou:{
  marginHorizontal:15,
  color:"#d96c93",
  fontSize:16,
  fontWeight:"bold"

},
botaocriaconta: {
  height:60,marginTop:20,marginHorizontal: 20,borderRadius:15,justifyContent: "center",alignItems: 'center',backgroundColor: 'transparent',borderWidth:2,borderColor:"#d96c93"
},
textocriarconta:{
  color:'#d96c93',fontSize:15,fontWeight:"bold"
},
textodeesquecersenha: {
  textAlign:'center',marginTop:25,color:"#d96c93",fontSize:15,fontWeight:"600"
},
areasenha:{
  flexDirection:"row",alignItems: 'center',backgroundColor: "white",borderRadius:10,paddingHorizontal:10
},
inputsenha:{
  flex:1,height:60,fontSize:16,paddingRight:10
}


});
 
