import { TwitchAccountsInterface } from './types';

declare let TwitchAccounts: TwitchAccountsInterface;

TwitchAccounts = {}; // makes TypeScript happy
TwitchAccounts = {};

export default TwitchAccounts;
