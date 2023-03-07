import { Box, Button, Image, Stack} from '@chakra-ui/react';
import { Textfit } from 'react-textfit';
import './Sidebar.css';
import { GoOctoface, GoInbox, GoFilePdf } from 'react-icons/go';

export default function Main() {
  return (
    <Box
      style={{
        width: '200px',
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack spacing={4}>
        <Image
          borderRadius='full'
          boxsize='200px'
          src={require('../assets/headshot.jpg')}
          alt='Me!'
        />
        <Textfit mode='single' style={{ color: 'white' }}>
          Imani D. Pelton
        </Textfit>
        <Button
          leftIcon={<GoOctoface />}
          colorScheme='teal'
          variant='ghost'
          onClick={() => (window.location = 'https://github.com/bepri')}
        >
          Github
        </Button>
        <Button
          leftIcon={<GoInbox />}
          colorScheme='teal'
          variant='ghost'
          onClick={() => (window.location = 'mailto:imani@bepri.dev')}
        >
          Email
        </Button>
        <Button
          leftIcon={<GoFilePdf />}
          colorScheme='teal'
          variant='ghost'
          onClick={() => (window.location = 'assets/resume.pdf')}
        >
          Résumé
        </Button>
      </Stack>
    </Box>
  );
}
