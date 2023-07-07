import React, { useEffect, useState } from 'react';
import {Alert, View } from 'react-native';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import axios from 'axios';
import SuccessAlert from './SuccessAlert';

export default function CardPaymentModal({visibility, setVisibility}) {
    const amount = 10.99;
    const [cardNumber, setCardNumber] = useState(null);
    const [expirationDate, setExpirationDate] = useState(null);
    const [cvv, setCVV] = useState(null);
    const [error, setError] = useState(null);
    const [alertVisible, setAlertVisible] = useState(false);

    const validateCardNumber = (cardNumber) => {
      // Remove any non-digit characters from the card number
      const cleanedCardNumber = cardNumber.replace(/\D/g, '');
    
      // Perform a basic regex check for the card number format
      const cardNumberRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
      if (!cardNumberRegex.test(cleanedCardNumber)) {
        return false;
      }
    
      // Perform a Luhn algorithm check
      let sum = 0;
      let isAlternate = false;
      for (let i = cleanedCardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cleanedCardNumber.charAt(i), 10);
    
        if (isAlternate) {
          digit *= 2;
          if (digit > 9) {
            digit -= 9;
          }
        }
    
        sum += digit;
        isAlternate = !isAlternate;
      }
    
      return sum % 10 === 0;
    };


    const validateExpirationDate = (expirationDate) => {
      // Remove any non-digit characters from the expiration date
      const cleanedExpirationDate = expirationDate.replace(/\D/g, '');
    
      // Check if the cleaned expiration date matches the expected format (MM/YY)
      const expirationDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
      if (!expirationDateRegex.test(cleanedExpirationDate)) {
        return false;
      }
    
      // Extract month and year from the cleaned expiration date
      const month = parseInt(cleanedExpirationDate.substr(0, 2), 10);
      const year = parseInt(cleanedExpirationDate.substr(2, 2), 10);
    
      // Get the current date
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100; // Last two digits of the current year
      const currentMonth = currentDate.getMonth() + 1; // Month value is zero-based
    
      // Compare the expiration date with the current date
      if (year < currentYear || (year === currentYear && month < currentMonth)) {
        return false; // Expiration date is in the past
      }
    
      return true;
    };
    

    const validateCVV = (cvv) => {
      // Remove any non-digit characters from the CVV
      const cleanedCVV = cvv.replace(/\D/g, '');
    
      // Check if the cleaned CVV matches the expected format (3 or 4 digits)
      const cvvRegex = /^[0-9]{3,4}$/;
      return cvvRegex.test(cleanedCVV);
    };
    
    const closeModal = () => {
      setVisibility(!visibility);
      setExpirationDate(null);
      setCVV(null);
      setCardNumber(null);
    }
    
    
    const showAlert = () => {
      setAlertVisible(true);
    };
  
    const closeAlert = () => {
      setAlertVisible(false);
    };
    
    const submitPayment = async () => {
      if (!validateCardNumber(cardNumber)) {
        setError('Invalid card number');
        return;
      }
      
        if (!validateExpirationDate(expirationDate)) {
            setError('Invalid expiration date');
            return;
        }
        
        if (!validateCVV(cvv)) {
          setError('Invalid cvv');
          return;
        }

        try {
          const response = await axios.post('YOUR_SERVER_API_ENDPOINT', {
            amount,
            cardNumber,
            expirationDate,
            cvv,
            // ... other payment-related parameters
          });
          console.log(response.data);
          showAlert();
          setVisibility(!visibility);
        } catch (error) {
            Alert.alert(error);
        }
    };
    useEffect(() =>  {
      error && setTimeout(() => {
        setError(null);
      }, 2000)
    }, [error]);
  
  return (
    <Modal
    isVisible={visibility}
    backdropOpacity={0.5}
    style={styles.modal}
    onBackdropPress={closeModal}
  >
    <View style={styles.modalContent}>
      <Text style={styles.title}>CONTINUE WITH VISA</Text>
      <TextInput
        style={styles.input}
        placeholder="card number"
        onChangeText={text => setCardNumber(text)}
        value={cardNumber}
        keyboardType='numeric'
        textContentType='creditCardNumber'
        maxLength={16}
      />
      <View style={styles.inputContainer}>
      <TextInput
        style={{...styles.input, flex: 2, marginEnd: 10}}
        placeholder="MM/YY(expiration)"
        onChangeText={text => {
          setExpirationDate(text);
        }}
        value={expirationDate}
        keyboardType='phone-pad'
        autoComplete='cc-exp'
        maxLength={5}
      />
        <TextInput
        style={{...styles.input, flex: 1}}
        placeholder="cvv"
        onChangeText={text => setCVV(text)}
        value={cvv}
        autoComplete='cc-number'
        keyboardType='numeric'
        maxLength={3}
      />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
      <TouchableOpacity style={styles.button} onPress={submitPayment}>
        <Text style={styles.buttonText}>CONTINUE PAYMENT</Text>
      </TouchableOpacity>
      <SuccessAlert visible={alertVisible} message="Successfully Upgraded To Premium Plan!" onClose={closeAlert} />
    </View>
  </Modal>
  )
}

const styles = StyleSheet.create({
    modal: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    modalContent: {
      height: 300,
      backgroundColor: 'white',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingHorizontal: 20,
      paddingVertical: 30,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 15,
        paddingHorizontal: 10,
        marginVertical: 5,
        padding: 10, 
        backgroundColor: '#ebf4fc', 
        textAlign: 'center'
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    button: {
      backgroundColor: '#1253a0',
      padding: 8,
      paddingVertical: 15,
      borderRadius: 4,
      width: '80%',
      alignItems: 'center',
      marginVertical: 5,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    error: {
      color: '#e43737',
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 5,
    },
    buttonText: {
      flex: 4,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center'
    },
  });
