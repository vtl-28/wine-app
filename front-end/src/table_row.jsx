import {
    Button,
    Tr,
    Td
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const TableRow = ({ wines }) => {
    const navigate = useNavigate()

    return (
        <>
            {
                wines.map(wine => {
                    return (
                        <Tr bg='#600202' className="opacity-60">
                            <Td fontWeight="semibold" color='#fff'>{wine.name}</Td>
                            <Td fontWeight="semibold" color='#fff'>{wine.year}</Td>
                            <Td fontWeight="semibold" color='#fff'>{wine.type}</Td>
                            <Td fontWeight="semibold" color='#fff'>{wine.varietal}</Td>
                            <Td fontWeight="semibold" color='#fff'>{wine.rating}</Td>
                            <Td fontWeight="semibold" color='#fff'>
                                <Button bg='#fff'
                                    borderRightRadius="0"
                                    borderLeftRadius="0" _hover={{
                                        background: "white",
                                    }} onClick={() => navigate('/update_wine', { state: wine })}>Edit</Button>
                            </Td>
                        </Tr>

                    )
                })
            }

        </>
    )


}
export default TableRow