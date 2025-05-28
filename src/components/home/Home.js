import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box} from "@mui/material";
import {info} from "../../info/Info";

export default function Home({innerRef}) {

   return (
      <Box
         ref={innerRef}
         component="main"
         display="flex"
         flexDirection={{ xs: 'column', md: 'row' }}
         alignItems="center"
         justifyContent="center"
         minHeight="calc(100vh - 175px)"
         id="home"
         sx={{
            px: { xs: 2, md: 6 },
            py: { xs: 4, md: 0 },
            gap: { xs: 4, md: 8 },
            background: Style.background || 'none',
         }}
      >
         <Box
            className={classNames(Style.avatar, Style.shadowed)}
            alt="image of developer"
            sx={{
               background: info.gradient,
               width: { xs: '35vh', md: '40vh' },
               height: { xs: '35vh', md: '40vh' },
               borderRadius: '50%',
               p: '0.75rem',
               mb: { xs: 2, md: 0 },
               mr: { xs: 0, md: 4 },
               boxShadow: 3,
               objectFit: 'cover',
            }}
            component="img"
            src={me}
         />
         <Box
            display="flex"
            flexDirection="column"
            alignItems={{ xs: 'center', md: 'flex-start' }}
            textAlign={{ xs: 'center', md: 'left' }}
            width="100%"
            maxWidth="600px"
         >
            <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 700 }}>
               Hi, I'm{' '}
               <span
                  style={{
                     background: info.gradient,
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                     backgroundClip: 'text',
                     color: 'transparent',
                  }}
               >
                  {info.firstName}
               </span>
               <span className={Style.hand} style={{ marginLeft: 8 }}>
                  🤚
               </span>
            </h1>
            <h2 style={{ margin: '0.5rem 0 1.5rem', fontWeight: 500, fontSize: '2rem', color: '#666' }}>
               I'm {info.position}.
            </h2>
            <Box component="ul" p={0} m={0} sx={{ listStyle: 'none' }}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
               ))}
            </Box>
            <Box
               display="flex"
               gap="1.5rem"
               justifyContent={{ xs: 'center', md: 'flex-start' }}
               alignItems="center"
               fontSize={{ xs: '2rem', md: '2.5rem' }}
               mt={2}
            >
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
         </Box>
      </Box>
   )
}