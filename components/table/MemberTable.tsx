import {
    HStack,
    IconButton,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import {useId} from "react";

type Props = {
    columns: string[],
    data: Array<Array<any>>,
};

export const MemberTable = ({ columns, data }: Props) => (
    <Table>
        <Thead>
            <Tr>
                {
                    columns.map((column) => (
                        <Th key={column}>
                            <Text>{column}</Text>
                        </Th>
                    ))
                }
                <Th>
                    <Text>Actions</Text>
                </Th>
            </Tr>
        </Thead>
        <Tbody>
            {data.map((row) => (
                <Tr key={useId()}>
                    {
                        row.map((cell) => (
                            <Td key={cell}>
                                <Text>{cell}</Text>
                            </Td>
                        ))
                    }
                    <Td>
                        <HStack spacing="1">
                            <IconButton icon={<FiTrash2 />} variant="tertiary" aria-label="Delete member" />
                            <IconButton icon={<FiEdit2 />} variant="tertiary" aria-label="Edit member" />
                        </HStack>
                    </Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
)
