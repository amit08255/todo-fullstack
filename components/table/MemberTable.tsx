import {
  Avatar,
  Badge,
  Box,
  Checkbox,
  HStack,
  Icon,
  IconButton,
  Table,
  TableProps,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { Rating } from './Rating';
import { members } from './data';

export const MemberTable = (props: TableProps) => (
  <Table {...props}>
    <Thead>
      <Tr>
        <Th>
          <HStack spacing="3">
            <Checkbox />
            <HStack spacing="1">
              <Text>Name</Text>
            </HStack>
          </HStack>
        </Th>
        <Th>Status</Th>
        <Th>Email</Th>
        <Th>Role</Th>
        <Th>Rating</Th>
        <Th></Th>
      </Tr>
    </Thead>
    <Tbody>
      {members.map((member) => (
        <Tr key={member.id}>
          <Td>
            <HStack spacing="3">
              <Checkbox />
              <Avatar name={member.name} src={member.avatarUrl} boxSize="10" />
              <Box>
                <Text fontWeight="medium">{member.name}</Text>
                <Text color="fg.muted">{member.handle}</Text>
              </Box>
            </HStack>
          </Td>
          <Td>
            <Badge size="sm" colorScheme={member.status === 'active' ? 'green' : 'red'}>
              {member.status}
            </Badge>
          </Td>
          <Td>
            <Text color="fg.muted">{member.email}</Text>
          </Td>
          <Td>
            <Text color="fg.muted">{member.role}</Text>
          </Td>
          <Td>
            <Text color="fg.muted">
              <Rating defaultValue={member.rating} size="xl" />
            </Text>
          </Td>
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
