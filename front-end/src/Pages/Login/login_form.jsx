import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { login } from '../../Utils/user';
import ErrorToast from '../../Components/Toasts/ErrorToast'

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);

  const toggleErrorToast = () => setShowErrorToast(!showErrorToast);

  const login_details = [{ "email": "malaika@gmail.com", "password": "123456" },
  { "email": "charyl@gmail.com", "password": "123456" },
  { "email": "susan@gmail.com", "password": "123456" },
  { "email": "hope@gmail.com", "password": "123456" },
  { "email": "vuyisile@gmail.com", "password": "123456" }];

  const get_login_details = (e) => {
    e.preventDefault();
    const random_details = Math.floor(Math.random() * login_details.length);
    const random = login_details[random_details];
    setEmail(random.email)
    setPassword(random.password)
  };

  const login_user = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      email,
      password,
    };

    let response = await login(data);

    const response_validation = typeof response === "object" ? "yes" : "no";

    if (response_validation === "no") {
      setIsLoading(false);
      setErrorMessage(response);
      toggleErrorToast();
    } else {
      setIsLoading(false);
      navigate("/landing_page", { state: response });
    }
  }

  return (
    <Box className='px-24'>
      {showErrorToast && (
        <ErrorToast
          message={errorMessage}
          showErrorToast={showErrorToast}
          toggleErrorToast={toggleErrorToast}
        />
      )}
      <FormControl className="mb-3 mt-3">
        <Input
          type="email"
          name="email"
          placeholder="EMAIL"
          bg='#fff'
          borderRightRadius="0"
          borderLeftRadius="0"
          _placeholder={{ color: '#000000' }}
          fontWeight="semibold"
          focusBorderColor='red.300'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl className="mb-6">
        <Input
          type="password"
          name="password"
          placeholder="PASSWORD"
          bg='#fff'
          borderRightRadius="0"
          borderLeftRadius="0"
          _placeholder={{ color: '#000000' }}
          focusBorderColor='red.300'
          fontWeight="semibold"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Box className='flex justify-between'>
        <Button borderRightRadius="0"
          borderLeftRadius="0" bg='#fff' className='basis-1/2' onClick={get_login_details}>GET LOGIN DETAILS</Button>
        <Button borderRightRadius="0"
          borderLeftRadius="0" bg='#fff'
          className='basis-1/3' onClick={login_user}>
          LOG IN
        </Button>
      </Box>
    </Box>
  )

}
export default LoginForm