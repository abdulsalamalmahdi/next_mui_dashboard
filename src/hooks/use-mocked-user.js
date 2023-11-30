export const useMockedUser = () => {
  // To get the user from the authContext, you can use
  // `const { user } = useAuth();`
  const PREFIX = process.env.NODE_ENV === 'production' ? '/next_mui_dashboard':'';

  return {
    id: '5e86809283e28b96d2d38537',
    avatar: `${PREFIX}/avatars/avatar-anika-visser.png`,
    name: 'Anika Visser',
    email: 'anika.visser@devias.io'
  };
};
