import {
  
    Button,
    Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useDisclosure
  } from "@chakra-ui/react";

  import { useLocation } from "react-router-dom";
  import AddWine from "../../add_wine_model";
  import { useFetchWines } from "../../Hooks/wine";
  import TableRow from '../../table_row'

const LandingPage = () => {
  const { state } = useLocation();

  const { data, error, status } = useFetchWines();

  if (status === "loading"){
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>{error.message}</div>;
  }
  console.log(data)
    

    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <div className="w-full h-screen border-2 border-red-400">
            <div className='grid grid-cols-12 grid-rows-6 h-full border-2 border-blue-400'>
                <div className="row-start-1 row-span-6 col-start-3 col-span-8 border-2 border-yellow-400">
                    <div className="flex flex-col items-center h-28 justify-around">
                        <h3 className="text-4xl">Welcome, {state.name}</h3>
                        <p>Now that you're in, let's start adding some wines to your collection</p>
                    </div>
                    <div className="mb-4">
                        <Button onClick={onOpen}>Add wine</Button>
                    </div>
                    <AddWine isOpen={isOpen} onClose={onClose}/>
                    <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Wine database</TableCaption>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Year</Th>
        <Th>Type</Th>
        <Th>Varietal</Th>
        <Th>Rating</Th>
        <Th>Actions</Th>
      </Tr>
    </Thead>
    <Tbody>
      {
        data ? data.map((wine) => {
          return (
            <Tr>
            <Td>{wine.name}</Td>
            <Td>{wine.year}</Td>
            <Td>{wine.type}</Td>
            <Td>{wine.varietal}</Td>
            <Td>{wine.rating}</Td>
            <Td>
            <Button>Edit</Button>
            </Td>
          </Tr>
          )
        }) : ""
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