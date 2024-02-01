'use client'

import {
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  useDisclosure,
  useMergeRefs,
} from '@chakra-ui/react';
import { forwardRef, useRef } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';

export const PasswordField = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { isOpen, onToggle } = useDisclosure()
  const inputRef = useRef<HTMLInputElement>(null)

  const mergeRef = useMergeRefs(inputRef, ref)
  const onClickReveal = () => {
    onToggle()
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true })
    }
  }

  return (
    <FormControl>
      <InputGroup>
        <InputRightElement>
          <IconButton
            tabIndex="-1"
            variant="text"
            aria-label={isOpen ? 'Mask password' : 'Reveal password'}
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={onClickReveal}
          />
        </InputRightElement>
        <Input
          id="password"
          ref={mergeRef}
          name="password"
          type={isOpen ? 'text' : 'password'}
          autoComplete="current-password"
          placeholder="Enter password"
          required
          {...props}
        />
      </InputGroup>
    </FormControl>
  )
});

PasswordField.displayName = 'PasswordField';

