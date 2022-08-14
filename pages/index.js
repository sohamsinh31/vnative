import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text, View } from 'react-native';
import { useEffect,useState } from 'react';
import UserAvatar from 'react-native-user-avatar';

export default function App() {
  const [data, setdata] = useState([]);
  useEffect(() => {
 async function fetchh(){
    fetch('http://192.168.0.101:8000/my/',{
      method:"GET"
    }).then(resp => resp.json()).then(data => {
      setdata(data)
    })
  }
  fetchh();
  }, [])
  //console.log(data.id)
 
  return (
    <View style={styles.container}>
      <Text style={{
        color:'red',
        fontSize:'30px',
        fontWeight:'bold'
      }}>VPLAY</Text>
      <br></br>
      { 
      data.map(value => {
        return ( 
      <View style={styles.column}>
      <View style={styles.row}>
      <UserAvatar
      size={40}
      style={{
        backgroundColor:'transperent',
        alignItems:'left'
      }}
      src={
      'http://192.168.0.101:8000/'+value.user
      }
      /><Text style={{color:'white',float:'right',fontSize:'25px'}}>{value.username}</Text>
      </View>
      <Image
      style={{
        borderRadius:'12px',
        width:'99%',
        height:'150px'
      }}
      source={{uri:'http://192.168.0.101:8000/'+value.picture}}
      /><Text style={{color:'white',fontSize:'25px'}}>{value.title}</Text>
      </View>
      )})
  }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0e0e',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  column:{
    flexDirection:'column'
  },
  row:{
    flexDirection:'row'
  }
});
