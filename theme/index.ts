import { extendTheme, theme as baseTheme } from '@chakra-ui/react';
import * as components from './components';
import * as foundations from './foundations';

const proTheme: Record<string, unknown> = {
  ...foundations,
  components: { ...components },
}

export const theme = extendTheme(
    {
      colors: { ...baseTheme.colors, brand: baseTheme.colors.blue },
    },
    proTheme,
);
