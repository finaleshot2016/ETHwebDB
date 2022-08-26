import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  btn: {
    height: 52,
    backgroundImage: 'linear-gradient(to right, #d90993 0%, #d90993 40%, #fff 100%)',
    backgroundSize: '200% auto',
    fontSize: theme.fontSizes.md,
    textTransform: 'uppercase',
    borderRadius: 20,
    border: '1px solid #fff',
    transition: theme.other.transitions.background,

    '&:hover': {
      backgroundPositionX: 'right',
      backgroundPositionY: 'center',
    },
  },
}));

export default useStyles;
