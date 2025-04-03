/* eslint-disable @typescript-eslint/camelcase */
import { createUserManager } from 'redux-oidc';
import { UserManagerSettings } from 'oidc-client';

//конфигурация по которой создается openIdConnection, тут ничего не меняется
const userManagerConfig: UserManagerSettings = {
  client_id: 'ebankclient',
  redirect_uri: 'http://localhost:5173/signin-oidc',//ведёт к CallbackPage(Redirect/)
  response_type: 'token id_token',
  scope: 'openid bankapi',
  authority: 'https://localhost:5001',
  filterProtocolClaims: true,
  loadUserInfo: true,
  monitorSession: true,
  post_logout_redirect_uri: 'http://localhost:5173/signout-oidc'
};

const userManager = createUserManager(userManagerConfig);

export default userManager;