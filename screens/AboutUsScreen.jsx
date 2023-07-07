import React, { useEffect, useRef } from 'react';
import { ScrollView } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

export default AboutUsScreen = ({ route }) => {
    const { scrollPosition } = route.params;
    const scrollViewRef = useRef(null);
  
    useEffect(() => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ y: scrollPosition, animated: true });
      }
    }, [scrollPosition]);
    return (
      <View style={styles.container} >
        <Text style={styles.title}>About Us</Text>
        <ScrollView ref={scrollViewRef}>
            <Text style={styles.description}>Welcome to [Company Name], a pioneering AI tech company at the forefront of innovation and cutting-edge technology. With a passion for advancing the boundaries of artificial intelligence, we are dedicated to creating transformative solutions that shape the future.

                At [Company Name], we believe that AI has the power to revolutionize industries and enhance human lives in remarkable ways. Our team of brilliant minds, consisting of talented engineers, data scientists, and AI experts, is committed to pushing the boundaries of what is possible. We are driven by a relentless pursuit of excellence, constantly striving to develop intelligent systems that solve complex challenges and unlock new opportunities.

                With a deep understanding of the potential of AI, we specialize in developing state-of-the-art algorithms, robust machine learning models, and intuitive natural language processing systems. Our cutting-edge technologies are designed to analyze vast amounts of data, extract meaningful insights, and enable intelligent decision-making. We harness the power of AI to optimize processes, enhance efficiency, and drive innovation across various sectors, including healthcare, finance, manufacturing, and more.

                What sets us apart is our unwavering commitment to ethical AI development.
            </Text>
            <Text style={styles.title}>Privacy Policy</Text>
            <Text style={styles.description}>                
                We prioritize transparency, fairness, and accountability in all our solutions, ensuring that our technologies are built with human-centric values. We understand the importance of addressing bias, privacy concerns, and the ethical implications of AI, and we are dedicated to creating responsible AI systems that benefit society as a whole.
            
                Collaboration lies at the heart of our approach. We work closely with our clients, understanding their unique needs and challenges, to co-create tailored AI solutions that drive measurable impact. By combining our expertise with the domain knowledge of our partners, we deliver solutions that transform industries, optimize operations, and unlock untapped potential.

                In addition to our client collaborations, we actively engage in research and development, constantly pushing the boundaries of AI innovation. Our commitment to staying ahead of the curve enables us to anticipate emerging trends and technologies, providing our clients with state-of-the-art solutions that give them a competitive edge in the ever-evolving digital landscape.

                Join us on this incredible journey as we harness the power of AI to shape a future where technology seamlessly integrates with human ingenuity. Together, let's create a world where intelligent systems empower individuals, businesses, and society as a whole. Welcome to [Company Name], where innovation meets artificial intelligence.
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
      marginBottom: 10,
      textAlign: 'center'
    },
    description: {
      fontSize: 16,
      textAlign: 'left',
      marginHorizontal: 20,
    },
  });