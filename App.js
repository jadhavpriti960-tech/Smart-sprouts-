import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import * as Speech from 'expo-speech';

export default function App(){
 const [lang,setLang]=useState('en');
 const [stars,setStars]=useState(0);

 const speak=(en,hi)=>Speech.speak(lang==='en'?en:hi,{language:lang==='en'?'en-US':'hi-IN'});

 const lessons=[
  ['ABC','A for Apple','ए फॉर एप्पल'],
  ['Numbers','1 2 3','एक दो तीन'],
  ['Colors','Red Blue Green','लाल नीला हरा'],
  ['Shapes','Circle Square Triangle','गोला चौकोर त्रिकोण'],
  ['Rhymes','Twinkle Twinkle Little Star','ट्विंकल ट्विंकल लिटिल स्टार']
 ];

 return (
  <SafeAreaView style={s.container}>
   <ScrollView>
    <Text style={s.title}>🌱 Smart Sprouts</Text>
    <Text style={s.sub}>⭐ Stars: {stars}</Text>

    <View style={s.row}>
      <TouchableOpacity style={s.btn} onPress={()=>setLang('en')}><Text>English</Text></TouchableOpacity>
      <TouchableOpacity style={s.btn} onPress={()=>setLang('hi')}><Text>हिंदी</Text></TouchableOpacity>
    </View>

    {lessons.map((item,i)=>(
      <TouchableOpacity key={i} style={s.card} onPress={()=>{speak(item[1],item[2]);setStars(stars+1)}}>
        <Text style={s.cardText}>{item[0]}</Text>
      </TouchableOpacity>
    ))}

   </ScrollView>
  </SafeAreaView>
 );
}

const s=StyleSheet.create({
 container:{flex:1,backgroundColor:'#E8F9E8',padding:18},
 title:{fontSize:32,fontWeight:'800',textAlign:'center',marginTop:10},
 sub:{textAlign:'center',marginBottom:10,fontSize:18},
 row:{flexDirection:'row',justifyContent:'center',marginBottom:10},
 btn:{backgroundColor:'#fff',padding:10,borderRadius:12,margin:5},
 card:{backgroundColor:'#fff',padding:20,borderRadius:18,marginBottom:12},
 cardText:{fontSize:22,fontWeight:'700',textAlign:'center'}
});
