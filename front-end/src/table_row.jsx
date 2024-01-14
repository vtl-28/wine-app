import {
  
    Button,
  Tr,
  Td
  } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const TableRow = ({wines}) => {
    const navigate = useNavigate()
  
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