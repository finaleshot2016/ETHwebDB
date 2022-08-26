import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    padding: 5,
    background: 'transparent linear-gradient(117deg, #ec4899 0%, #ce3e9c 75%, #fff 100%) 0% 0% no-repeat padding-box',
    backdropFilter: 'blur(1000px)',
    border: '4px solid #fff',
    borderRadius: 14,
  },
}));

export default useStyles;
