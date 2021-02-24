export default async function checkAuthentication(
  authState,
  authService,
  userInfo,
  setUserInfo
) {
  const authenticated = await authState.isAuthenticated;
  if (authenticated === authState.isAuthenticated) {
    if (authenticated && !userInfo) {
      const info = await authService.getUser();
      setUserInfo(info);
    }
  } else {
    return setUserInfo(null);
  }
}
