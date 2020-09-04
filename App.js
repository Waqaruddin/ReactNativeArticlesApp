import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView,StyleSheet, FlatList,Text, Button, Image, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';



const HomeScreen = ({navigation}) => {
  return(
    <View style = {{flex:1 , alignItems:'center', justifyContent:'center'}}>
       <TextInput style ={styles.input} placeholder ={'Username'} />
       <TextInput style ={styles.input}  secureTextEntry={true} placeholder ={'Password'} />

       <Button style ={styles.backButton} title ="Log in" onPress={()=>navigation.navigate("Details")} > </Button>
       
    </View>
);


};

const DATA = [

  {
    id: 'item1',
    title: 'Orange',
    description:'Orange is the largest citrus fruit',
  },
  {
    id: 'item2',
    title: 'Mango',
    description:'Mangoes are most popular fruit',

  },
  {
    id: 'item3',
    title: 'Apple',
    description:'Apples are member of rose family',

  },
  {
    id: 'item4',
    title: 'Banana',
    description:'Bananas are classfied as berries',

  },
  {
    id: 'item5',
    title: 'Grape',
    description:'Grapes have been around for 65 million years',

  },



];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);



function DetailsScreen({navigation})   {

 

return(
    <SafeAreaView >

       <FlatList
        style = {styles.title}
          data={DATA}
          renderItem = {({ item }) => (
 
            <View style = {styles.item}>
            <TouchableOpacity style={styles.itemButton}  onPress= {() => navigation.navigate(item.title) }>
            <Text style={styles.item}>{item.title} </Text>
            <Text>{item.description} </Text>

            </TouchableOpacity>

            </View>

          )}
        keyExtractor ={item =>item.id}
          />
         <Button
        title='Back'
         onPress={() => navigation.navigate('Home')} />

    </SafeAreaView>

    
);


};


function item1({navigation}){
  return(
   <View style= {styles.container}>
     <Image
      source={require('./assets/Orange.jpg')}
      style={styles.fruitPic} />
     <Text style= {styles.title}> Orange</Text>
     <Text> Oranges are the largest citrus fruit in the world.
       Orange juice is the most popular fruit juice in America.
     </Text>
     <Button style = {styles.backButton}title="Back" onPress={() => navigation.goBack()} />



   </View>


  );
}


function item2({navigation}){
  return(
   <View style= {styles.container}>
     <Image
      source={require('./assets/Mango.jpg')}
      style={styles.fruitPic} />
     <Text style= {styles.title}> Mango</Text>
     <Text> Mangos are related to cashews and pistachios.
       Mangos are one of the most popular fruits in the world.
     </Text>
     <Button title="Back" onPress={() => navigation.goBack()} />



   </View>


  );
}



function item3({navigation}){
  return(
   <View style= {styles.container}>
     <Image
      source={require('./assets/Apple.jpg')}
      style={styles.fruitPic} />
     <Text style= {styles.title}> Apple</Text>
     <Text> Apples are a member of rose family.
       Apples are grown in all 50 states.
     </Text>
     <Button title="Back" onPress={() => navigation.goBack()} />



   </View>


  );
}



function item4({navigation}){
  return(
   <View style= {styles.container}>
      <Image
      source={require('./assets/Banana.jpg')}
      style={styles.fruitPic} />
     <Text style= {styles.title}> Banana</Text>
     <Text> Humans have grown bananas for thousands of years.
       The banana is actually classifies as a berry.
     </Text>
     <Button title="Back" onPress={() => navigation.goBack()} />



   </View>


  );
}


function item5({navigation}){
  return(
   <View style= {styles.container}>
     <Image
      source={require('./assets/Grapes.png')}
      style={styles.fruitPic} />
     <Text style= {styles.title}> Grape</Text>
     <Text> Grapes have been around for 65 million years.
       There are 8,000 different varieties of grapes.
     </Text>
     <Button title="Back" onPress={() => navigation.goBack()} />



   </View>


  );
}



const Stack = createStackNavigator();


export default function App() {
  return ( 

    <NavigationContainer>

<Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{
          title:'Article List'
        }}/>
        <Stack.Screen name="Orange" component={item1} />
        <Stack.Screen name="Mango" component={item2} />
        <Stack.Screen name="Apple" component={item3} />
        <Stack.Screen name="Banana" component={item4} />
        <Stack.Screen name="Grape" component={item5} />



      </Stack.Navigator>



    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal: 16,

  },

  item: {
    flex:1,
    padding: 10,
    paddingTop:0,
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 32
  },
  title: {
    fontSize: 32,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  description:{
    fontSize:20,
    marginBottom:100,
  },
  fruitPic:{
    resizeMode:'contain',
    marginBottom:0,
    height: 200,
    width: 200,
    marginTop: 0,
    alignItems:'flex-start',


  },
  backButton:{
    paddingTop:20,
    marginTop:20
  },
  itemButton:{
    backgroundColor:'#00B8EA',
  },

 
});
