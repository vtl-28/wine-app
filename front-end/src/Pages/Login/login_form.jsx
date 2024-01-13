import React, {  useState } from "react";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
  } from "@chakra-ui/react";
  import { login } from '../../Utils/user'
  import { useNavigate } from "react-router-dom";

  const LoginForm = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);

  const toggleErrorToast = () => setShowErrorToast(!showErrorToast);
 
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
      navigate("/dashboard");
    }
  }

    return (
        <Box className='px-4'>
            <FormControl className="mb-3">
                <FormLabel>Email address</FormLabel>
                <Input
                 type="email"
                 name="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 />
            </FormControl>
            <FormControl className="mb-6">
                <FormLabel>Password</FormLabel>
                <Input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FormControl>
            <Box className='flex justify-between'>
                <Button >Get login credentials</Button>
                <Button className='basis-1/2' onClick={login_user}>Log in</Button>
            </Box>
        </Box>
    )

  }
  export default LoginForm