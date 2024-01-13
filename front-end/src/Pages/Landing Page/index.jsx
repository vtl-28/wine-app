import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
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
  import AddWine from "../../add_wine_model";

const LandingPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <div className="w-full h-screen border-2 border-red-400">
            <div className='grid grid-cols-12 grid-rows-6 h-full border-2 border-blue-400'>
                <div className="row-start-1 row-span-6 col-start-3 col-span-8 border-2 border-yellow-400">
                    <div className="flex flex-col items-center h-28 justify-around">
                        <h3 className="text-4xl">Welcome, Vuyisile</h3>
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
      <Tr>
        <Td>Charx</Td>
        <Td>2020</Td>
        <Td>Red</Td>
        <Td>cab sav</Td>
        <Td>3</Td>
        <Td>
        <Button>Edit</Button>
        </Td>
      </Tr>
      <Tr>
      <Td>Charx</Td>
        <Td>2020</Td>
        <Td>Red</Td>
        <Td>cab sav</Td>
        <Td>3</Td>
        <Td>
        <Button>Edit</Button>
        </Td>
      </Tr>
      <Tr>
      <Td>Charx</Td>
        <Td>2020</Td>
        <Td>Red</Td>
        <Td>cab sav</Td>
        <Td>3</Td>
        <Td>
        <Button>Edit</Button>
        </Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
      <Td>Charx</Td>
        <Td>2020</Td>
        <Td>Red</Td>
        <Td>cab sav</Td>
        <Td>3</Td>
        <Td>
        <Button>Edit</Button>
        </Td>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>

                </div>

            </div>

        </div>
    )
}
export default LandingPage