import React, { useEffect, useRef } from 'react';
import { ScrollView } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

export default TermsOfServiceScreen = ({ route }) => {
    const { scrollPosition } = route.params;
    const scrollViewRef = useRef(null);
  
    useEffect(() => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ y: scrollPosition, animated: true });
      }
    }, [scrollPosition]);
    return (
      <View style={styles.container} >
        <Text style={styles.title}>Terms Of Service</Text>
        <ScrollView ref={scrollViewRef}>
            <Text style={styles.description}>
                Welcome to [Company Name], an AI company dedicated to providing innovative solutions and services. These Terms of Service outline the rights and responsibilities between [Company Name] and its users ("Users" or "You") when accessing and utilizing our AI technology, products, and services ("Services"). By using our Services, you agree to abide by these Terms of Service and any applicable laws and regulations.
                {'\n'}
                {'\n'}
                <Text style={styles.subtitle}>1. Acceptance of Terms</Text>
                {'\n'}
                By accessing or using our Services, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service. If you do not agree with any provisions stated herein, you should refrain from using our Services.
                {'\n'}
                {'\n'}
                <Text style={styles.subtitle}>2. Description of Services</Text>
                {'\n'}
                [Company Name] offers AI technology, products, and services that may include, but are not limited to, natural language processing, machine learning, data analysis, recommendation systems, and other related AI capabilities. The specific features and functionalities of the Services may be subject to change or update without prior notice.
                {'\n'}
                {'\n'}
                <Text style={styles.subtitle}>3. User Obligations</Text>
                {'\n'}
                a. Eligibility: You must be at least 18 years old or have reached the age of majority in your jurisdiction to use our Services. If you are accessing our Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms of Service.
                {'\n'}
                {'\n'}
                b. Account Registration: Some features of our Services may require you to create an account. You agree to provide accurate, complete, and up-to-date information during the registration process and to keep your account credentials secure. You are responsible for all activities that occur under your account.
                {'\n'}
                {'\n'}
                c. Prohibited Activities: When using our Services, you agree not to engage in any of the following activities: 
                {'\n'}
                {'\n'}
                (i) violating any applicable laws or regulations; 
                {'\n'}
                {'\n'}
                (ii) infringing upon the intellectual property rights of others; 
                {'\n'}
                {'\n'}
                (iii) transmitting any harmful, unlawful, or fraudulent content; 
                {'\n'}
                {'\n'}
                (iv) interfering with the proper functioning of our Services; 
                {'\n'}
                {'\n'}
                (v) attempting to gain unauthorized access to our systems; 
                {'\n'}
                {'\n'}
                (vi) engaging in any activity that may cause harm or disrupt our Services or networks.
                {'\n'}
                {'\n'}
                <Text style={styles.subtitle}>1. Intellectual Property Rights</Text>
                {'\n'}
                [Company Name] retains all rights, title, and interest in and to its Services, including any patents, copyrights, trademarks, trade secrets, or other proprietary rights. You acknowledge that the use of our Services does not grant you any ownership or rights to our intellectual property. You agree not to use, copy, modify, distribute, or create derivative works based on our Services or any part thereof without our prior written consent.
                {'\n'}
                {'\n'}
                <Text style={styles.subtitle}>2. Privacy and Data Protection</Text>
                {'\n'}
                We value your privacy and handle your personal information in accordance with our Privacy Policy. By using our Services, you consent to the collection, use, and disclosure of your information as described in our Privacy Policy.
                {'\n'}
                {'\n'}
                <Text style={styles.subtitle}>3. Limitation of Liability</Text>
                {'\n'}
                To the extent permitted by law, [Company Name] and its affiliates, directors, employees, or agents shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with your use of our Services, even if we have been advised of the possibility of such damages.
                {'\n'}
                {'\n'}
                <Text style={styles.subtitle}>4. Modifications to the Terms</Text>
                {'\n'}
                [Company Name] reserves the right to modify or update these Terms of Service at any time. We will notify you of any material changes by posting the revised Terms on our website or through other communication channels. Your continued use of our Services after such modifications constitutes your acceptance of the updated Terms.
                {'\n'}
                {'\n'}
                <Text style={styles.subtitle}>5.Termination</Text>
                {'\n'}
                We may suspend or terminate your access to our Services if you violate these Terms of Service or engage in any activity that could harm our company, reputation, or other users. Upon termination, any licenses or rights granted to you under these Terms will cease.
                {'\n'}
                {'\n'}
                <Text style={styles.subtitle}>6. Governing Law and Dispute Resolution</Text>
                {'\n'}
                These Terms of Service shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising out of or in connection with these Terms shall be resolved through binding arbitration conducted in [Jurisdiction] in accordance with the rules of [Arbitration Organization].
                {'\n'}
                {'\n'}
                <Text style={styles.subtitle}>7. Severability</Text>
                {'\n'}
                If any provision of these Terms of Service is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.
                {'\n'}
                {'\n'}
                Please read these Terms of Service carefully before using our Services. If you have any questions or concerns, please contact us at [contact email/website].
            </Text>
            <Text style={styles.title}>Refund Policy</Text>
            <Text style={styles.description}>
                <Text style={styles.subtitle}>Effective Date: 12th Aug 2023</Text>
                
                {'\n'}
                At [AI Company Name], we strive to provide excellent products and services that meet the needs and expectations of our customers. However, we understand that there may be situations where a refund is necessary. This Refund Policy outlines the guidelines and procedures for requesting a refund for our AI products or services.
                {'\n'}
                {'\n'}
                <Text style={styles.subtitle}>1. Eligibility for Refund:</Text>
                {'\n'}
                1.1. To be eligible for a refund, you must have purchased or subscribed to our AI product or service directly from [AI Company Name].
                {'\n'}
                {'\n'}
                1.2. Refunds are typically only available for the initial purchase or subscription and do not apply to subsequent renewals or additional services.
                {'\n'}
                {'\n'}
                1.3. Refunds are subject to the terms and conditions outlined in our Terms of Service or any specific agreements related to the purchased product or service.
                {'\n'}
                {'\n'}
                <Text style={styles.subtitle}>2. Refund Request Process:</Text>
                {'\n'}
                2.1. To request a refund, you must submit a written request to our customer support team via [contact information]. The request should include your name, contact information, order details, and a clear explanation of why you are requesting a ref
                {'\n'}
                {'\n'}
                2.2. We may require additional information or documentation to process your refund requ
                {'\n'}
                {'\n'}
                2.3. Refund requests must be submitted within [timeframe] from the date of purchase or subscripti
                {'\n'}
                {'\n'}
                <Text style={styles.subtitle}>3. Evaluation and Approval:</Text>
                {'\n'}
                3.1. Once we receive your refund request, we will evaluate it based on our refund policy and the specific circumstances of your c
                {'\n'}
                {'\n'}
                3.2. We reserve the right to approve or deny refund requests at our discret
                {'\n'}
                {'\n'}
                3.3. Refunds may be approved in whole or in part, depending on the nature of the request and the applicable terms and conditions.
                {'\n'}
                {'\n'}
                <Text style={styles.subtitle}>4. Refund Methods:</Text>
                {'\n'}
                4.1. If your refund request is approved, we will process the refund using the same method of payment used for the original purchase, unless otherwise specif
                {'\n'}
                {'\n'}
                4.2. Please note that it may take a reasonable amount of time for the refund to be processed and reflected in your account, depending on your payment provid
                {'\n'}
                {'\n'}
                <Text style={styles.subtitle}>5. Non-Refundable Items:</Text>
                {'\n'}
                5.1. Certain products or services may be non-refundable unless otherwise stated explicitly.
                {'\n'}
                {'\n'}
                5.2. Any customized or personalized AI solutions, consulting services, or other specific deliverables may not be eligible for a refund.
                {'\n'}
                {'\n'}
                <Text style={styles.subtitle}>6. Modifications and Updates:</Text>
                {'\n'}
                6.1. We reserve the right to modify or update this Refund Policy at any time without prior notice. The updated policy will be effective immediately upon posting on our website or notifying customers through other means.
                {'\n'}
                {'\n'}
                6.2. It is your responsibility to review the refund policy periodically to stay informed of any changes.
                {'\n'}
                {'\n'}
                If you have any questions or need further clarification regarding our refund policy, please contact our customer support team. We are committed to addressing any concerns or issues you may have in a timely and fair manner.
            </Text>
        </ScrollView>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 10,
      textAlign: 'center'
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center'
    },
    description: {
      fontSize: 16,
      textAlign: 'left',
      marginHorizontal: 20,
    },
  });