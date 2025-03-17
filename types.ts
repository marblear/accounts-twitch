export type LoginStyle = 'popup' | 'redirect';

export interface LoginOptions {
  loginStyle: LoginStyle;
}

export type CredentialRequestCompleteCallback = (credentialTokenOrError: CredentialTokenOrError) => void;

interface  CredentialToken {

}

interface CredentialTokenError {

}

export interface TwitchAccountsInterface {
  requestCredential?(options: LoginOptions, credentialRequestCompleteCallback: CredentialRequestCompleteCallback): void;
}


export type CredentialTokenOrError = CredentialToken | CredentialTokenError;

interface MeteorAccounts {
  oauth: {
    registerService(name: string): void;
    credentialRequestCompleteHandler(callback: CredentialRequestCompleteCallback): CredentialRequestCompleteCallback;
  },
  registerClientLoginFunction: (name: string, func: (options: LoginOptions, callback: () => void ) => void) => void;
  addAutopublishFields: (fields: { forLoggedInUser: string[], forOtherUsers: string[] }) => void;
  applyLoginFunction: (name: string, args: unknown[]) => void;
}

declare let Accounts: MeteorAccounts;

export { Accounts };
