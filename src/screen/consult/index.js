import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button, Platform } from 'react-native';
import * as Calendar from 'expo-calendar';

const  Consult = () => {
    useEffect(() => {
      (async () => {
        const { status } = await Calendar.requestCalendarPermissionsAsync();
        if (status === 'granted') {
          const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
          console.log('Here are all your calendars:');
          console.log({ calendars });
        }
      })();
    }, []);
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Agendar consulta</Text>
        <Button title="Marcar no calendário" onPress={createCalendar} />
      </View>
    );
  }
  
  const getDefaultCalendarSource = async () => {
    const defaultCalendar = await Calendar.getDefaultCalendarAsync();
    return defaultCalendar.source;
  }
  
 const createCalendar = async () => {
    const defaultCalendarSource =
      Platform.OS === 'ios'
        ? await getDefaultCalendarSource()
        : { isLocalAccount: true, name: 'Expo Calendar' };
    const newCalendarID = await Calendar.createCalendarAsync({
      title: 'Expo Calendar',
      color: 'blue',
      entityType: Calendar.EntityTypes.EVENT,
      sourceId: defaultCalendarSource.id,
      source: defaultCalendarSource,
      name: 'internalCalendarName',
      ownerAccount: 'personal',
      accessLevel: Calendar.CalendarAccessLevel.OWNER,
    });
    console.log(`Your new calendar ID is: ${newCalendarID}`);
  }

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#FFF",
        padding: 5,
        margin: 0,
        height: "100%",
      },
    title: {
        textAlign: "left",
        fontFamily: "Inter-SemiBoldItalic",
        fontSize: 25,
        marginLeft: 15,
        margin: 5,
        fontWeight: "bold",
        color: "#000",
      },
})

export default Consult;