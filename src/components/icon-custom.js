import { Suspense, lazy } from 'react';


const IconSvg = ({path}) => {
  // const LazyIcon = lazy(() => {
  //   return import('../../public/assets/logos/google-icon-svgrepo-com.svg');
  // });
  const LazyIcon = lazy(() => {
    
    
    let obj= import('/public/assets/auth-illustration.svg');

    return typeof obj.default === 'function'?obj:obj.default
  
  
  
  }) 
  return (
    <Suspense>
     <LazyIcon /> 
      
    </Suspense>
  );
};


export default IconSvg;