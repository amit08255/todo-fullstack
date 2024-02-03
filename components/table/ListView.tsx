import {
    Box,
    Button,
    ButtonGroup,
    Container,
    HStack,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';

type Props = {
    hasNext: boolean,
    hasPrevious: boolean,
    onPrevious: () => void,
    onNext: () => void,
    title: string,
    total: number,
    start: number,
    end: number,
    children?: React.ReactNode,
}

export const ListView = ({
    hasNext, hasPrevious, onNext, onPrevious, end, start, total, children, title,
}: Props) => {
    const isMobile = useBreakpointValue({base: true, md: false})
    return (
        <Container maxW="10xl" py={{base: '4', md: '8'}} px={{base: '0', md: 8}}>
            <Box
                bg="bg.surface"
                boxShadow={{base: 'none', md: 'sm'}}
                borderRadius={{base: 'none', md: 'lg'}}
            >
                <Stack spacing="5">
                    <Box px={{base: '4', md: '6'}} pt="5">
                        <Stack direction={{base: 'column', md: 'row'}} justify="space-between">
                            <Text textStyle="lg" fontWeight="medium">
                                {title}
                            </Text>
                            {/*  Select here */}
                        </Stack>
                    </Box>
                    <Box overflowX="auto" height="calc(100vh - 213px)">
                        {children}
                    </Box>
                    <Box px={{base: '4', md: '6'}} pb="5">
                        <HStack spacing="3" justify="space-between">
                            {!isMobile && (
                                <Text color="fg.muted" textStyle="sm">
                                    {`Showing ${start} to ${end} of ${total} results`}
                                </Text>
                            )}
                            <ButtonGroup
                                spacing="3"
                                justifyContent="space-between"
                                width={{base: 'full', md: 'auto'}}
                                variant="secondary"
                            >
                                <Button isDisabled={!hasPrevious} onClick={onPrevious}>Previous</Button>
                                <Button isDisabled={!hasNext} onClick={onNext}>Next</Button>
                            </ButtonGroup>
                        </HStack>
                    </Box>
                </Stack>
            </Box>
        </Container>
    )
};

ListView.defaultProps = {
    children: null,
};

