import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    Link,
  } from "@chakra-ui/react";
import { Service, apiUrl } from "@hex-labs/core";
import axios from "axios";
import { useEffect, useState } from "react";

const UserModal = ({ isOpen, onClose, user }: { isOpen: boolean, onClose: () => void, user: any }) => {
    // boiler plate code for fetching hackathons for user
    
    // const [hackathons, setHackathons] = useState<any[]>([]);

    // useEffect(() => {
    //     const fetchHackathonsForUser = async () => {
    //       try {
    //         const URL = apiUrl(Service.HEXATHONS, `/hexathon-users/${user.userId}/hexathons`);
    //         const response = await axios.get(URL);
    //         setHackathons(response.data);
    //         console.log(hackathons);
    //       } catch (error) {
    //         console.error('Error fetching hackathons for user:', error);
    //       }
    //     };
    
    //     if (user.userId) {
    //       fetchHackathonsForUser();
    //     }
    //   }, [user.userId]);
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Name: {user.name.first} {user.name.last}</Text>
            <Text>Email: <Link href={`mailto:${user.email}`}>{user.email}</Link></Text>
            <Text>Phone Number: {user.phoneNumber}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="purple" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default UserModal;
