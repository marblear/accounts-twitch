interface AccountsTwitchInterface {
  clientId?: string;
  secret?: string;
  config?(options: { clientId: string; secret: string; }): void;
}

declare let AccountsTwitch: AccountsTwitchInterface;
