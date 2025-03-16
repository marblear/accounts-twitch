interface AccountsTwitchInterface {
  clientId?: string;
  secret?: string;
  config?(options: { clientId: string; secret: string; }): void;
}

declare let Types: AccountsTwitchInterface;

Types = undefined;
Types = {};

export default Types;

interface  CredentialToken {

}

interface CredentialTokenError {

}

export type CredentialTokenOrError = CredentialToken | CredentialTokenError;

interface MeteorAccounts {
  oauth: {
    registerService(name: string): void;
    credentialRequestCompleteHandler(callback: (credentialTokenOrError: CredentialTokenOrError) => void): (credentialTokenOrError: CredentialTokenOrError) => void;
  },
  registerClientLoginFunction: (name: string, func: (options: unknown, callback: () => void ) => void) => void;
  addAutopublishFields: (fields: { forLoggedInUser: string[], forOtherUsers: string[] }) => void;
  applyLoginFunction: (name: string, args: unknown[]) => void;
}

declare let Accounts: MeteorAccounts;

export { Accounts };
