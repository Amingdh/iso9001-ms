import { Injectable } from '@angular/core';
import Keycloak, { KeycloakInstance } from 'keycloak-js';

@Injectable()
export class AuthService {
  private kc?: KeycloakInstance;

  authenticated = false;
  token?: string;
  username?: string;

  async init(): Promise<void> {
    // Configure Keycloak (matches frontend/src/assets/keycloak.json)
    this.kc = new (Keycloak as any)({
      url: 'http://localhost:8085',
      realm: 'iso9001-realm',
      clientId: 'frontend'
    });

    try {
      const authenticated = await (this.kc as KeycloakInstance).init({
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: `${window.location.origin}/assets/silent-check-sso.html`,
        checkLoginIframe: false,
        pkceMethod: 'S256'
      });

      this.authenticated = authenticated;
      if (authenticated) {
        this.token = this.kc?.token || undefined;
        this.username = (this.kc?.tokenParsed as any)?.preferred_username || undefined;

        // Clean up URL hash with repeated Keycloak params
        window.history.replaceState({}, document.title, window.location.origin);

        // Periodically refresh token
        if (this.kc) {
          this.kc.onTokenExpired = async () => {
            try {
              await this.kc?.updateToken(30);
              this.token = this.kc?.token || undefined;
            } catch {
              // If refresh fails, force re-login
              await this.login();
            }
          };
        }
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Keycloak init failed', e);
      this.authenticated = false;
    }
  }

  login(): Promise<void> {
    if (!this.kc) {
      return Promise.resolve();
    }
    return this.kc.login() as Promise<void>;
  }

  logout(): Promise<void> {
    if (!this.kc) {
      return Promise.resolve();
    }
    return this.kc.logout({ redirectUri: window.location.origin }) as Promise<void>;
  }
}

