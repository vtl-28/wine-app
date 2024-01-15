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

import { useLocation } from "react-router-dom";
import AddWine from "../../add_wine_modal";
import { useFetchWines } from "../../Hooks/wine";
import TableRow from '../../table_row'

const LandingPage = () => {
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

  return (
    <div className="w-full h-screen bg-wine_bg">
      <div className='grid grid-cols-12 grid-rows-12 h-full py-4'>
        <div className="bg-cover bg-center h-full row-span-12 col-start-2
                 col-end-12 col-span-8  px-12" style={{ backgroundImage: "url('/src/assets/wine_pic_1.jpg')" }}>
          <div className="flex flex-col items-center h-28 justify-around">
            <h3 className="text-4xl text-white">Welcome, {state.name}</h3>
            <p className="text-white font-serif">Now that you're in, let's start adding some wines to your collection</p>
          </div>
          <div className="mb-4">
            <Button bg='#600202' className="opacity-65"
              borderRightRadius="0" fontWeight="bold" color='#fff'
              borderLeftRadius="0"
              _hover={{
                background: "red.600",
              }} onClick={onOpenAdd}>ADD WINE</Button>
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
