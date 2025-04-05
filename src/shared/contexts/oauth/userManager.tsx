/* eslint-disable @typescript-eslint/camelcase */
import { createUserManager } from 'redux-oidc';
import { UserManagerSettings } from 'oidc-client';
import { UserRole } from '@shared/api';

//конфигурация по которой создается openIdConnection, тут ничего не меняется
const userManagerConfig: UserManagerSettings = {
  client_id: 'ebankclient',
  redirect_uri: import.meta.env["VITE_APP_TYPE"]===UserRole.Client ? 'http://localhost:5175/signin-oidc' : 'http://localhost:5174/signin-oidc',//ведёт к CallbackPage(Redirect/)
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