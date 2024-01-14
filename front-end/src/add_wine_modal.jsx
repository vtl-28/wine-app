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
  Select
} from "@chakra-ui/react";
import {  add_wine } from './Utils/wine'
import ErrorToast from "./Components/Toasts/ErrorToast"
import SuccessToast from "./Components/Toasts/SuccessToast";

const AddWine = ({ onClose, isOpen }) => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [varietal, setVarietal] = useState("");
  const [rating, setRating] = useState("");
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState([]);
  const [dataIsLoading, setDataIsLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const toggleSuccessToast = () => setShowSuccessToast(!showSuccessToast);
  const toggleErrorToast = () => setShowErrorToast(!showErrorToast);

  const add = async (e) => {
    e.preventDefault();
    setDataIsLoading(true);

    const data = {
      name,
      year,
      type,
      varietal,
      rating
    };

    let response = await add_wine(data);
    const response_validation = typeof response === "object" ? "yes" : "no";

    if (response_validation === "no") {
      setDataIsLoading(false);
      setErrorMessage(response);
      toggleErrorToast();
    } else {
      setDataIsLoading(false);
      setSuccessMessage(`Successfully added ${name} to the collection`);
      setName("");
      setYear("");
      setType("");
      setVarietal("");
      setRating("");
      toggleSuccessToast();
    }
  };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
        {showSuccessToast && (
            <SuccessToast
              placement={"middle-center"}
              message={successMessage}
              showSuccessToast={showSuccessToast}
              toggleSuccessToast={toggleSuccessToast}
            />
          )}
          {showErrorToast && (
            <ErrorToast
              placement={"middle-center"}
              message={errorMessage}
              showErrorToast={showErrorToast}
              toggleErrorToast={toggleErrorToast}
            />
          )}
          <Flex direction="column" className="py-10">
            <Box>
              <FormControl className="mb-3">
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                />
              </FormControl>
              <FormControl className="mb-3">
                <FormLabel>Year</FormLabel>
                <Input
                   type="text"
                   value={year}
                   onChange={(e) => setYear(e.target.value)}
                   name="year"
                />
              </FormControl>
              <FormControl className="mb-3">
                <FormLabel>Type</FormLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                  <option value='Red'>Red</option>
                  <option value='White'>White</option>
                  <option value='Rose'>Rose</option>
              </Select>
              </FormControl>
              <FormControl className="mb-3">
                <FormLabel>Varietal</FormLabel>
                <Select value={varietal} onChange={(e) => setVarietal(e.target.value)}>
                  <option value='Cabernet Sauvignon'>Cabernet Sauvignon</option>
                  <option value='Merlot'>Merlot</option>
                  <option value='Shiraz'>Shiraz</option>
                  <option value='Chenin Blanc'>Chenin Blanc</option>
                  <option value='Verdelho'>Verdelho</option>
                  <option value='Chardonnay'>Chardonnay</option>
                  <option value='Durif'>Durif</option>
              </Select>
              </FormControl>
              <FormControl className="mb-4">
                <FormLabel>Rating</FormLabel>
                <Input
                   type="text"
                   value={rating}
                   onChange={(e) => setRating(e.target.value)}
                   name="rating"
                />
              </FormControl>
              <FormControl>
                <Button
                  className="w-full"
                  onClick={add}
                >
                    Add wine
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