import {
  Flex,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select
} from "@chakra-ui/react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SuccessToast from "../../Components/Toasts/SuccessToast";
import ErrorToast from "../../Components/Toasts/ErrorToast";
import { update_wine } from "../../Utils/wine";

const UpdateWine = () => {
  const navigate = useNavigate()
  const state = useLocation()
  const { _id, name: wine_name, year: wine_year,
    type: wine_type, varietal: wine_varietal, rating: wine_rating } = state.state
  console.log(_id, wine_name, wine_year, wine_type, wine_varietal, wine_rating)
  console.log(state)
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

  const toggleSuccessToast = () => setShowSuccessToast(!showSuccessToast);
  const toggleErrorToast = () => setShowErrorToast(!showErrorToast);

  const edit = async (e) => {
    e.preventDefault();
    setDataIsLoading(true);

    const data = {
      name,
      year,
      type,
      varietal,
      rating
    };

    let response = await update_wine(_id, data);
    const response_validation = typeof response === "object" ? "yes" : "no";

    if (response_validation === "no") {
      setDataIsLoading(false);
      setErrorMessage(response);
      toggleErrorToast();
    } else {
      setDataIsLoading(false);
      setSuccessMessage("Successfully updated");
      setName("");
      setYear("");
      setType("");
      setVarietal("");
      setRating("");
      toggleSuccessToast();
    }
  }
  return (
    <div className="w-full h-screen bg-wine_bg">
      <div className='grid grid-cols-12 grid-rows-6 h-full  py-4'>
        <div className='row-span-6 col-start-2
                 col-end-12 col-span-8 px-28 py-12 bg_image_1'>
          <div className="px-48 bg-wine_bg opacity-85 py-6">

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
            <Flex direction="column">
              <FormControl className="mb-3">
                <FormLabel color='#fff'>Name</FormLabel>
                <Input
                  type="text"
                  bg='#fff'
                  borderRightRadius="0"
                  borderLeftRadius="0"
                  _placeholder={{ color: '#000000' }}
                  fontWeight="semibold"
                  focusBorderColor='red.300'
                  placeholder={wine_name}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                />
              </FormControl>
              <FormControl className="mb-3">
                <FormLabel color='#fff'>Year</FormLabel>
                <Input
                  type="text"
                  bg='#fff'
                  borderRightRadius="0"
                  borderLeftRadius="0"
                  _placeholder={{ color: '#000000' }}
                  fontWeight="semibold"
                  focusBorderColor='red.300'
                  placeholder={wine_year}
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  name="year"
                />
              </FormControl>
              <FormControl className="mb-3">
                <FormLabel color='#fff'>Type</FormLabel>
                <Select
                  bg='#fff'
                  borderRightRadius="0"
                  borderLeftRadius="0"
                  fontWeight="semibold" focusBorderColor='red.300' value={type} onChange={(e) => setType(e.target.value)}>
                  <option value='Red'>Red</option>
                  <option value='White'>White</option>
                  <option value='Rose'>Rose</option>
                </Select>
              </FormControl>
              <FormControl className="mb-3">
                <FormLabel color='#fff'>Varietal</FormLabel>
                <Select
                  bg='#fff'
                  borderRightRadius="0"
                  borderLeftRadius="0"
                  fontWeight="semibold" focusBorderColor='red.300' value={varietal} onChange={(e) => setVarietal(e.target.value)}>
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
                <FormLabel color='#fff'>Rating</FormLabel>
                <Input
                  type="text"
                  bg='#fff'
                  borderRightRadius="0"
                  borderLeftRadius="0"
                  _placeholder={{ color: '#000000' }}
                  fontWeight="semibold"
                  focusBorderColor='red.300'
                  placeholder={wine_rating}
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  name="rating"
                />
              </FormControl>
              <FormControl>
                <Box className='flex justify-between'>
                  <Button
                    className='basis-1/3'
                    bg='#fff'
                    borderRightRadius="0"
                    borderLeftRadius="0"
                    onClick={() => navigate('/landing_page', { state: state })}
                  >
                    BACK
                  </Button>
                  <Button
                    className='basis-1/3'
                    bg='#fff'
                    borderRightRadius="0"
                    borderLeftRadius="0"
                    onClick={edit}
                  >
                    EDIT WINE
                  </Button>
                </Box>
              </FormControl>
            </Flex>
          </div>

        </div>
      </div>
    </div>
  )

}
export default UpdateWine