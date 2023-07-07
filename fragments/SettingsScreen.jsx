import React, { useState } from 'react';
import { Linking, Share, View } from 'react-native';
import Card from '../components/Card';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CardPaymentModal from '../components/CardPaymentModal';
//import DeviceInfo from 'react-native-device-info';

export default SettingsScreen = ({navigation}) => {
  
  const [isVisible, setVisible] = useState(false);
  const [isCardPaymentVisible, setCardPaymentVisible] = useState(false);
  const packageName = 'com.example.app'//DeviceInfo.getBundleId();

  
  const toggleModal = () => {
    setVisible(!isVisible);
  };

  const toggleCardPaymentModal = () => {
    setCardPaymentVisible(!isCardPaymentVisible);
    setVisible(!isVisible);
  };
  
  const handleButton2Press = () => {
    // Handle button 2 press
  };
  
  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this awesome app!', // Message to share
        url: 'https://www.example.com', // URL to share (optional)
        title: 'Share App', // Title of the message (optional)
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared with activity type of result.activityType
        } else {
          // Shared
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
      }
    } catch (error) {
      console.log('Error sharing:', error.message);
    }
  };
  
  const openGooglePlay = () => {
    const url = `market://details?id=${packageName}`;
  
    Linking.openURL(url)
      .catch(() => {
        // Handle error if Google Play app is not installed
        const webUrl = `https://play.google.com/store/apps/details?id=${packageName}`;
        Linking.openURL(webUrl);
      });
  };
  const handleNavigateAbout = () => {
    const scrollPosition = 0; // Set your desired scroll position
    navigation.navigate('About Us', { scrollPosition });
  };

  const handleNavigatePrivacy = () => {
    const scrollPosition = 600; // Set your desired scroll position
    navigation.navigate('About Us', { scrollPosition });
  };

  const handleNavigateTerms = () => {
    const scrollPosition = 0; // Set your desired scroll position
    navigation.navigate('Terms Of Service', { scrollPosition });
  };

  const handleNavigateRefund = () => {
    const scrollPosition = 2850; // Set your desired scroll position
    navigation.navigate('Terms Of Service', { scrollPosition });
  };

  const openOnReddit = () => {
    const url = 'https://www.reddit.com/';
    Linking.openURL(url)
      .catch((err) => console.error('Failed to open link:', err));
  };

  
  
  return (
    <View>
      <Card
        button1="Share DefineAI"
        button2 ="Rate Us"
        button3='Follow on Reddit'
        icon1='share-outline'
        icon2 = 'star-outline'
        icon3='logo-reddit'
        description="Card Description"
        onPressButton1={handleShare}
        onPressButton2={openGooglePlay}
        onPressButton3={openOnReddit}
      />

    <Card
        button1="About Us"
        button2="Restore Purchase"
        button3="Upgrade Plan"
        icon1='information-circle-outline'
        icon2='repeat'
        icon3='rocket-outline'
        description="Card Description"
        onPressButton1={handleNavigateAbout}
        onPressButton2={handleButton2Press}
        onPressButton3={toggleModal}
      />
    
    <Card
        button1="Privacy Policy"
        button2="Terms of Service"
        button3="Refund Policy"
        icon1='flash-outline'
        icon2='list'
        icon3='pricetag-outline'
        description="Card Description"
        onPressButton1={handleNavigatePrivacy}
        onPressButton2={handleNavigateTerms}
        onPressButton3={handleNavigateRefund}
      />
      <Modal
        isVisible={isVisible}
        backdropOpacity={0.5}
        style={styles.modal}
        onBackdropPress={toggleModal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.title}>Upgrade To Premium</Text>
          <TouchableOpacity style={styles.button} onPress={toggleCardPaymentModal}>
            <Text style={styles.buttonText}>CREDIT CARD</Text>
            <Icon name='card' size={24} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </Modal>
      <CardPaymentModal visibility={isCardPaymentVisible} setVisibility={setCardPaymentVisible}/>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    height: 200,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#2196f3',
    padding: 8,
    borderRadius: 4,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonText: {
    flex: 4,
    color: 'white',
    fontWeight: 'bold',
  },
  icon: {
    color: 'white',
    alignSelf: 'flex-end',
    flex: 1
  }
});