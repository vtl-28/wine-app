import React, {  useState } from "react";
import {
  Flex,
  Text,
  Heading,
  Box,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const AddWine = ({ onClose, isOpen }) => {
   
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Flex direction="column" className="py-10">
            <Box>
              <FormControl className="mb-3">
                <FormLabel>Name</FormLabel>
                <Input
                
                />
              </FormControl>
              <FormControl className="mb-3">
                <FormLabel>Year</FormLabel>
                <Input
                  
                />
              </FormControl>
              <FormControl className="mb-3">
                <FormLabel>Type</FormLabel>
                <Input
                  
                />
              </FormControl>
              <FormControl className="mb-3">
                <FormLabel>Varietal</FormLabel>
                <Input
                  
                />
              </FormControl>
              <FormControl className="mb-4">
                <FormLabel>Rating</FormLabel>
                <Input
                  
                />
              </FormControl>
              <FormControl>
                <Button
                  bgColor="#F64060"
                  className="w-full"
                >
                    Log in
                </Button>
              </FormControl>
            </Box>

          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
    )
}
export default AddWine