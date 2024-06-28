import React from "react";
import { Box, Heading, Text, VStack, FormControl, FormLabel, Input, Textarea, Button, HStack, Icon, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <Box p={4}>
      {/* Contact Form */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Contact Us</Heading>
        <Box maxW="600px" mx="auto">
          <Box bg="gray.50" p={6} borderRadius="md">
            <FormControl mb={4}>
              <FormLabel fontSize="lg">Name</FormLabel>
              <Input placeholder="Your Name" />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel fontSize="lg">Email</FormLabel>
              <Input type="email" placeholder="Your Email" />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel fontSize="lg">Message</FormLabel>
              <Textarea placeholder="Your Message" />
            </FormControl>
            <Button colorScheme="teal" width="full">Send Message</Button>
          </Box>
        </Box>
      </Box>

      {/* Contact Information */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Contact Information</Heading>
        <VStack spacing={4} textAlign="center" alignItems="flex-start">
          <HStack>
            <Icon as={FaMapMarkerAlt} boxSize={5} />
            <Text>1234 HUFIDA Street, City, Country</Text>
          </HStack>
          <HStack>
            <Icon as={FaPhone} boxSize={5} />
            <Text>Phone: +123 456 7890</Text>
          </HStack>
          <HStack>
            <Icon as={FaEnvelope} boxSize={5} />
            <Text>Email: info@hufida.org</Text>
          </HStack>
          <HStack>
            <Icon as={FaEnvelope} boxSize={5} />
            <Text>Email: support@hufida.org</Text>
          </HStack>
        </VStack>
      </Box>

      {/* Social Media Links */}
      <Box textAlign="center">
        <Heading as="h2" size="xl" mb={4}>Follow Us</Heading>
        <HStack justify="center" spacing={4}>
          <Link href="#" isExternal _hover={{ color: "teal.500" }}><Icon as={FaFacebook} boxSize={6} /></Link>
          <Link href="#" isExternal _hover={{ color: "teal.500" }}><Icon as={FaTwitter} boxSize={6} /></Link>
          <Link href="#" isExternal _hover={{ color: "teal.500" }}><Icon as={FaInstagram} boxSize={6} /></Link>
          <Link href="#" isExternal _hover={{ color: "teal.500" }}><Icon as={FaLinkedin} boxSize={6} /></Link>
        </HStack>
      </Box>
    </Box>
  );
};

export default Contact;