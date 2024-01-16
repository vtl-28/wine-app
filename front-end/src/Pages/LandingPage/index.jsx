import { useState } from "react";
import {

  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useDisclosure
} from "@chakra-ui/react";

import { useLocation,useNavigate } from "react-router-dom";
import AddWine from "../../add_wine_modal";
import { useFetchWines } from "../../Hooks/wine";
import TableRow from '../../table_row'

const LandingPage = () => {
  const navigate = useNavigate();
    const {
      isOpen: isOpenAdd,
      onOpen: onOpenAdd,
      onClose: onCloseAdd,
    } = useDisclosure();
  
    const { state } = useLocation();
  
    const { data, error, status } = useFetchWines();
  
    if (status === "loading") {
      return <div>Loading...</div>;
    }
    if (status === "error") {
      return <div>{error.message}</div>;
    }

    function logout() {
      localStorage.removeItem("user");
      navigate("/");
    }
  return (
    <div className="w-full h-full bg-wine_bg py-6 px-36">
      <div className='h-full py-4'>
        <div className="bg-cover bg-center px-12 bg_image_1" >
          <div className="flex flex-col items-center h-28 justify-around">
            <h3 className="text-4xl text-white">Welcome, {state.name}</h3>
            <p className="text-white font-serif">Now that you're in, let's start adding some wines to your collection</p>
          </div>
          <div className="flex justify-between mb-4">
            <Button bg='#600202' className="opacity-65"
              borderRightRadius="0" fontWeight="bold" color='#fff'
              borderLeftRadius="0"
              _hover={{
                background: "red.600",
              }} onClick={onOpenAdd}>ADD WINE</Button>
               <Button bg='#600202' className="opacity-65"
              borderRightRadius="0" fontWeight="bold" color='#fff'
              borderLeftRadius="0"
              _hover={{
                background: "red.600",
              }} onClick={logout}>LOG OUT</Button>
          </div>
          <AddWine isOpen={isOpenAdd} onClose={onCloseAdd} />
          <TableContainer>
            <Table>
              <Thead bg='#350404'>
                <Tr>
                  <Th fontWeight="bold" color='#fff'>Name</Th>
                  <Th fontWeight="bold" color='#fff'>Year</Th>
                  <Th fontWeight="bold" color='#fff'>Type</Th>
                  <Th fontWeight="bold" color='#fff'>Varietal</Th>
                  <Th fontWeight="bold" color='#fff'>Rating</Th>
                  <Th fontWeight="bold" color='#fff'>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  data ? <TableRow wines={data} />
                    : ""
                }
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  )
}
export default LandingPage