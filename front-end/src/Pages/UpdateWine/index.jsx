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

  const edit = async(e) => {
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
        <div className="w-full h-screen">
            <div className='grid grid-cols-12 grid-rows-6 h-full pt-10'>
                <div className='col-start-5 col-span-4'>
                    <div className='flex flex-col justify-between'>
                        <h3 className='text-4xl text-center'>Edit Wine</h3>
                    </div>
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
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  placeholder={wine_name}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                />
              </FormControl>
              <FormControl className="mb-3">
                <FormLabel>Year</FormLabel>
                <Input
                   type="text"
                   placeholder={wine_year}
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
                  onClick={() => navigate('/landing_page', {state})}
                >
                    Back
                </Button>
                    <Button
                    className='basis-1/3'
                    onClick={edit}
                    >
                        Edit wine
                    </Button>
                </Box>
              </FormControl>
          </Flex>
                    
                </div>
            </div>
        </div>
    )

}
export default UpdateWine