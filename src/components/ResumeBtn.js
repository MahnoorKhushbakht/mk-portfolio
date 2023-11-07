import Resume from '../Docs/MahnoorKhushbakht_CV.pdf';
import { Button, CircularProgress, Box } from '@chakra-ui/react';
import * as React from 'react';
import { DownloadIcon } from '@chakra-ui/icons';

export default function ResumeBtn() {
  const [loading, setLoading] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleDownload = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <a href={Resume} download>
        <Button
          onClick={handleDownload}
          size='lg'
          display='flex'
          justifyContent='left'
          marginBottom='20px'
          sx={{
            background: '#4F4A45',
            color: '#ED7D31',
            '&:hover': {
              background: '#F6F1EE',
              color: '#4F4A45',
            },
          }}
          variant='contained'
          disabled={loading}
        >
          {!loading && (
            <>
              Resume
              <DownloadIcon marginRight='2px' w={6} h={6} color='#4F4A45.500' />
            </>
          )}
          {loading && (
            <Box ml='2'>
              <CircularProgress size='30px' color='orange.300' value={progress} thickness={6} />
            </Box>
          )}
        </Button>
      </a>
    </>
  );
}
