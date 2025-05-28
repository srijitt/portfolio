import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image, live, source, title} = props;
   return (
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
         <Box
            component="img"
            src={image}
            alt="mockup"
            sx={{ width: '800px', maxWidth: '100%', height: 'auto', mb: 2 }}
         />
         <h1 style={{ fontSize: '2rem' }}>{title}</h1>
         <Box
            className="portfolio"
            display="flex"
            flexDirection="column"
            gap="1rem"
            alignItems="center"
            fontSize="1.5rem"
            py="2rem"
         >
            <Box
               p={0}
               sx={{
                  border: 'none',
                  borderRadius: '999px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  background: 'linear-gradient(90deg, rgb(222, 156, 255) 0%, rgb(212, 126, 255) 100%)',
                  transition: 'transform 0.15s, box-shadow 0.15s',
                  '&:hover': {
                     transform: 'translateY(-2px) scale(1.04)',
                     boxShadow: '0 4px 16px rgba(79,140,255,0.18)',
                     background: 'linear-gradient(90deg, #6fd6ff 0%, #4f8cff 100%)',
                  },
                  px: 3,
                  py: 1,
                  color: '#fff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 600,
                  fontSize: '1.1rem',
               }}
            >
               <IconLink link={live} title="Live Demo" icon="fa fa-safari" />
            </Box>
            <Box
               p={0}
               sx={{
                  border: 'none',
                  borderRadius: '999px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  background: 'linear-gradient(90deg, #232526 0%, #414345 100%)',
                  transition: 'transform 0.15s, box-shadow 0.15s',
                  '&:hover': {
                     transform: 'translateY(-2px) scale(1.04)',
                     boxShadow: '0 4px 16px rgba(35,37,38,0.18)',
                     background: 'linear-gradient(90deg, #414345 0%, #232526 100%)',
                  },
                  px: 3,
                  py: 1,
                  color: '#fff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 600,
                  fontSize: '1.1rem',
               }}
            >
               <IconLink link={source} title="Source Code" icon="fa fa-code" />
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;