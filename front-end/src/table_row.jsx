import {
  
    Button,
  Tr,
  Td,
  useDisclosure
  } from "@chakra-ui/react";
import EditWine from "./edit_wine_modal";
import { useNavigate } from "react-router-dom";

const TableRow = ({wines}) => {
    const navigate = useNavigate()
    const {
        isOpen: isOpenEdit,
        onOpen: onOpenEdit,
        onClose: onCloseEdit,
      } = useDisclosure();
    return (
        <>
            {
                wines.map(wine => {
                    return (
                        <Tr>
                            <Td>{wine.name}</Td>
                            <Td>{wine.year}</Td>
                            <Td>{wine.type}</Td>
                            <Td>{wine.varietal}</Td>
                            <Td>{wine.rating}</Td>
                            <Td>
                                <Button onClick={() => navigate('/update_wine', {state: wine})}>Edit</Button>
                            </Td>
                        </Tr>
                        
                    )
                })
            }
            
        </>
    )
      

}
export default TableRow
// {
//     wines ? wines.map((wine) => {
//         return (
//             <Tr>
//     <Td>{wine.name}</Td>
//     <Td>{wine.year}</Td>
//     <Td>{wine.type}</Td>
//     <Td>{wine.varietal}</Td>
//     <Td>{wine.rating}</Td>
//     <Td>
//         <Button>Edit</Button>
//     </Td>
// </Tr>
//         )
//     }) : ""
// }