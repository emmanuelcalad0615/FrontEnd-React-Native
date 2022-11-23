import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
export default function App() {
  //Servicios
const[isLoading,setLoading]=useState(true)
const[data,setData]=useState([])
const[idvend,setIDVend]=useState('')
const[nombre,setNombre]=useState('')
const[correoe,setCorreoe]=useState('')
const[totalcomision,setTCom]=useState('')

const saveVendedor = async () => {
  if (!nombre.trim() || !correoe.trim() || !idvend.trim() || !totalcomision.trim()) {
    alert("Debe llenar todos los campos");
    return;
  }
  setLoading(true);
  try {
    const response = await axios.post(`http://172.18.63.45:3000/api/Vendedores`, {
      idvend,
      nombre,
      correoe,
      totalcomision
    });
    alert("Cliente agregado correctamente ...")
  } catch (error) {
    console.log(error)
  }
  finally{
    setLoading(false);
  }
};


const updateVendedor = async (idvend) => {
  if (!nombre.trim() || !apellidos.trim()) {
    alert("Todos los campos obligatorios");
    return;
  }
  setLoading(true);
  try {
    const response = await axios.put(`http://172.18.60.8:3000/api/Vendedores/${idvend}`, {
     idvend,
     nombre,
     correoe,
     totalcomision
    });
    alert("Vendedor actualizado correctamente ...")
  } catch (error) {
    console.log(error)
  }
  finally{
    setLoading(false);
  }
};

const deleteVendedor = async (idvend) => {
  /*if (!nombre.trim() || !apellidos.trim()) {
    alert("Nombre y apellidos obligatorios");
    return;
  }*/
  setLoading(true);
  try {
    if(confirm("Está seguro de eliminar el cliente")){
      const response = await axios.delete(`http://172.18.60.8:3000/api/Vendedores/${idvend}`);
    alert("Cliente eliminado correctamente ...")
    }
    
  } catch (error) {
    console.log(error)
  }
  finally{
    setLoading(false);
  }
};
const getClientes = async () => {
  
  setLoading(true);
  try {
    const response = await axios.get(`http://172.18.60.8:3000/api/clientes`);
    setData(response.data);
    
  } catch (error) {
    console.log(error)
  }
  finally{
    setLoading(false);
  }
};

 
 
  const Tab = createBottomTabNavigator();



  
  function HomeScreen(){
    return(
      <View style={{flex:1, padding:24, backgroundColor:'#A9CCE3'}}>
        
      </View>
    );
  }
  function VendScreen(){
    return(
      <View style={{flex:1, padding:24, backgroundColor:'#A9CCE3'}}>



     <View>
    <TextInput
    placeholder='ID Vendedor'
    style={styles.inputs}
    onChangeText={idvend=>setIDVend(idvend)}
    
    ></TextInput> 
    <TextInput
    placeholder='Nombre'
    style={styles.inputs}
    onChangeText={nombre=>setNombre(nombre)}
    
    ></TextInput> 
    <TextInput
    placeholder='correo'
    style={styles.inputs}
    onChangeText={correoe=>setCorreoe(correoe)}
    
    ></TextInput> 
    <TextInput
    placeholder='Valor de la comisión'
    style={styles.inputs}
    onChangeText={totalcomision=>setTCom(totalcomision)}
    
    ></TextInput> 
    </View>

    <TouchableOpacity
    style={[styles.buttons,{backgroundColor:'aqua'}]}
    onPress={()=>saveVendedor}
    >Guardar</TouchableOpacity>
    <TouchableOpacity
    style={[styles.buttons,{backgroundColor:'aqua'}]}
   
    >Consultar</TouchableOpacity>
    <TouchableOpacity
    style={[styles.buttons,{backgroundColor:'aqua'}]}
    
    >Consultar por ID</TouchableOpacity>
    <TouchableOpacity
    style={[styles.buttons,{backgroundColor:'aqua'}]}
   
    >Editar</TouchableOpacity>
    <TouchableOpacity
    style={[styles.buttons,{backgroundColor:'red'}]}
    
    >Eliminar</TouchableOpacity>
    


   </View>


    )
  }
  function VentScreen(){
    return(
      <View style={{flex:1, padding:24, backgroundColor:'#A9CCE3'}}>
      <TextInput
      placeholder='ID Vendedor'
      style={styles.inputs}
      
      
      ></TextInput>
      <TextInput
      placeholder='Zona'
      style={styles.inputs}
      
      
      ></TextInput>
      <TextInput
      placeholder='Fecha'
      style={styles.inputs}
      
      
      ></TextInput>
      <TextInput
      placeholder='Valor'
      style={styles.inputs}
      
      
      ></TextInput>
      <TextInput
      placeholder='Comision'
      style={styles.inputs}
      
      
      ></TextInput>
      <TouchableOpacity
    style={[styles.buttons,{backgroundColor:'aqua'}]}
    >Guardar</TouchableOpacity>
    <TouchableOpacity
    style={[styles.buttons,{backgroundColor:'aqua'}]}
   
    >Consultar</TouchableOpacity>
    <TouchableOpacity
    style={[styles.buttons,{backgroundColor:'aqua'}]}
    
    >Consultar por ID</TouchableOpacity>
    <TouchableOpacity
    style={[styles.buttons,{backgroundColor:'aqua'}]}
   
    >Editar</TouchableOpacity>
    <TouchableOpacity
    style={[styles.buttons,{backgroundColor:'red'}]}
    
    >Eliminar</TouchableOpacity>
      </View>

       

    )
  }
  




  return (
    <NavigationContainer>
      <Tab.Navigator>

        <Tab.Screen name='Home' component={HomeScreen}></Tab.Screen>
        <Tab.Screen name='Vendedores' component={VendScreen}></Tab.Screen>
        <Tab.Screen name='Ventas' component={VentScreen}></Tab.Screen>

      </Tab.Navigator>
      
   </NavigationContainer>
   
   






    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons:{
    borderRadius:10,
    padding:10, 
    justifyContent:'center',
    alignItems:'center',
    height:40,
    marginTop:10
  }, 
  inputs:{
    borderColor:'green',
    borderRadius:10,
    marginTop:5, 
    textAlign:'center',
    padding:5,
    borderColor:'green',
    borderWidth:2
  }
});
