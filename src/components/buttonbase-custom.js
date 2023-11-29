import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';
import dynamic from 'next/dynamic'
import IconSvg from './icon-custom';
import { GoogleIcon } from 'public/assets/logos/google-icon';
export const ButtonBaseCustom = (props) => {
  const { active = false, disabled, external, icon, path, title, handleOnclick } = props;

  // const linkProps = path
  //   ? external
  //     ? {
  //       component: 'a',
  //       href: path,
  //       target: '_blank'
  //     }
  //     : {
  //       component: NextLink,
  //       href: path
  //     }
  //   : {};

    // const DynamicIcon = dynamic(() => import(icon), {
    //   loading: () => <p>Loading...</p>,
    // })

  return (
      <Button
      onClick={()=>handleOnclick()}
      fullWidth
      size="large"
      sx={{ mt: 3 }}
      type="submit"
      variant="contained"
      >
        {icon && (
          <Box
            // component={NextLink}
            // href="/"
            sx={{
             
              display: 'inline-flex',
              height: 26,
              width: 30
            }}
          >
       {icon}
          </Box>
        )}    
        <Box
       
          sx={{
            
            ml:2,
            fontFamily: (theme) => theme.typography.fontFamily,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: '24px',
            whiteSpace: 'nowrap',
            ...(active && {
              color: 'common.white'
            }),
            ...(disabled && {
              color: 'neutral.500'
            })
          }}
        >
          {title}
        </Box>
      </Button>
  );
};

ButtonBaseCustom.propTypes = {
  
  icon: PropTypes.node,
  title: PropTypes.string.isRequired
};
