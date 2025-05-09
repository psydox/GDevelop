// @flow
import {
  type Usages,
  type Subscription,
  type Limits,
} from '../../Utils/GDevelopServices/Usage';
import { User as FirebaseUser } from 'firebase/auth';
import { type Profile } from '../../Utils/GDevelopServices/Authentication';
import { type Release } from '../../Utils/GDevelopServices/Release';
import {
  type Build,
  type SigningCredential,
} from '../../Utils/GDevelopServices/Build';
import { type CloudProjectWithUserAccessInfo } from '../../Utils/GDevelopServices/Project';
import {
  type ExtensionShortHeader,
  type ExtensionHeader,
} from '../../Utils/GDevelopServices/Extension';
import { type UserPublicProfile } from '../../Utils/GDevelopServices/User';
import { type ExampleShortHeader } from '../../Utils/GDevelopServices/Example';
import {
  type Game,
  type PublicGame,
  type ShowcasedGame,
} from '../../Utils/GDevelopServices/Game';
import { type GameMetrics } from '../../Utils/GDevelopServices/Analytics';
import { type AuthenticatedUser } from '../../Profile/AuthenticatedUserContext';
import {
  type AssetShortHeader,
  type Asset,
  type PublicAssetPacks,
} from '../../Utils/GDevelopServices/Asset';
import { formatISO, subDays } from 'date-fns';
import { type Comment } from '../../Utils/GDevelopServices/Play';
import {
  type Announcement,
  type Promotion,
} from '../../Utils/GDevelopServices/Announcement';
import { type PrivateGameTemplateListingData } from '../../Utils/GDevelopServices/Shop';
import { fakeAchievements } from './FakeAchievements';
import { type FileMetadataAndStorageProviderName } from '../../ProjectsStorage';

export const indieFirebaseUser: FirebaseUser = {
  uid: 'indie-user',
  providerId: 'fake-provider.com',
  email: 'indie-user@example.com',
  emailVerified: false,
};

export const indieVerifiedFirebaseUser: FirebaseUser = {
  uid: 'indie-user',
  providerId: 'fake-provider.com',
  email: 'indie-user@example.com',
  emailVerified: true,
};

export const cloudProjectsForIndieUser: Array<CloudProjectWithUserAccessInfo> = [
  {
    id: 'af7a8282-746d-4d3a-8cb8-bb8cd9372143',
    name: 'Worms 2D',
    createdAt: '2022-02-05T00:36:53.972Z',
    updatedAt: '2022-02-07T00:36:53.972Z',
    lastModifiedAt: '2022-02-07T00:36:53.972Z',
  },
  {
    id: 'fb4d878a-1935-4916-b681-f9235475d35c',
    name: 'Crash Bandicoot',
    createdAt: '2020-01-24T00:36:53.972Z',
    updatedAt: '2022-02-07T00:36:53.972Z',
    lastModifiedAt: '2020-02-06T00:36:53.972Z',
  },
];

export const tenCloudProjects: Array<CloudProjectWithUserAccessInfo> = [
  {
    id: 'af7a8282-746d-4d3a-8cb8-bb8cd9372141',
    name: 'Worms 2D 1',
    createdAt: '2022-02-05T00:36:53.972Z',
    updatedAt: '2022-02-07T00:36:53.972Z',
    lastModifiedAt: '2022-02-07T00:36:53.972Z',
  },
  {
    id: 'fb4d878a-1935-4916-b681-f9235475d352',
    name: 'Crash Bandicoot 2',
    createdAt: '2020-01-24T00:36:53.972Z',
    updatedAt: '2022-02-07T00:36:53.972Z',
    lastModifiedAt: '2020-02-06T00:36:53.972Z',
  },
  {
    id: 'af7a8282-746d-4d3a-8cb8-bb8cd9372143',
    name: 'Worms 2D 3',
    createdAt: '2022-02-05T00:36:53.972Z',
    updatedAt: '2022-02-05T00:36:53.972Z',
    lastModifiedAt: '2022-02-07T00:36:53.972Z',
  },
  {
    id: 'fb4d878a-1935-4916-b681-f9235475d354',
    name: 'Crash Bandicoot 4',
    createdAt: '2020-01-24T00:36:53.972Z',
    updatedAt: '2022-02-07T00:36:53.972Z',
    lastModifiedAt: '2020-02-06T00:36:53.972Z',
  },
  {
    id: 'af7a8282-746d-4d3a-8cb8-bb8cd9372145',
    name: 'Worms 2D 5',
    createdAt: '2022-02-05T00:36:53.972Z',
    updatedAt: '2022-02-05T00:36:53.972Z',
    lastModifiedAt: '2022-02-07T00:36:53.972Z',
  },
  {
    id: 'fb4d878a-1935-4916-b681-f9235475d356',
    name: 'Crash Bandicoot 6',
    createdAt: '2020-01-24T00:36:53.972Z',
    updatedAt: '2020-01-24T00:36:53.972Z',
    lastModifiedAt: '2020-02-06T00:36:53.972Z',
  },
  {
    id: 'af7a8282-746d-4d3a-8cb8-bb8cd9372147',
    name: 'Worms 2D 7',
    createdAt: '2022-02-05T00:36:53.972Z',
    updatedAt: '2022-02-05T00:36:53.972Z',
    lastModifiedAt: '2022-02-07T00:36:53.972Z',
  },
  {
    id: 'fb4d878a-1935-4916-b681-f9235475d358',
    name: 'Crash Bandicoot 8',
    createdAt: '2020-01-24T00:36:53.972Z',
    updatedAt: '2020-01-24T00:36:53.972Z',
    lastModifiedAt: '2020-02-06T00:36:53.972Z',
  },
  {
    id: 'af7a8282-746d-4d3a-8cb8-bb8cd9372149',
    name: 'Worms 2D 9',
    createdAt: '2022-02-05T00:36:53.972Z',
    updatedAt: '2022-02-05T00:36:53.972Z',
    lastModifiedAt: '2022-02-07T00:36:53.972Z',
  },
  {
    id: 'fb4d878a-1935-4916-b681-f9235475d350',
    name: 'Crash Bandicoot 10',
    createdAt: '2020-01-24T00:36:53.972Z',
    updatedAt: '2020-01-24T00:36:53.972Z',
    lastModifiedAt: '2020-02-06T00:36:53.972Z',
  },
];

export const indieUserProfile: Profile = {
  id: 'indie-user',
  email: 'indie-user@example.com',
  username: 'im-the-indie-user',
  description: 'Just here to develop indie games',
  getGameStatsEmail: false,
  getNewsletterEmail: true,
  createdAt: 12345,
  updatedAt: 12345,
  appLanguage: null,
  isCreator: true,
  isPlayer: false,
  isEmailAutogenerated: false,
  donateLink: 'https://www.paypal.me/indie-user',
  discordUsername: 'indie-user#1234',
  communityLinks: {
    personalWebsiteLink: 'https://indie-user.com',
    personalWebsite2Link: 'https://indie-user2.com',
    twitterUsername: 'indie-user',
    facebookUsername: 'indie-user',
    youtubeUsername: 'indie-user',
    tiktokUsername: 'indie-user',
    instagramUsername: 'indie-user',
    redditUsername: 'indie-user',
    snapchatUsername: 'indie-user',
    discordServerLink: 'https://discord.gg/indie-user',
  },
};

export const userEarningsBalance = {
  userId: 'userId',
  amountInMilliUSDs: 6730,
  amountInCredits: 890,
  minAmountToCashoutInMilliUSDs: 60000,
  updatedAt: 1515084391000,
};
export const userEarningsBalanceEmpty = {
  userId: 'userId',
  amountInMilliUSDs: 0,
  amountInCredits: 0,
  minAmountToCashoutInMilliUSDs: 60000,
  updatedAt: 1515084391000,
};

export const usagesForIndieUser: Usages = [
  {
    id: '1',
    userId: 'indie-user',
    type: 'cordova-build',
    createdAt: 1515084391000,
  },
  {
    id: '56',
    userId: 'indie-user',
    type: 'cordova-build',
    createdAt: 1515084351000,
  },
  {
    id: '75',
    userId: 'indie-user',
    type: 'cordova-build',
    createdAt: 1515084311000,
  },
];

export const subscriptionForIndieUser: Subscription = {
  planId: 'gdevelop_indie',
  createdAt: 1515084011000,
  updatedAt: 1515084011000,
  userId: 'indie-user',
  pricingSystemId: 'indie_1month',
};

export const subscriptionForProUser: Subscription = {
  planId: 'gdevelop_pro',
  createdAt: 1515084011000,
  updatedAt: 1515084011000,
  userId: 'pro-user',
  pricingSystemId: 'pro_1month',
};

export const subscriptionForSilverUser: Subscription = {
  planId: 'gdevelop_silver',
  createdAt: 1515084011000,
  updatedAt: 1515084011000,
  userId: 'silver-user',
  pricingSystemId: 'silver_1month_499EUR',
};

export const subscriptionForGoldUser: Subscription = {
  planId: 'gdevelop_gold',
  createdAt: 1515084011000,
  updatedAt: 1515084011000,
  userId: 'gold-user',
  pricingSystemId: 'gold_1month_999EUR',
};

export const subscriptionForStartupUser: Subscription = {
  planId: 'gdevelop_startup',
  createdAt: 1515084011000,
  updatedAt: 1515084011000,
  userId: 'startup-user',
  pricingSystemId: 'startup_1month_3000EUR',
};

export const subscriptionForEducationPlan: Subscription = {
  planId: 'gdevelop_education',
  createdAt: 1515084011000,
  updatedAt: 1515084011000,
  userId: 'teacher-user',
  pricingSystemId: 'education_1month_299EUR',
};

export const subscriptionForGoldUserFromEducationPlan: Subscription = {
  planId: 'gdevelop_gold',
  createdAt: 1515084011000,
  updatedAt: 1515084011000,
  userId: 'silver-user',
  benefitsFromEducationPlan: true,
  pricingSystemId: 'TEAM_MEMBER',
};

export const purchaselyGoldSubscription: Subscription = {
  planId: 'gdevelop_gold',
  createdAt: 1515084011000,
  updatedAt: 1515084011000,
  userId: 'silver-user',
  purchaselyPlan: 'gdevelop_gold_whatever',
  pricingSystemId: 'PURCHASELY_gdevelop_gold_whatever',
};

export const silverSubscriptionWithRedemptionCode: Subscription = {
  planId: 'gdevelop_silver',
  createdAt: 1515084011000,
  updatedAt: 1515084011000,
  userId: 'silver-user',
  redemptionCode: 'test-123-code',
  redemptionCodeValidUntil: 1923400438000,
  pricingSystemId: 'REDEMPTION_CODE',
};

export const silverSubscriptionWithExpiredRedemptionCode: Subscription = {
  planId: 'gdevelop_silver',
  createdAt: 1515084011000,
  updatedAt: 1515084011000,
  userId: 'silver-user',
  redemptionCode: 'test-123-code',
  redemptionCodeValidUntil: Date.now() - 1000,
  pricingSystemId: 'REDEMPTION_CODE',
};

export const silverSubscriptionButCancelAtPeriodEnd: Subscription = {
  planId: 'gdevelop_silver',
  createdAt: 1515084011000,
  updatedAt: 1515084011000,
  userId: 'silver-user',
  cancelAtPeriodEnd: true,
  pricingSystemId: 'silver_1month_499EUR',
};

export const noSubscription: Subscription = {
  planId: null,
  createdAt: 1515084011000,
  updatedAt: 1515084011000,
  userId: 'no-subscription-user',
  pricingSystemId: null,
};

const prices = {
  'cordova-build': {
    priceInCredits: 50,
  },
  'cordova-ios-build': {
    priceInCredits: 100,
  },
  'electron-build': {
    priceInCredits: 50,
  },
  'ai-project-generation': {
    priceInCredits: 0,
  },
  'web-build': {
    priceInCredits: 0,
  },
  'featuring-basic': {
    priceInCredits: 500,
  },
  'featuring-pro': {
    priceInCredits: 1000,
  },
  'featuring-premium': {
    priceInCredits: 3000,
  },
};

export const limitsForNoSubscriptionUser: Limits = {
  capabilities: {
    analytics: {
      sessions: true,
      players: false,
      retention: false,
      sessionsTimeStats: false,
      platforms: false,
    },
    cloudProjects: {
      maximumCount: 3,
      canMaximumCountBeIncreased: true,
      maximumGuestCollaboratorsPerProject: 0,
    },
    leaderboards: {
      maximumCountPerGame: 3,
      canMaximumCountPerGameBeIncreased: true,
      themeCustomizationCapabilities: 'NONE',
      canUseCustomCss: false,
      canDisableLoginInLeaderboard: false,
    },
    multiplayer: {
      lobbiesCount: 1,
      maxPlayersPerLobby: 4,
      themeCustomizationCapabilities: 'NONE',
    },
    versionHistory: { enabled: false },
  },
  quotas: {
    'cordova-build': {
      current: 0,
      max: 2,
      limitReached: false,
    },
    'ai-project-generation': {
      current: 0,
      max: 3,
      limitReached: false,
    },
    'ask-question': {
      current: 1,
      max: 3,
      limitReached: false,
    },
  },
  credits: {
    userBalance: {
      amount: 0,
    },
    prices,
    purchasableQuantities: {},
  },
  message: undefined,
};

export const limitsForSilverUser: Limits = {
  capabilities: {
    analytics: {
      sessions: true,
      players: true,
      retention: true,
      sessionsTimeStats: true,
      platforms: true,
    },
    cloudProjects: {
      maximumCount: 50,
      canMaximumCountBeIncreased: true,
      maximumGuestCollaboratorsPerProject: 0,
    },
    leaderboards: {
      maximumCountPerGame: -1,
      canMaximumCountPerGameBeIncreased: false,
      themeCustomizationCapabilities: 'BASIC',
      canUseCustomCss: false,
      canDisableLoginInLeaderboard: false,
    },
    multiplayer: {
      lobbiesCount: -1,
      maxPlayersPerLobby: 8,
      themeCustomizationCapabilities: 'BASIC',
    },
    versionHistory: { enabled: false },
  },
  quotas: {
    'cordova-build': {
      current: 2,
      max: 10,
      limitReached: false,
    },
    'ai-project-generation': {
      current: 3,
      max: 1000,
      limitReached: false,
    },
    'ask-question': {
      current: 1,
      max: 10,
      limitReached: false,
    },
  },
  credits: {
    userBalance: {
      amount: 0,
    },
    prices,
    purchasableQuantities: {},
  },
  message: undefined,
};

export const limitsForGoldUser: Limits = {
  capabilities: {
    analytics: {
      sessions: true,
      players: true,
      retention: true,
      sessionsTimeStats: true,
      platforms: true,
    },
    cloudProjects: {
      maximumCount: 100,
      canMaximumCountBeIncreased: true,
      maximumGuestCollaboratorsPerProject: 0,
    },
    leaderboards: {
      maximumCountPerGame: -1,
      canMaximumCountPerGameBeIncreased: false,
      themeCustomizationCapabilities: 'FULL',
      canUseCustomCss: false,
      canDisableLoginInLeaderboard: false,
    },
    multiplayer: {
      lobbiesCount: -1,
      maxPlayersPerLobby: 8,
      themeCustomizationCapabilities: 'BASIC',
    },
    versionHistory: { enabled: false },
  },
  quotas: {
    'cordova-build': {
      current: 2,
      max: 70,
      limitReached: false,
    },
    'ai-project-generation': {
      current: 3,
      max: 1000,
      limitReached: false,
    },
    'ask-question': {
      current: 1,
      max: 3,
      limitReached: false,
    },
  },
  credits: {
    userBalance: {
      amount: 0,
    },
    prices,
    purchasableQuantities: {},
  },
  message: undefined,
};

export const limitsForTeacherUser: Limits = {
  capabilities: {
    analytics: {
      sessions: true,
      players: true,
      retention: true,
      sessionsTimeStats: true,
      platforms: true,
    },
    cloudProjects: {
      maximumCount: 100,
      canMaximumCountBeIncreased: false,
      maximumGuestCollaboratorsPerProject: 0,
    },
    leaderboards: {
      maximumCountPerGame: -1,
      canMaximumCountPerGameBeIncreased: false,
      themeCustomizationCapabilities: 'FULL',
      canUseCustomCss: false,
      canDisableLoginInLeaderboard: false,
    },
    privateTutorials: {
      allowedIdPrefixes: ['education-curriculum-'],
    },
    classrooms: {
      hidePlayTab: false,
      hidePremiumProducts: false,
      hideUpgradeNotice: false,
      hideSocials: false,
      showClassroomTab: true,
    },
    multiplayer: {
      lobbiesCount: -1,
      maxPlayersPerLobby: 8,
      themeCustomizationCapabilities: 'BASIC',
    },
    versionHistory: { enabled: true },
  },
  quotas: {
    'cordova-build': {
      current: 2,
      max: 70,
      limitReached: false,
    },
    'ai-project-generation': {
      current: 3,
      max: 1000,
      limitReached: false,
    },
    'ask-question': {
      current: 1,
      max: 3,
      limitReached: false,
    },
  },
  credits: {
    userBalance: {
      amount: 0,
    },
    prices,
    purchasableQuantities: {},
  },
  message: undefined,
};

export const limitsForStudentUser: Limits = {
  capabilities: {
    analytics: {
      sessions: true,
      players: true,
      retention: true,
      sessionsTimeStats: true,
      platforms: true,
    },
    cloudProjects: {
      maximumCount: 100,
      canMaximumCountBeIncreased: false,
      maximumGuestCollaboratorsPerProject: 0,
    },
    leaderboards: {
      maximumCountPerGame: -1,
      canMaximumCountPerGameBeIncreased: false,
      themeCustomizationCapabilities: 'FULL',
      canUseCustomCss: false,
      canDisableLoginInLeaderboard: false,
    },
    classrooms: {
      hidePlayTab: true,
      hidePremiumProducts: true,
      hideSocials: true,
      hideUpgradeNotice: true,
      showClassroomTab: false,
    },
    multiplayer: {
      lobbiesCount: -1,
      maxPlayersPerLobby: 8,
      themeCustomizationCapabilities: 'BASIC',
    },
    versionHistory: { enabled: true },
  },
  quotas: {
    'cordova-build': {
      current: 2,
      max: 70,
      limitReached: false,
    },
    'ai-project-generation': {
      current: 3,
      max: 1000,
      limitReached: false,
    },
    'ask-question': {
      current: 1,
      max: 3,
      limitReached: false,
    },
  },
  credits: {
    userBalance: {
      amount: 0,
    },
    prices,
    purchasableQuantities: {},
  },
  message: undefined,
};

export const limitsForStartupUser: Limits = {
  capabilities: {
    analytics: {
      sessions: true,
      players: true,
      retention: true,
      sessionsTimeStats: true,
      platforms: true,
    },
    cloudProjects: {
      maximumCount: 500,
      canMaximumCountBeIncreased: false,
      maximumGuestCollaboratorsPerProject: 1,
    },
    leaderboards: {
      maximumCountPerGame: -1,
      canMaximumCountPerGameBeIncreased: false,
      themeCustomizationCapabilities: 'FULL',
      canUseCustomCss: true,
      canDisableLoginInLeaderboard: true,
    },
    multiplayer: {
      lobbiesCount: -1,
      maxPlayersPerLobby: 8,
      themeCustomizationCapabilities: 'FULL',
    },
    versionHistory: { enabled: true },
  },
  quotas: {
    'cordova-build': {
      current: 2,
      max: 1000,
      limitReached: false,
    },
    'ai-project-generation': {
      current: 3,
      max: 1000,
      limitReached: false,
    },
    'ask-question': {
      current: 1,
      max: 3,
      limitReached: false,
    },
  },
  credits: {
    userBalance: {
      amount: 0,
    },
    prices,
    purchasableQuantities: {},
  },
  message: undefined,
};

export const limitsReached: Limits = {
  capabilities: {
    analytics: {
      sessions: true,
      players: true,
      retention: true,
      sessionsTimeStats: true,
      platforms: true,
    },
    cloudProjects: {
      maximumCount: 10,
      canMaximumCountBeIncreased: true,
      maximumGuestCollaboratorsPerProject: 0,
    },
    leaderboards: {
      maximumCountPerGame: 3,
      canMaximumCountPerGameBeIncreased: true,
      themeCustomizationCapabilities: 'BASIC',
      canUseCustomCss: false,
      canDisableLoginInLeaderboard: false,
    },
    multiplayer: {
      lobbiesCount: -1,
      maxPlayersPerLobby: 8,
      themeCustomizationCapabilities: 'BASIC',
    },
    versionHistory: { enabled: false },
  },
  quotas: {
    'cordova-build': {
      current: 10,
      max: 10,
      limitReached: true,
    },
    'ai-project-generation': {
      current: 3,
      max: 3,
      limitReached: true,
    },
  },
  credits: {
    userBalance: {
      amount: 0,
    },
    prices,
    purchasableQuantities: {},
  },
  message: undefined,
};

export const limitsForNoSubscriptionUserWithCredits: Limits = {
  capabilities: {
    analytics: {
      sessions: true,
      players: false,
      retention: false,
      sessionsTimeStats: false,
      platforms: false,
    },
    cloudProjects: {
      maximumCount: 10,
      canMaximumCountBeIncreased: true,
      maximumGuestCollaboratorsPerProject: 0,
    },
    leaderboards: {
      maximumCountPerGame: 3,
      canMaximumCountPerGameBeIncreased: true,
      themeCustomizationCapabilities: 'NONE',
      canUseCustomCss: false,
      canDisableLoginInLeaderboard: false,
    },
    multiplayer: {
      lobbiesCount: 1,
      maxPlayersPerLobby: 4,
      themeCustomizationCapabilities: 'NONE',
    },
    versionHistory: { enabled: false },
  },
  quotas: {
    'cordova-build': {
      current: 0,
      max: 2,
      limitReached: false,
    },
    'ai-project-generation': {
      current: 0,
      max: 3,
      limitReached: false,
    },
  },
  credits: {
    userBalance: {
      amount: 1000,
    },
    prices,
    purchasableQuantities: {},
  },
  message: undefined,
};

export const defaultAuthenticatedUserWithNoSubscription: AuthenticatedUser = {
  authenticated: true,
  profile: indieUserProfile,
  loginState: 'done',
  creatingOrLoggingInAccount: false,
  authenticationError: null,
  badges: null,
  cloudProjects: [],
  notifications: [],
  recommendations: [
    {
      type: 'gdevelop-tutorial',
      id: 'playlist-get-started',
    },
    {
      type: 'gdevelop-tutorial',
      id: 'gdevelop-teaching-kids',
    },
    {
      type: 'gdevelop-tutorial',
      id: 'tween-behavior',
    },
    {
      type: 'gdevelop-tutorial',
      id: 'wiki-play-music-and-sounds',
    },
    {
      type: 'gdevelop-tutorial',
      id: 'wiki-prefabs',
    },
    {
      type: 'guided-lessons',
      lessonsIds: ['healthBar', 'timer', 'plinkoMultiplier'],
    },
    {
      type: 'plan',
      id: 'gold',
    },
  ],
  cloudProjectsFetchingErrorLabel: null,
  firebaseUser: indieFirebaseUser,
  subscription: noSubscription,
  usages: usagesForIndieUser,
  limits: limitsForNoSubscriptionUser,
  receivedAssetPacks: [
    {
      id: '07a9f974-aeca-4a3f-b501-4808400eda4f',
      createdAt: '2022-12-13T19:45:47.318Z',
      updatedAt: '2022-12-13T19:45:47.318Z',
      name: 'Gamepasses',
      longDescription: '',
      previewImageUrls: [
        'https://resources.gdevelop-app.com/staging/private-assets/Gamepasses/thumbnail.png',
      ],
      tag: 'gamepasses',
      content: {},
    },
  ],
  userEarningsBalance,
  receivedGameTemplates: [],
  receivedAssetShortHeaders: [],
  gameTemplatePurchases: [],
  assetPackPurchases: [],
  onLogin: async () => {},
  onLoginWithProvider: async () => {},
  onCancelLoginOrSignUp: () => {},
  onLogout: async () => {},
  onCreateAccount: async () => {},
  onResetPassword: async () => {},
  onEditProfile: async () => {},
  onOpenLoginDialog: () => {},
  onOpenEditProfileDialog: () => {},
  onOpenChangeEmailDialog: () => {},
  onOpenCreateAccountDialog: () => {},
  onOpenEmailVerificationDialog: () => {},
  onBadgesChanged: async () => {},
  onCloudProjectsChanged: async () => {},
  onRefreshUserProfile: async () => {
    console.info('This should refresh the user profile');
  },
  onRefreshSubscription: async () => {
    console.info('This should refresh the subscription');
  },
  onRefreshLimits: async () => {
    console.info('This should refresh the limits');
  },
  onRefreshGameTemplatePurchases: async () => {
    console.info('This should refresh the game template purchases');
  },
  onRefreshAssetPackPurchases: async () => {
    console.info('This should refresh the asset pack purchases');
  },
  onRefreshEarningsBalance: async () => {
    console.info('This should refresh the user earnings balance');
  },
  onRefreshNotifications: async () => {
    console.info('This should refresh the notifications');
  },
  onPurchaseSuccessful: async () => {
    console.info('This should refresh the assets');
  },
  onRefreshFirebaseProfile: async () => {
    console.info('This should refresh the firebase profile');
  },
  onSendEmailVerification: async () => {
    console.info('This should send the email verification');
  },
  onAcceptGameStatsEmail: async () => {
    console.info('This should accept receiving game stats email');
  },
  getAuthorizationHeader: () => Promise.resolve('fake-authorization-header'),
  achievements: fakeAchievements,
};

export const fakeSilverAuthenticatedUser: AuthenticatedUser = {
  ...defaultAuthenticatedUserWithNoSubscription,
  subscription: subscriptionForSilverUser,
  limits: limitsForSilverUser,
};
export const fakeSilverButCancelAtPeriodEndAuthenticatedUser: AuthenticatedUser = {
  ...defaultAuthenticatedUserWithNoSubscription,
  subscription: silverSubscriptionButCancelAtPeriodEnd,
  limits: limitsForSilverUser,
};
export const fakeSilverAuthenticatedUserWithCloudProjects: AuthenticatedUser = {
  ...defaultAuthenticatedUserWithNoSubscription,
  subscription: subscriptionForSilverUser,
  cloudProjects: tenCloudProjects,
};

export const fakeGoldAuthenticatedUser: AuthenticatedUser = {
  ...fakeSilverAuthenticatedUser,
  subscription: subscriptionForGoldUser,
  limits: limitsForGoldUser,
};
export const fakeStartupAuthenticatedUser: AuthenticatedUser = {
  ...fakeSilverAuthenticatedUser,
  subscription: subscriptionForStartupUser,
  limits: limitsForStartupUser,
};
export const fakeAuthenticatedUserWithEducationPlan: AuthenticatedUser = {
  ...fakeSilverAuthenticatedUser,
  subscription: subscriptionForEducationPlan,
  limits: limitsForTeacherUser,
};
export const fakeAuthenticatedStudentFromEducationPlan: AuthenticatedUser = {
  ...fakeSilverAuthenticatedUser,
  subscription: subscriptionForGoldUserFromEducationPlan,
  limits: limitsForStudentUser,
};
export const fakeAuthenticatedTeacherFromEducationPlan: AuthenticatedUser = {
  ...fakeSilverAuthenticatedUser,
  subscription: subscriptionForGoldUserFromEducationPlan,
  limits: limitsForTeacherUser,
};

export const fakeGoldWithPurchaselyAuthenticatedUser: AuthenticatedUser = {
  ...fakeSilverAuthenticatedUser,
  subscription: purchaselyGoldSubscription,
  limits: limitsForGoldUser,
};

export const fakeAuthenticatedUserWithNoSubscription: AuthenticatedUser = {
  ...fakeSilverAuthenticatedUser,
  subscription: noSubscription,
  limits: limitsForNoSubscriptionUser,
};

export const fakeAuthenticatedUserWithValidSilverRedemptionCode: AuthenticatedUser = {
  ...fakeAuthenticatedUserWithNoSubscription,
  subscription: silverSubscriptionWithRedemptionCode,
  limits: limitsForSilverUser,
};

export const fakeAuthenticatedUserWithExpiredSilverRedemptionCode: AuthenticatedUser = {
  ...fakeAuthenticatedUserWithNoSubscription,
  subscription: silverSubscriptionWithExpiredRedemptionCode,
  limits: limitsForSilverUser,
};

export const fakeAuthenticatedUserWithLegacyIndieSubscription = {
  ...fakeSilverAuthenticatedUser,
  subscription: subscriptionForIndieUser,
  limits: limitsForSilverUser,
};

export const fakeAuthenticatedUserWithLegacyProSubscription = {
  ...fakeSilverAuthenticatedUser,
  subscription: subscriptionForProUser,
  limits: limitsForGoldUser,
};

export const fakeAuthenticatedUserWithNoSubscriptionAndTooManyCloudProjects: AuthenticatedUser = {
  ...fakeSilverAuthenticatedUser,
  cloudProjects: tenCloudProjects,
  subscription: noSubscription,
  limits: limitsReached,
};

export const fakeAuthenticatedUserWithEmailVerified: AuthenticatedUser = {
  ...defaultAuthenticatedUserWithNoSubscription,
  firebaseUser: indieVerifiedFirebaseUser,
};

export const fakeAuthenticatedUserLoggingIn: AuthenticatedUser = {
  ...defaultAuthenticatedUserWithNoSubscription,
  authenticated: true,
  loginState: 'loggingIn',
  profile: null,
  badges: null,
  cloudProjects: null,
  cloudProjectsFetchingErrorLabel: null,
  firebaseUser: null,
  subscription: null,
  usages: null,
  limits: null,
};

export const fakeAuthenticatedUserWithBadges: AuthenticatedUser = {
  ...defaultAuthenticatedUserWithNoSubscription,
  badges: [
    {
      seen: false,
      unlockedAt: '123',
      userId: indieUserProfile.id,
      achievementId: 'badge1',
    },
  ],
};

export const fakeAuthenticatedUserWithGitHubStarBadge: AuthenticatedUser = {
  ...defaultAuthenticatedUserWithNoSubscription,
  badges: [
    {
      seen: false,
      unlockedAt: '123',
      userId: indieUserProfile.id,
      achievementId: 'github-star',
    },
  ],
};

export const fakeAuthenticatedUserWithNoSubscriptionAndCredits: AuthenticatedUser = {
  ...fakeSilverAuthenticatedUser,
  subscription: noSubscription,
  limits: limitsForNoSubscriptionUserWithCredits,
};

export const fakeAuthenticatedUserWithQuestionsQuotaReached: AuthenticatedUser = {
  ...fakeAuthenticatedUserWithNoSubscription,
  limits: {
    ...limitsForNoSubscriptionUser,
    quotas: {
      ...limitsForNoSubscriptionUser.quotas,
      'ask-question': {
        ...limitsForNoSubscriptionUser.quotas['ask-question'],
        limitReached: true,
      },
    },
  },
};

export const fakeNotAuthenticatedUser: AuthenticatedUser = {
  ...defaultAuthenticatedUserWithNoSubscription,
  authenticated: false,
  profile: null,
  loginState: 'done',
  badges: null,
  cloudProjects: null,
  cloudProjectsFetchingErrorLabel: null,
  firebaseUser: null,
  subscription: null,
  usages: null,
  limits: null,
};

export const release: Release = {
  name: '5.0.0-beta62',
  publishedAt: '2019-01-14T23:32:41Z',
  url: 'https://github.com/4ian/GDevelop/releases/tag/v5.0.0-beta62',
  description:
    '> 💌Before listing the new features/improvements/bug fixes, a huge thanks to the contributors that allowed this new version to be what it is: @blurymind, @Bouh, @Lizard-13, @Wend1go, @zatsme 👏 GDevelop is growing thanks to you!\r\n\r\n## ✨New features\r\n\r\n* **Functions** are now "out of alpha testing" and always shown in the project manager. Functions are a powerful way to create new conditions, actions and expression using events. This allow to make your events and the logic of your game easier to understand and create. This also allow you to share common functions between games and create advanced features that are easy to use. [Learn more about functions on the wiki](https://wiki.gdevelop.io/gdevelop5/events/functions)\r\n* A brand new Physics engine: **Physics Engine 2.0**. (Thanks @Lizard-13 for creating it, testing it, improving it and creating examples and tests, and @zatsme for various update and examples!). While still based on the same internal physics engine, it is much more complete and powerful than the previous one:\r\n  * Support for a lot of joints (revolute, gear, mouse, prismatic, rope, pulley, wheel and more!)\r\n  * Support more options for bodies\r\n  * Support more shape and even custom polygons for objects.\r\n  * Look at the updated and **new examples** to learn how to use it and to see what\'s possible!\r\n\r\n  > Your existing games will continue to work with the old physics engine. You can still continue to use it. For new games, prefer to use the new Physics Engine 2.0. In your existing game, you can also replace *the behavior of all of your objects* by the new behavior, and replace *all the conditions and actions* by the conditions and actions from the new engine.\r\n* New **Screenshot** action, to take in-game screenshot for games running on Windows/macOS/Linux. (thanks @Wend1go!)\r\n  * This also come with new expressions to access to the **file system paths**, useful to save the screenshots in a folder of the user.\r\n\r\n## 💝 Improvements\r\n\r\n* Display missing files in resource editor as red (thanks @blurymind!)\r\n* Add option to set scale mode ("sampling") of the game to nearest (for "pixel perfect" or 8bit games) in the game properties.\r\n* Usability: autoclose project manager when opening an editor (thanks @blurymind!)\r\n* Add button to choose a new file for a resource in the resource editor (thanks @blurymind!)\r\n* New "Pixel perfect platform engine" example.\r\n* Usability: add shortcut to open Project Manager and focus search field when opening it.\r\n* Updated "Isometric Game" starter game to have better collision handling and mobile support.\r\n* Add GetAngle/GetXVelocity and GetYVelocity expressions to top-down movement behavior.\r\n* Extensions written in JavaScript can now be used to create new type of objects.\r\n* Usability: icons in the list of instructions or expressions are now displayed.\r\n\r\n## 🐛 Bug fixes \r\n\r\n* Update **Facebook Instant Games export** to have the now required bundle file (fbapp-config.json).\r\n* Fix the sentence in the events sheet of a Facebook Instant Games action. (thanks @Bouh!)\r\n* Fix descriptions of Storage actions to make clear that no "real" files are written.\r\n* Fix Left Shift key\r\n* Fix middle mouse button (thanks @Bouh!)\r\n* Fix visual artifacts when rendering rescaled games\r\n* Fix platform engine 1-pixel offset bug\r\n* Fix initial opacity undefined for text objects (thanks @Lizard-13)\r\n* Fix the condition checking if the cursor is on an object (thanks @Lizard-13)\r\n* Avoid crash of the debugger with Particle Emitters\r\n* Add explicit "OK" button in message box to fix issue on Linux\r\n* Usability: hide object drop-down list after an object is selected\r\n* Fix login dialog not showing on top of export dialog',
};

export const releaseWithBreakingChange: Release = {
  name: '5.0.0-beta60',
  publishedAt: '2019-01-07T23:32:41Z',
  url: 'https://github.com/4ian/GDevelop/releases/tag/v5.0.0-beta60',
  description:
    '> ⚠️ Blabla, beware there is a breaking change!!!\r\n\r\n## ✨New features\r\n\r\n* **Functions** are now "out of alpha testing" and always shown in the project manager. Functions are a powerful way to create new conditions, actions and expression using events. This allow to make your events and the logic of your game easier to understand and create. This also allow you to share common functions between games and create advanced features that are easy to use. [Learn more about functions on the wiki](https://wiki.gdevelop.io/gdevelop5/events/functions)\r\n* A brand new Physics engine: **Physics Engine 2.0**. (Thanks @Lizard-13 for creating it, testing it, improving it and creating examples and tests, and @zatsme for various update and examples!). While still based on the same internal physics engine, it is much more complete and powerful than the previous one:\r\n  * Support for a lot of joints (revolute, gear, mouse, prismatic, rope, pulley, wheel and more!)\r\n  * Support more options for bodies\r\n  * Support more shape and even custom polygons for objects.\r\n  * Look at the updated and **new examples** to learn how to use it and to see what\'s possible!\r\n\r\n  > Your existing games will continue to work with the old physics engine. You can still continue to use it. For new games, prefer to use the new Physics Engine 2.0. In your existing game, you can also replace *the behavior of all of your objects* by the new behavior, and replace *all the conditions and actions* by the conditions and actions from the new engine.\r\n* New **Screenshot** action, to take in-game screenshot for games running on Windows/macOS/Linux. (thanks @Wend1go!)\r\n  * This also come with new expressions to access to the **file system paths**, useful to save the screenshots in a folder of the user.\r\n\r\n## 💝 Improvements\r\n\r\n* Display missing files in resource editor as red (thanks @blurymind!)\r\n* Add option to set scale mode ("sampling") of the game to nearest (for "pixel perfect" or 8bit games) in the game properties.\r\n* Usability: autoclose project manager when opening an editor (thanks @blurymind!)\r\n* Add button to choose a new file for a resource in the resource editor (thanks @blurymind!)\r\n* New "Pixel perfect platform engine" example.\r\n* Usability: add shortcut to open Project Manager and focus search field when opening it.\r\n* Updated "Isometric Game" starter game to have better collision handling and mobile support.\r\n* Add GetAngle/GetXVelocity and GetYVelocity expressions to top-down movement behavior.\r\n* Extensions written in JavaScript can now be used to create new type of objects.\r\n* Usability: icons in the list of instructions or expressions are now displayed.\r\n\r\n## 🐛 Bug fixes \r\n\r\n* Update **Facebook Instant Games export** to have the now required bundle file (fbapp-config.json).\r\n* Fix the sentence in the events sheet of a Facebook Instant Games action. (thanks @Bouh!)\r\n* Fix descriptions of Storage actions to make clear that no "real" files are written.\r\n* Fix Left Shift key\r\n* Fix middle mouse button (thanks @Bouh!)\r\n* Fix visual artifacts when rendering rescaled games\r\n* Fix platform engine 1-pixel offset bug\r\n* Fix initial opacity undefined for text objects (thanks @Lizard-13)\r\n* Fix the condition checking if the cursor is on an object (thanks @Lizard-13)\r\n* Avoid crash of the debugger with Particle Emitters\r\n* Add explicit "OK" button in message box to fix issue on Linux\r\n* Usability: hide object drop-down list after an object is selected\r\n* Fix login dialog not showing on top of export dialog',
};

export const releaseWithoutDescription: Release = {
  name: '5.0.0-beta60',
  publishedAt: '2019-01-07T23:32:41Z',
  url: 'https://github.com/4ian/GDevelop/releases/tag/v5.0.0-beta60',
  description: null,
};

export const erroredCordovaBuild: Build = {
  id: 'errored-build-id',
  gameId: 'errored-game-id',
  status: 'error',
  logsKey: '/fake-error.log',
  createdAt: 1515084391000,
  updatedAt: Date.now(),
  userId: 'fake-user-id',
  type: 'cordova-build',
};

export const pendingCordovaBuild: Build = {
  id: 'pending-build-id',
  gameId: 'pending-game-id',
  status: 'pending',
  createdAt: 1515084391000,
  updatedAt: Date.now(),
  userId: 'fake-user-id',
  type: 'cordova-build',
};

export const pendingElectronBuild: Build = {
  id: 'pending-build-id',
  gameId: 'pending-game-id',
  status: 'pending',
  createdAt: 1515084391000,
  updatedAt: Date.now(),
  userId: 'fake-user-id',
  type: 'electron-build',
};

export const completeCordovaBuild: Build = {
  id: 'complete-build-id',
  gameId: 'complete-game-id',
  createdAt: 1515084391000,
  userId: 'fake-user-id',
  type: 'cordova-build',
  status: 'complete',
  logsKey: '/fake-error.log',
  apkKey: '/fake-game.apk',
  updatedAt: Date.now(),
};

export const completeElectronBuild: Build = {
  id: 'complete-build-id',
  gameId: 'complete-game-id',
  createdAt: 1515084391000,
  userId: 'fake-user-id',
  type: 'electron-build',
  status: 'complete',
  logsKey: '/fake-error.log',
  windowsExeKey: '/fake-windows-game.exe',
  windowsZipKey: '/fake-windows-game.zip',
  macosZipKey: '/fake-macos-game.zip',
  linuxAppImageKey: '/fake-linux-game.AppImage',
  updatedAt: Date.now(),
};

export const completeWebBuild: Build = {
  id: 'complete-build-id',
  gameId: 'complete-game-id',
  createdAt: 1515084391000,
  userId: 'fake-user-id',
  type: 'web-build',
  status: 'complete',
  logsKey: '/fake-error.log',
  s3Key: 'game-12345',
  updatedAt: Date.now(),
};

const spaceshipSerializedObject = {
  name: 'PlayerSpaceship',
  tags: '',
  type: 'Sprite',
  updateIfNotVisible: false,
  variables: [
    {
      name: 'State',
      value: 'Spaceship',
    },
  ],
  behaviors: [],
  animations: [
    {
      name: 'SpaceshipIdle',
      useMultipleDirections: false,
      directions: [
        {
          looping: true,
          timeBetweenFrames: 0.08,
          sprites: [
            {
              hasCustomCollisionMask: false,
              image: 'player-ship1.png',
              points: [],
              originPoint: {
                name: 'origine',
                x: 0,
                y: 0,
              },
              centerPoint: {
                automatic: true,
                name: 'centre',
                x: 0,
                y: 0,
              },
              customCollisionMask: [],
            },
            {
              hasCustomCollisionMask: false,
              image: 'player-ship2.png',
              points: [],
              originPoint: {
                name: 'origine',
                x: 0,
                y: 0,
              },
              centerPoint: {
                automatic: true,
                name: 'centre',
                x: 0,
                y: 0,
              },
              customCollisionMask: [],
            },
          ],
        },
      ],
    },
  ],
};

const spaceshipSerializedResources = [
  {
    file: 'https://example.com/player-ship1.png',
    origin: {
      name: 'gdevelop-asset-store',
      identifier: 'https://example.com/player-ship1.png',
    },
    kind: 'image',
    metadata: '',
    name: 'player-ship1.png',
    smoothed: false,
    userAdded: false,
  },
  {
    file: 'https://example.com/player-ship2.png',
    origin: {
      name: 'gdevelop-asset-store',
      identifier: 'https://example.com/player-ship2.png',
    },
    kind: 'image',
    metadata: '',
    name: 'player-ship2.png',
    smoothed: false,
    userAdded: false,
  },
];

export const fakeAsset1: Asset = {
  id: '123',
  name: 'My spaceship',
  shortDescription:
    'A spaceship that can be moved with the keyboard or by touching the screen',
  description: "A very nice way to start a shoot'em up.",
  previewImageUrls: [
    'https://asset-resources.gdevelop.io/public-resources/Simple Space/spaceships/b0e7ae371773ea6cf1e18a7db1d32ea1b4b9dd388f1f31aed5b7c1501437292c_Complex Spaceship_Type A.png',
  ],
  animationsCount: 6,
  maxFramesCount: 6,
  height: 36,
  width: 36,
  objectType: 'sprite',
  gdevelopVersion: '5.0.0-beta100',
  version: '1.0.0',
  authors: ['test author'],
  license: 'MIT',
  tags: ['space shooter', 'tag2'],
  dominantColors: [255],
  objectAssets: [
    {
      object: spaceshipSerializedObject,
      resources: spaceshipSerializedResources,
      requiredExtensions: [],
    },
  ],
};

export const fakePixelArtAsset1: Asset = {
  ...fakeAsset1,
  tags: ['space shooter', 'tag2', 'pixel art'],
};

export const fakeAssetWithCustomObject: Asset = {
  id: '123',
  name: 'YellowButton',
  authors: ['Kenney'],
  license: 'CC0 (public domain)',
  shortDescription: 'button',
  description: 'A button that can be clicked.',
  tags: ['custom objects', 'button'],
  objectAssets: [
    {
      object: {
        name: 'YellowButton',
        type: 'Button::PanelSpriteButton',
        content: {
          LeftPadding: 16,
          RightPadding: 16,
          PressedLabelOffsetY: 10,
          IdleLabelOffsetY: -8,
          BottomPadding: 32,
          TopPadding: 16,
          MinimalWidth: 300,
        },
        childrenContent: {
          Label: {
            bold: false,
            italic: false,
            smoothed: true,
            underlined: false,
            string: 'Start',
            font: '',
            characterSize: 60,
            color: { b: 42, g: 87, r: 139 },
          },
          Idle: {
            bottomMargin: 32,
            height: 106,
            leftMargin: 16,
            rightMargin: 16,
            texture: 'object_YellowButton_Idle.png',
            tiled: true,
            topMargin: 16,
            width: 256,
          },
          Hovered: {
            bottomMargin: 32,
            height: 106,
            leftMargin: 16,
            rightMargin: 16,
            texture: 'object_YellowButton_Hovered.png',
            tiled: true,
            topMargin: 16,
            width: 256,
          },
          Pressed: {
            bottomMargin: 16,
            height: 106,
            leftMargin: 16,
            rightMargin: 16,
            texture: 'object_YellowButton_Pressed.png',
            tiled: true,
            topMargin: 32,
            width: 256,
          },
        },
      },
      resources: [
        {
          file:
            'https://resources.gdevelop-app.com/assets/Custom objects/object_YellowButton_Hovered.png',
          kind: 'image',
          metadata: '',
          name: 'object_YellowButton_Hovered.png',
          userAdded: false,
          origin: {
            name: 'gdevelop-asset-store',
            identifier:
              'https://resources.gdevelop-app.com/assets/Custom objects/object_YellowButton_Hovered.png',
          },
        },
        {
          file:
            'https://resources.gdevelop-app.com/assets/Custom objects/object_YellowButton_Idle.png',
          kind: 'image',
          metadata: '',
          name: 'object_YellowButton_Idle.png',
          userAdded: false,
          origin: {
            name: 'gdevelop-asset-store',
            identifier:
              'https://resources.gdevelop-app.com/assets/Custom objects/object_YellowButton_Idle.png',
          },
        },
        {
          file:
            'https://resources.gdevelop-app.com/assets/Custom objects/object_YellowButton_Pressed.png',
          kind: 'image',
          metadata: '',
          name: 'object_YellowButton_Pressed.png',
          userAdded: false,
          origin: {
            name: 'gdevelop-asset-store',
            identifier:
              'https://resources.gdevelop-app.com/assets/Custom objects/object_YellowButton_Pressed.png',
          },
        },
      ],
      requiredExtensions: [
        {
          extensionName: 'Button',
          extensionVersion: '1.0.0',
        },
      ],
    },
  ],
  gdevelopVersion: '5.0.0-beta100',
  version: '1.0.0',
  objectType: 'object',
  animationsCount: 1,
  maxFramesCount: 1,
  previewImageUrls: [
    'https://asset-resources.gdevelop.io/public-resources/Menu buttons/3e1b2da0279f60b6a6d1cfe4c79875b70a81b0bec7aa45ff18bff03eb26326eb_Yellow Button.preview.png',
  ],
  width: 256,
  height: 106,
  dominantColors: [16304136],
};

export const fakeAssetWithUnknownExtension1: Asset = {
  id: '123',
  name: 'My spaceship',
  shortDescription:
    'A spaceship that can be moved with the keyboard or by touching the screen',
  description: "A very nice way to start a shoot'em up.",
  previewImageUrls: ['res/GD-logo.png'],
  animationsCount: 6,
  maxFramesCount: 6,
  height: 36,
  width: 36,
  objectType: 'sprite',
  gdevelopVersion: '5.0.0-beta100',
  version: '1.0.0',
  authors: ['test author'],
  license: 'MIT',
  tags: ['space shooter', 'tag2'],
  dominantColors: [255],
  objectAssets: [
    {
      object: spaceshipSerializedObject,
      resources: spaceshipSerializedResources,
      requiredExtensions: [
        {
          extensionName: 'UnknownExtension',
          extensionVersion: '1.0.0',
        },
      ],
    },
  ],
};

export const fakeAssetWithFlashExtensionDependency1: Asset = {
  id: '123',
  name: 'My spaceship',
  shortDescription:
    'A spaceship that can be moved with the keyboard or by touching the screen',
  description: "A very nice way to start a shoot'em up.",
  previewImageUrls: ['res/GD-logo.png'],
  animationsCount: 6,
  maxFramesCount: 6,
  height: 36,
  width: 36,
  objectType: 'sprite',
  gdevelopVersion: '5.0.0-beta100',
  version: '1.0.0',
  authors: ['test author'],
  license: 'MIT',
  tags: ['space shooter', 'tag2'],
  dominantColors: [255],
  objectAssets: [
    {
      object: spaceshipSerializedObject,
      resources: spaceshipSerializedResources,
      requiredExtensions: [
        {
          extensionName: 'Flash',
          extensionVersion: '1.0.0',
        },
      ],
    },
  ],
};

export const fakeAssetShortHeader1: AssetShortHeader = {
  id: 'a4eb5460ffc062ece1f3ff45d24b07e40e9d4247d21602de70973049eb4f6ee5',
  license:
    'CC-BY 4.0 (Attribution to the artist is required, click for details)',
  animationsCount: 6,
  maxFramesCount: 6,
  height: 36,
  width: 36,
  name: 'Dino Doux',
  objectType: 'sprite',
  previewImageUrls: [
    'https://resources.gdevelop-app.com/assets/24x24 Dino Characters/Dino Doux_Crouch.png',
  ],
  shortDescription: 'with 6 animations',
  tags: [
    '24x24 dino characters',
    'side view',
    'pixel art',
    'character',
    'player',
    'enemy',
  ],
  dominantColors: [255],
};

export const fakeAssetShortHeader2: AssetShortHeader = {
  id: 'faaa5460ffc062ece1f3ff45d24b07e40e9d4247d21602de70973049eb4f6ee6',
  license:
    'CC-BY 4.0 (Attribution to the artist is required, click for details)',
  animationsCount: 6,
  maxFramesCount: 6,
  height: 36,
  width: 36,
  name: 'Dino Doux 2',
  objectType: 'sprite',
  previewImageUrls: [
    'https://resources.gdevelop-app.com/assets/24x24 Dino Characters/Dino Doux_Crouch.png',
  ],
  shortDescription: 'with 5 animations',
  tags: [
    '24x24 dino characters',
    'side view',
    'pixel art',
    'character',
    'player',
    'enemy',
  ],
  dominantColors: [255],
};

export const fakePrivateAssetShortHeader1: AssetShortHeader = {
  id: 'bcdef460ffc062ece1f3ff45d24b07e40e9d4247d21602de70973049eb4f6ee5',
  license:
    'CC-BY 4.0 (Attribution to the artist is required, click for details)',
  animationsCount: 6,
  maxFramesCount: 6,
  height: 36,
  width: 36,
  name: 'Premium Dino Doux',
  objectType: 'sprite',
  previewImageUrls: ['https://private-assets.gdevelop.io/fake-preview.png'],
  shortDescription: 'with 10 animations',
  tags: [
    '24x24 dino characters',
    'side view',
    'pixel art',
    'character',
    'player',
    'enemy',
  ],
  dominantColors: [255],
};

export const fakePrivateAsset1: Asset = {
  ...fakePrivateAssetShortHeader1,
  description: 'A very nice Dino.',
  gdevelopVersion: '5.0.0-beta100',
  version: '1.0.0',
  authors: ['test author'],
  dominantColors: [255],
  objectAssets: [
    {
      object: {},
      resources: [],
      requiredExtensions: [],
    },
  ],
};

export const fireBulletExtensionShortHeader: ExtensionShortHeader = {
  tier: 'reviewed',
  authorIds: [],
  shortDescription:
    'Allow the object to fire bullets, with customizable speed, angle and fire rate.',
  extensionNamespace: '',
  fullName: 'Fire bullets',
  name: 'FireBullet',
  version: '0.0.2',
  url: 'https://resources.gdevelop-app.com/extensions/FireBullet.json',
  headerUrl:
    'https://resources.gdevelop-app.com/extensions/FireBullet-header.json',
  tags: ['fire', 'bullets', 'spawn', 'firerate'],
  category: 'Movement',
  previewIconUrl: 'https://resources.gdevelop-app.com/assets/Icons/repeat.svg',
  eventsBasedBehaviorsCount: 1,
  eventsFunctionsCount: 0,
  helpPath: '',
};

export const fireBulletExtensionHeader: ExtensionHeader = {
  ...fireBulletExtensionShortHeader,
  description:
    'This is a longer description explaining:\n* How to\n* Use the extension\n\nWith *some* **markdown** :)',
  helpPath: 'https://example.com',
  iconUrl: 'https://resources.gdevelop-app.com/assets/Icons/repeat.svg',
};

export const uncompatibleFireBulletExtensionShortHeader: ExtensionShortHeader = {
  ...fireBulletExtensionShortHeader,
  gdevelopVersion: '2000.0.0',
};

export const alreadyInstalledExtensionShortHeader: ExtensionShortHeader = {
  ...fireBulletExtensionShortHeader,
  name: 'SomeAlreadyInstalledExtension',
  version: '1.2.3',
};

export const newerVersionExtensionShortHeader: ExtensionShortHeader = {
  ...fireBulletExtensionShortHeader,
  name: 'SomeAlreadyInstalledExtension',
  version: '1.2.4',
};

export const alreadyInstalledCommunityExtensionShortHeader: ExtensionShortHeader = {
  ...fireBulletExtensionShortHeader,
  tier: 'community',
  name: 'SomeAlreadyInstalledExtension',
};

export const flashExtensionShortHeader: ExtensionShortHeader = {
  tier: 'reviewed',
  authorIds: [],
  shortDescription:
    'Make the object flash (blink) for a period of time, so that it is alternately visible and invisible.\nTrigger the effect by using the Flash action.',
  extensionNamespace: '',
  fullName: 'Flash (blink)',
  name: 'Flash',
  version: '1.0.0',
  url: 'Extensions/Flash.json',
  headerUrl: 'Extensions/Flash-header.json',
  tags: ['flash', 'blink', 'visible', 'invisible', 'hit', 'damage'],
  category: 'Visual effect',
  previewIconUrl: 'https://resources.gdevelop-app.com/assets/Icons/repeat.svg',
  eventsBasedBehaviorsCount: 1,
  eventsFunctionsCount: 0,
  helpPath: '',
};

export const buttonV1ExtensionShortHeader: ExtensionShortHeader = {
  tier: 'reviewed',
  authorIds: [],
  shortDescription: 'An extension that is already installed in the project.',
  extensionNamespace: '',
  fullName: 'Button',
  name: 'Button',
  version: '1.0.0',
  url: 'Extensions/Button.json',
  headerUrl: '',
  tags: [],
  category: '',
  previewIconUrl: '',
  eventsBasedBehaviorsCount: 1,
  eventsFunctionsCount: 0,
  helpPath: '',
};

export const buttonV2ExtensionShortHeader: ExtensionShortHeader = {
  ...buttonV1ExtensionShortHeader,
  version: '2.0.0',
};

export const communityTierExtensionShortHeader: ExtensionShortHeader = {
  tier: 'community',
  authorIds: [],
  shortDescription:
    'This is an example of an extension that is a community extension (not reviewed).',
  extensionNamespace: '',
  fullName: 'Fake Community extension',
  name: 'FakeCommunityExtension',
  version: '0.0.2',
  url:
    'https://resources.gdevelop-app.com/extensions/FakeCommunityExtension.json',
  headerUrl:
    'https://resources.gdevelop-app.com/extensions/FakeCommunityExtension-header.json',
  tags: ['fire', 'bullets', 'spawn', 'firerate'],
  category: '',
  previewIconUrl: 'https://resources.gdevelop-app.com/assets/Icons/repeat.svg',
  eventsBasedBehaviorsCount: 1,
  eventsFunctionsCount: 0,
  helpPath: '',
};

export const communityTierExtensionHeader: ExtensionHeader = {
  ...communityTierExtensionShortHeader,
  description:
    'This is a longer description explaining:\n* How to\n* Use the extension\n\nWith *some* **markdown** :)',
  helpPath: 'https://example.com',
  iconUrl: 'https://resources.gdevelop-app.com/assets/Icons/repeat.svg',
};

export const fakeGame: Game = {
  id: 'complete-game-id',
  authorName: 'SonicFan',
  gameName: 'Sonic1995',
  createdAt: 1606065498,
  updatedAt: 1606065498,
  publicWebBuildId: 'fake-public-web-build-id-sonic',
  displayAdsOnGamePage: true,
  discoverable: true,
  thumbnailUrl: 'https://i.ytimg.com/vi/PguDpz7TC7g/hqdefault.jpg',
  playWithKeyboard: true,
  playWithMobile: false,
  playWithGamepad: false,
};

export const game1: Game = {
  id: 'fake-game1-id',
  authorName: 'My company',
  gameName: 'My Great Game',
  createdAt: 1606065498,
  updatedAt: 1606065498,
  publicWebBuildId: 'fake-publicwebbuild-id',
  displayAdsOnGamePage: true,
  orientation: 'default',
  playWithKeyboard: true,
  playWithMobile: false,
  playWithGamepad: false,
};

export const game2: Game = {
  id: 'fake-game2-id',
  authorName: 'My company',
  gameName: 'My Other Game',
  createdAt: 1607065498,
  updatedAt: 1606065498,
  playWithKeyboard: true,
  playWithMobile: false,
  playWithGamepad: false,
};

export const getPublicGameFromGame = (game: Game): PublicGame => {
  const publicGame: PublicGame = {
    ...game,
    donateLink: null,
    orientation: game.orientation || 'default',
    displayAdsOnGamePage: !!game.displayAdsOnGamePage,
    owners: [getPublicProfileUserFromProfile(indieUserProfile)],
    authors: [getPublicProfileUserFromProfile(indieUserProfile)],
  };
  return publicGame;
};

export const getPublicProfileUserFromProfile = (
  profile: Profile
): UserPublicProfile => {
  const publicProfile: UserPublicProfile = {
    id: profile.id,
    createdAt: profile.createdAt,
    username: profile.username || null,
    description: profile.description || null,
    donateLink: profile.donateLink || null,
    discordUsername: profile.discordUsername || null,
    githubUsername: profile.githubUsername || null,
    communityLinks: profile.communityLinks || {},
    iconUrl:
      'https://www.gravatar.com/avatar/3cc54b273332b35556f95bd9c6713585?s=40&d=retro',
  };
  return publicProfile;
};

export const gameWithDisplayAdsOnGamePageEnabled: Game = {
  ...game1,
  displayAdsOnGamePage: true,
};

export const gameWithDisplayAdsOnGamePageDisabled: Game = {
  ...game1,
  displayAdsOnGamePage: false,
};

export const fakeFileMetadataAndStorageProviderNameForLocalProject: FileMetadataAndStorageProviderName = {
  fileMetadata: {
    fileIdentifier: 'localProject',
    name: 'Local project',
    lastModifiedDate: Date.now(),
    gameId: 'localProject',
  },
  storageProviderName: 'LocalFile',
};

export const fakeFileMetadataAndStorageProviderNameForCloudProject: FileMetadataAndStorageProviderName = {
  fileMetadata: {
    fileIdentifier: 'cloudProject',
    name: 'Cloud project',
    lastModifiedDate: Date.now(),
    gameId: 'cloudProject',
  },
  storageProviderName: 'Cloud',
};

export const allGameCategoriesMocked = [
  {
    name: 'action',
    type: 'user-defined',
  },
  {
    name: 'adventure',
    type: 'user-defined',
  },
  {
    name: 'shooter',
    type: 'user-defined',
  },
  {
    name: 'platformer',
    type: 'user-defined',
  },
  {
    name: 'rpg',
    type: 'user-defined',
  },
  {
    name: 'horror',
    type: 'user-defined',
  },
  {
    name: 'strategy',
    type: 'user-defined',
  },
  {
    name: 'puzzle',
    type: 'user-defined',
  },
  {
    name: 'story-rich',
    type: 'user-defined',
  },
  {
    name: 'survival',
    type: 'user-defined',
  },
  {
    name: 'racing',
    type: 'user-defined',
  },
  {
    name: 'building',
    type: 'user-defined',
  },
  {
    name: 'simulation',
    type: 'user-defined',
  },
  {
    name: 'sport',
    type: 'user-defined',
  },
  {
    name: 'multiplayer',
    type: 'user-defined',
  },
  {
    name: 'leaderboard',
    type: 'user-defined',
  },
  {
    name: 'mini-games',
    type: 'user-defined',
  },
  {
    name: 'educational',
    type: 'user-defined',
  },
];

/**
 * It uses the ANSI C one because Number.MAX_SAFE_INTEGER is 2^53
 * and this one multiply a seed of 2^15 with a multiplier of 2^32.
 * https://en.wikipedia.org/wiki/Linear_congruential_generator
 * The randomization is poor, but ok for placeholder values.
 */
class NumberGenerator {
  x: number;

  constructor(x = 1) {
    this.x = x % 2 ** 15;
  }

  /**
   * @returns a number inside [0 ; 1[.
   */
  getNextRandomNumber(): number {
    // Masks would more efficient but less readable.
    this.x = (1103515245 * this.x + 12345) % 2 ** 31 >> 16;
    return this.x / 2 ** 15;
  }
}

const interpolateWithNoise = (
  leftValue: number,
  rightValue: number,
  ratio: number,
  numberGenerator: NumberGenerator
) =>
  ((1 - ratio) * leftValue + ratio * rightValue) *
  (0.95 + 0.1 * numberGenerator.getNextRandomNumber());

const generateGameRollingMetricsFor364Days = () => {
  const numberGenerator = new NumberGenerator();
  const metrics = [];
  const count = 364;
  for (let index = 0; index < count; index++) {
    const ratio = 1 - index / count;
    const playersCount = Math.round(
      interpolateWithNoise(50, 250, ratio, numberGenerator)
    );
    metrics.push({
      date: formatISO(subDays(new Date(), index)),

      sessions: {
        d0Sessions: Math.round(
          interpolateWithNoise(80, 350, ratio, numberGenerator)
        ),
        d0SessionsDurationTotal: Math.round(
          interpolateWithNoise(15000, 175000, ratio, numberGenerator)
        ),
      },
      players: {
        d0Players: playersCount,
        d0NewPlayers: Math.round(
          interpolateWithNoise(80, 120, ratio, numberGenerator)
        ),
        d0PlayersBelow60s: Math.round(
          playersCount * interpolateWithNoise(0.8, 0.4, ratio, numberGenerator)
        ),
        d0PlayersBelow180s: Math.round(
          playersCount * interpolateWithNoise(0.9, 0.55, ratio, numberGenerator)
        ),
        d0PlayersBelow300s: Math.round(
          playersCount * interpolateWithNoise(0.95, 0.6, ratio, numberGenerator)
        ),
        d0PlayersBelow600s: Math.round(
          playersCount * interpolateWithNoise(0.98, 0.7, ratio, numberGenerator)
        ),
        d0PlayersBelow900s: Math.round(
          playersCount *
            Math.min(1, interpolateWithNoise(1, 0.9, ratio, numberGenerator))
        ),
      },
      retention: {
        d1RetainedPlayers: 193,
        d2RetainedPlayers: 153,
        d3RetainedPlayers: 121,
        d4RetainedPlayers: 83,
        d5RetainedPlayers: 74,
        d6RetainedPlayers: 73,
        d7RetainedPlayers: 67,
      },
    });
  }
  return metrics;
};

const deleteDurationMetrics = (
  gameMetrics: GameMetrics[],
  startDays: number
): GameMetrics[] => {
  for (let index = startDays; index < gameMetrics.length; index++) {
    const gameMetric = gameMetrics[index];
    const sessions = gameMetric.sessions;
    const players = gameMetric.players;
    if (sessions) {
      sessions.d0SessionsDurationTotal = undefined;
    }
    if (players) {
      players.d0PlayersBelow60s = undefined;
      players.d0PlayersBelow180s = undefined;
      players.d0PlayersBelow300s = undefined;
      players.d0PlayersBelow600s = undefined;
      players.d0PlayersBelow900s = undefined;
    }
  }
  return gameMetrics;
};

export const gameRollingMetricsFor364Days: GameMetrics[] = generateGameRollingMetricsFor364Days();
export const gameRollingMetricsWithUndefinedDurationMetrics: GameMetrics[] = deleteDurationMetrics(
  generateGameRollingMetricsFor364Days(),
  17
);
export const gameRollingMetricsWithOnly19Days: GameMetrics[] = gameRollingMetricsFor364Days.slice(
  0,
  19
);
export const gameRollingMetricsWithOnly1Day: GameMetrics[] = gameRollingMetricsFor364Days.slice(
  0,
  1
);
export const gameRollingMetricsWithHoles: GameMetrics[] = [
  4,
  12,
  13,
  25,
  33,
  107,
  108,
  109,
  110,
  230,
].map(index => gameRollingMetricsFor364Days[index]);
export const gameRollingMetricsWithoutPlayersAndRetention1: GameMetrics[] = [
  {
    date: '2020-10-01',

    sessions: {
      d0Sessions: 350,
      d0SessionsDurationTotal: 175000,
    },
    players: null,
    retention: null,
  },
];

export const showcasedGame1: ShowcasedGame = {
  title: "Lil BUB's HELLO EARTH",
  author: "Lil BUB's Team",
  description:
    'BUB is a very special, one of a kind critter. More specifically, she is the [most amazing cat on the planet](http://lilbub.com)... and her game is made with GDevelop!\n\nThe game is a retro 8-bit game, with beautiful arts and soundtrack, which alternates between platformers levels, with hidden secrets, and shooter levels with bosses, multiple enemies and bonuses.',
  tags: [
    'Action',
    'Platform',
    'Shooter',
    'Adventure',
    'Android',
    'iOS',
    'Windows',
    'macOS',
    'Linux',
  ],
  genres: ['Action', 'Platform', 'Shooter', 'Adventure'],
  platforms: ['Android', 'iOS', 'Windows', 'macOS', 'Linux'],
  imageUrls: [
    'https://resources.gdevelop-app.com/games-showcase/images/18JKXDTWljabX3O09SW2VKYOThZkIf1jG',
  ],
  links: [
    {
      url:
        'https://itunes.apple.com/us/app/lil-bubs-hello-earth/id1123383033?mt=8',
      type: 'app-store',
    },
    {
      url: 'https://play.google.com/store/apps/details?id=com.lilbub.game',
      type: 'play-store',
    },
    {
      url: 'http://compilgames.net/bub-landing-page',
      type: 'download-win-mac-linux',
    },
    { url: '/games/lil-bub-hello-earth', type: 'learn-more' },
  ],
  isFeatured: false,
  bannerUrl:
    'https://resources.gdevelop-app.com/games-showcase/images/bub-game-banner.jpg',
  bannerBackgroundPosition: '',
  thumbnailUrl:
    'https://resources.gdevelop-app.com/games-showcase/images/bub-animated-logo.gif',
  editorDescription: '',
};

export const exampleFromFutureVersion: ExampleShortHeader = {
  id: 'fake-id',
  slug: 'fake-slug',
  name: 'Fake example',
  shortDescription: 'This is a fake example made in a future GDevelop version',
  description: '',
  license: 'MIT',
  tags: [],
  previewImageUrls: [],
  gdevelopVersion: '99.0.0',
  codeSizeLevel: 'small',
};

export const geometryMonsterExampleShortHeader: ExampleShortHeader = {
  id: '2ff24efa0de9b1340d7e8c8aedb494af6b4db9a72c6a643303734755efb977df',
  name: 'Geometry monster',
  slug: 'geometry-monster',
  shortDescription:
    'A hyper casual endless game where you have to collect shapes and avoid bombs, with a progressively increasing difficulty.\n',
  description: '',
  license: 'MIT',
  previewImageUrls: [
    'https://resources.gdevelop-app.com/examples/geometry-monster/thumbnail.png',
  ],
  authorIds: [],
  tags: [
    'geometry-monster',
    '',
    'Advanced control features',
    'Audio',
    'Standard Conversions',
    'Builtin events',
    'Keyboard features',
    'Mathematical tools',
    'Mouse and touch',
    'Features for all objects',
    'Scene management features',
    'Time',
    'Variable features',
    'Particle system',
    'Sprite',
    'Text object',
    'Stay On Screen',
    'Sine (or ellipsis) Movement',
    'Flash (blink)',
    'Health (life points and damages for objects)',
  ],
  gdevelopVersion: '',
  codeSizeLevel: 'small',
};

export const fakePrivateGameTemplateListingData: PrivateGameTemplateListingData = {
  name: 'Fake private game template',
  description: 'This is a fake private game template',
  id: 'fake-id',
  sellerId: 'fake-seller-id',
  isSellerGDevelop: false,
  productType: 'GAME_TEMPLATE',
  listing: 'GAME_TEMPLATE',
  categories: ['adventure'],
  updatedAt: '2020-01-01',
  createdAt: '2020-01-01',
  thumbnailUrls: [],
  prices: [],
  creditPrices: [],
  appStoreProductId: 'fake-app-store-product-id',
  includedListableProductIds: [],
  sellerStripeAccountId: 'fake-seller-stripe-account-id',
  stripeProductId: 'fake-stripe-product-id',
};

export const fakeAssetPacks: PublicAssetPacks = {
  starterPacks: [
    {
      name: 'GDevelop Platformer',
      tag: 'platformer',
      categories: ['full-game-pack'],
      thumbnailUrl:
        'https://resources.gdevelop-app.com/assets/Packs/platformer.png',
      assetsCount: 16,
      authors: [],
      licenses: [],
    },
    {
      name: 'Space Shooter',
      tag: 'space shooter',
      categories: [],
      thumbnailUrl:
        'https://resources.gdevelop-app.com/assets/Packs/space shooter.png',
      assetsCount: 140,
      authors: [],
      licenses: [],
    },
    {
      name: 'Tanks',
      tag: 'tank pack',
      categories: [],
      thumbnailUrl:
        'https://resources.gdevelop-app.com/assets/Packs/tank pack.png',
      assetsCount: 32,
      authors: [],
      licenses: [],
    },
    {
      name: 'Pixel Adventure',
      tag: 'pixel adventure pack',
      categories: ['full-game-pack'],
      thumbnailUrl:
        'https://resources.gdevelop-app.com/assets/Packs/pixel adventure pack.png',
      assetsCount: 80,
      authors: [],
      licenses: [],
    },
    {
      name: 'Fake Paid External',
      tag: 'pirate bomb pack',
      categories: ['full-game-pack'],
      thumbnailUrl:
        'https://resources.gdevelop-app.com/assets/Packs/pirate bomb pack.png',
      assetsCount: 48,
      authors: [],
      licenses: [],
      externalWebLink: 'https://example.com',
      userFriendlyPrice: '$4.99',
    },
    {
      name: 'Particles',
      tag: 'pixel effects pack',
      categories: ['visual-effect'],
      thumbnailUrl:
        'https://resources.gdevelop-app.com/assets/Packs/pixel effects pack.png',
      assetsCount: 20,
      authors: [],
      licenses: [],
    },
    {
      name: 'Emotes',
      tag: 'emote',
      categories: [],
      thumbnailUrl: 'https://resources.gdevelop-app.com/assets/Packs/emote.png',
      assetsCount: 176,
      authors: [],
      licenses: [],
    },
    {
      name: 'Dinosaurus Characters',
      tag: '24x24 dino characters',
      categories: ['character'],
      thumbnailUrl:
        'https://resources.gdevelop-app.com/assets/Packs/24x24 dino characters.png',
      assetsCount: 5,
      authors: [],
      licenses: [],
    },
    {
      name: 'Fake Paid Spinning Items',
      tag: '16x16 pixel art spinning items',
      categories: ['props'],
      thumbnailUrl:
        'https://resources.gdevelop-app.com/assets/Packs/16x16 pixel art spinning items.png',
      assetsCount: 30,
      authors: [],
      licenses: [],
      userFriendlyPrice: '$4.99',
    },
    {
      name: 'RPG Items #2',
      tag: '16x16 pixel art rpg items',
      categories: ['props'],
      thumbnailUrl:
        'https://resources.gdevelop-app.com/assets/Packs/16x16 pixel art rpg items.png',
      assetsCount: 64,
      authors: [],
      licenses: [],
    },
    {
      name: 'RPG Items',
      tag: '16x16 rpg item pack',
      categories: ['props'],
      thumbnailUrl:
        'https://resources.gdevelop-app.com/assets/Packs/16x16 rpg item pack.png',
      assetsCount: 144,
      authors: [],
      licenses: [],
    },
    {
      name: 'Fantasy Icons',
      tag: '32x32 fantasy icons pack v2',
      categories: [],
      thumbnailUrl:
        'https://resources.gdevelop-app.com/assets/Packs/32x32 fantasy icons pack v2.png',
      assetsCount: 285,
      authors: [],
      licenses: [],
    },
    {
      name: 'On-Screen Controls',
      tag: 'on-screen controls',
      categories: ['interface'],
      thumbnailUrl:
        'https://resources.gdevelop-app.com/assets/Packs/on-screen controls.png',
      assetsCount: 287,
      authors: [],
      licenses: [],
    },
  ],
};

export const commentUnprocessed: Comment = {
  id: 'comment-unprocessed-id',
  type: 'FEEDBACK',
  gameId: 'complete-game-id',
  buildId: 'complete-build-id',
  text:
    "This is my honest feedback: I think the art is cute. Specially on the screen when it jumps over the chickens. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
  ratings: {
    version: 1,
    visuals: 2,
    sound: 4,
    fun: 6,
    easeOfUse: 8,
  },
  playerName: 'playerName', // For non-authenticated comments.
  createdAt: 1515084391000,
  updatedAt: 1515084393000,
};
export const commentUnprocessed2: Comment = {
  id: 'comment-unprocessed-id-2',
  type: 'FEEDBACK',
  gameId: 'complete-game-id',
  buildId: 'complete-build-id',
  text: 'I guess I could have had more fun.',
  ratings: {
    version: 1,
    visuals: 3,
    sound: 5,
    fun: 4,
    easeOfUse: 8,
  },
  playerName: 'Other player name', // For non-authenticated comments.
  createdAt: 1615084391000,
  updatedAt: 1625084393000,
};

export const commentWithNoTextUnprocessed: Comment = {
  id: 'comment-unprocessed-id-no-text',
  type: 'FEEDBACK',
  gameId: 'complete-game-id',
  buildId: 'complete-build-id',
  text: '',
  ratings: {
    version: 1,
    visuals: 2,
    sound: 4,
    fun: 6,
    easeOfUse: 8,
  },
  playerName: 'playerName', // For non-authenticated comments.
  createdAt: 1515084391000,
  updatedAt: 1515084393000,
};

export const commentProcessed: Comment = {
  id: 'comment-processed-id',
  type: 'FEEDBACK',
  gameId: 'complete-game-id',
  buildId: 'complete-build-id',
  text:
    'It was a great experience playing this game, I really enjoyed myself. The music was great. Be careful with the difficulty though, it was too easy to win.',
  ratings: {
    version: 1,
    visuals: 2,
    sound: 4,
    fun: 6,
    easeOfUse: 8,
  },
  playerName: 'playerName', // For non-authenticated comments.
  createdAt: 1515084391000,
  updatedAt: 1515084393000,
  processedAt: 1515084393000,
  qualityRatingPerRole: {
    owner: 'great',
  },
};

export const fakeAnnouncements: Announcement[] = [
  {
    id: '123',
    type: 'info',
    level: 'normal',
    titleByLocale: {
      en: 'Some title',
    },
    markdownMessageByLocale: {
      en:
        'Something to announce which is really really cool [with a link](https://gdevelop.io) and *other* **markdown** ~~formatting~~!',
    },
  },
  {
    id: '124',
    type: 'info',
    level: 'urgent',
    titleByLocale: {
      en: 'Some title',
    },
    markdownMessageByLocale: {
      en:
        'Something nothing important but urgent to announce, with a button and [with a link](https://gdevelop.io) too.',
    },
    buttonLabelByLocale: { en: 'View' },
    buttonUrl: 'https://gdevelop.io',
  },
  {
    id: '125',
    type: 'warning',
    level: 'urgent',
    titleByLocale: {
      en: 'Some title',
    },
    markdownMessageByLocale: {
      en: 'Something important and urgent to announce.\n\n- With\n- a list',
    },
    buttonLabelByLocale: { en: 'View' },
    buttonUrl: 'https://gdevelop.io',
  },
  {
    id: '126',
    type: 'warning',
    level: 'normal',
    titleByLocale: {
      en: 'Some title',
    },
    markdownMessageByLocale: {
      en:
        'Something important but not urgent to announce, with a big image.\n\n![some image](https://raw.githubusercontent.com/4ian/GDevelop/master/newIDE/GDevelop%20banner.png)',
    },
    buttonLabelByLocale: { en: 'View' },
    buttonUrl: 'https://gdevelop.io',
  },
  {
    id: '127',
    level: 'normal',
    titleByLocale: {
      en: '',
    },
    markdownMessageByLocale: {
      en:
        '[![GDevelop Mega pack](https://resources.gdevelop.io/announcements/GDevelops_Mega_Pack_Updated.png)](https://play.google.com/store/apps/details?id=io.gdevelop.ide)',
    },
    mobileMarkdownMessageByLocale: {
      en:
        '[![GDevelop Mega pack](https://resources.gdevelop.io/announcements/GDevelops_Mega_Pack_Mobile.jpg)](https://play.google.com/store/apps/details?id=io.gdevelop.ide)',
    },
  },
];

export const fakeGameTemplateLicenses = [
  {
    id: 'personal',
    nameByLocale: {
      en: 'Personal',
    },
    descriptionByLocale: {
      en: 'Use this game template for personal non-monetised projects only.',
    },
  },
  {
    id: 'commercial',
    nameByLocale: {
      en: 'Single commercial use',
    },
    descriptionByLocale: {
      en: 'Use this game template for one commercial game only.',
    },
  },
  {
    id: 'unlimited',
    nameByLocale: {
      en: 'Unlimited commercial use',
    },
    descriptionByLocale: {
      en:
        'Use this game template for unlimited commercial games, on an unlimited number of projects and platforms.',
    },
  },
];

export const fakeAssetPackLicenses = [
  {
    id: 'personal',
    nameByLocale: {
      en: 'Personal',
    },
    descriptionByLocale: {
      en: 'Use these assets for personal non-monetised projects only.',
    },
  },
  {
    id: 'commercial',
    nameByLocale: {
      en: 'Single commercial use',
    },
    descriptionByLocale: {
      en: 'Use these assets for one commercial game only.',
    },
  },
  {
    id: 'unlimited',
    nameByLocale: {
      en: 'Unlimited commercial use',
    },
    descriptionByLocale: {
      en:
        'Use these assets for unlimited commercial games, on an unlimited number of projects and platforms.',
    },
  },
];

export const fakePromotions: Promotion[] = [
  {
    id: 'gdevelop-mega-pack',
    imageUrl:
      'https://resources.gdevelop.io/announcements/GDevelops_Mega_Pack_Updated.png',
    mobileImageUrl:
      'https://resources.gdevelop.io/announcements/GDevelops_Mega_Pack_Mobile.jpg',
    productId: '43994a30-c54b-4f5d-baf5-6e1f99b13824',
    display: 'all',
    type: 'asset-pack',
  },
  {
    id: 'premium-featuring-bubble-dogs',
    imageUrl:
      'https://resources.gdevelop.io/announcements/GDevelop_Quiz_Template.png',
    mobileImageUrl:
      'https://resources.gdevelop.io/announcements/GDevelop_Quiz_Template_Mobile.jpg',
    linkUrl: 'https://gd.games/gdevelop',
    display: 'all',
    type: 'game',
  },
  {
    id: 'gdevelop-produce-farm-bundle',
    imageUrl:
      'https://resources.gdevelop.io/announcements/GDevelop_Produce_Farm_Bundle.png',
    mobileImageUrl:
      'https://resources.gdevelop.io/announcements/Produce_Farm_Bundle_Mobile.jpg',
    productId: '30933458-99e6-41b5-a5f6-5bb220e8754f',
    display: 'all',
    type: 'asset-pack',
  },
];

export const mockSigningCredentials: Array<SigningCredential> = [
  {
    type: 'apple-certificate',
    name: 'Some certificate 1',
    certificateSerial: '12345',
    hasCertificateReady: true,
    kind: 'distribution',
    provisioningProfiles: [
      {
        uuid: '12345678',
        name: 'My provisioning profile',
      },
      {
        uuid: '12345679',
        name: 'My other provisioning profile',
      },
    ],
  },
  {
    type: 'apple-certificate',
    name: 'Some dev certificate 1',
    certificateSerial: '22345',
    hasCertificateReady: true,
    kind: 'development',
    provisioningProfiles: [
      {
        uuid: '22345678',
        name: 'My dev provisioning profile',
      },
      {
        uuid: '22345679',
        name: 'My other dev provisioning profile',
      },
    ],
  },
  // No provisioning profiles
  {
    type: 'apple-certificate',
    name: 'Some certificate 2',
    certificateSerial: '12346',
    hasCertificateReady: true,
    kind: 'distribution',
    provisioningProfiles: [],
  },
  {
    type: 'apple-certificate',
    name: 'Some dev certificate 2',
    certificateSerial: '22346',
    hasCertificateReady: true,
    kind: 'development',
    provisioningProfiles: [],
  },
  // Not ready
  {
    type: 'apple-certificate',
    name: 'Some certificate 3',
    certificateSerial: '12347',
    hasCertificateReady: false,
    kind: 'distribution',
    provisioningProfiles: [
      {
        uuid: '12345678',
        name: 'My provisioning profile',
      },
    ],
  },
  {
    type: 'apple-certificate',
    name: 'Some dev certificate 3',
    certificateSerial: '22347',
    hasCertificateReady: false,
    kind: 'development',
    provisioningProfiles: [
      {
        uuid: '22345678',
        name: 'My dev provisioning profile',
      },
    ],
  },
  // Unkown kind
  {
    type: 'apple-certificate',
    name: 'Some unknown certificate 4',
    certificateSerial: '12347',
    hasCertificateReady: true,
    kind: 'unknown',
    provisioningProfiles: [
      {
        uuid: '12345610',
        name: 'My yet other unknown provisioning profile',
      },
    ],
  },

  // Auth keys:
  {
    type: 'apple-auth-key',
    name: 'Some Auth Key',
    apiIssuer: 'some-issuer',
    apiKey: '12FAKE34',
    hasAuthKeyReady: true,
  },
  {
    type: 'apple-auth-key',
    name: 'Some Not Ready Auth Key',
    apiIssuer: 'some-issuer',
    apiKey: '12FAKE35',
    hasAuthKeyReady: false,
  },
  {
    type: 'apple-auth-key',
    name: 'Some Other Auth Key',
    apiIssuer: 'some-issuer',
    apiKey: '12FAKE36',
    hasAuthKeyReady: true,
  },
];

export const basicFeaturingMarketingPlan = {
  id: 'featuring-basic',
  nameByLocale: {
    en: 'Basic',
  },
  icon: 'speaker',
  canExtend: true,
  requiresManualContact: false,
  includedFeaturings: ['games-platform-home'],
  gameRequirements: {
    hasThumbnail: true,
    isPublished: true,
    isDiscoverable: true,
  },
  descriptionByLocale: {
    en: 'Perfect to playtest your alpha build and gather information.',
    'fr-FR':
      'Parfait pour tester votre version alpha et collecter des informations.',
    'ar-SA': 'مثالي لاختبار إصدار ألفا الخاص بك وجمع المعلومات.',
    'de-DE':
      'Perfekt, um Ihren Alpha-Build zu testen und Informationen zu sammeln.',
    'es-ES': 'Perfecto para probar su versión alfa y recopilar información.',
    'it-IT':
      'Perfetto per testare la tua versione alpha e raccogliere informazioni.',
    'ja-JP': 'アルファビルドをテストして情報を収集するのに最適です。',
    'ko-KR': '알파 빌드를 테스트하고 정보를 수집하기에 이상적입니다.',
    'pl-PL': 'Idealny do przetestowania wersji alfa i zbierania informacji.',
    'pt-BR': 'Perfeito para testar sua versão alfa e coletar informações.',
    'ru-RU':
      'Идеально подходит для тестирования альфа-версии и сбора информации.',
    'sl-SI': 'Popolno za testiranje alfa različice in zbiranje informacij.',
    'uk-UA':
      'Ідеально підходить для тестування альфа-версії та збору інформації.',
    'zh-CN': '完美的测试您的alpha版本并收集信息。',
  },
  bulletPointsByLocale: [
    {
      en: 'Be promoted on gd.games homepage for 7 days',
      'fr-FR':
        "Être mis en avant sur la page d'accueil de gd.games pendant 7 jours",
      'ar-SA': 'يتم عرضه على الصفحة الرئيسية لـ gd.games لمدة 7 أيام',
      'de-DE': '7 Tage lang auf der Startseite von gd.games vorgestellt werden',
      'es-ES': 'Destacado en la página de inicio de gd.games durante 7 días',
      'it-IT': 'In primo piano sulla homepage di gd.games per 7 giorni',
      'ja-JP': 'gd.gamesのホームページで7日間紹介されます',
      'ko-KR': 'gd.games의 홈페이지에서 7 일 동안 소개됩니다.',
      'pl-PL': 'Zostań wyróżniony na stronie głównej gd.games przez 7 dni',
      'pt-BR': 'Destaque na página inicial do gd.games por 7 dias',
      'ru-RU': 'Рекомендуется на главной странице gd.games в течение 7 дней',
      'sl-SI': 'Prikazano na začetni strani gd.games 7 dni',
      'uk-UA': 'Рекомендується на головній сторінці gd.games протягом 7 днів',
      'zh-CN': '在gd.games首页上推广7天',
    },
    {
      en: 'Get more player feedback',
      'fr-FR': 'Obtenez plus de commentaires de joueurs',
      'ar-SA': 'احصل على مزيد من تعليقات اللاعبين',
      'de-DE': 'Mehr Spieler-Feedback erhalten',
      'es-ES': 'Obtenga más comentarios de los jugadores',
      'it-IT': 'Ottieni più feedback dai giocatori',
      'ja-JP': 'より多くのプレイヤーフィードバックを取得する',
      'ko-KR': '더 많은 플레이어 피드백 받기',
      'pl-PL': 'Otrzymaj więcej opinii graczy',
      'pt-BR': 'Obtenha mais feedback dos jogadores',
      'ru-RU': 'Получить больше отзывов игроков',
      'sl-SI': 'Pridobite več povratnih informacij igralcev',
      'uk-UA': 'Отримати більше відгуків гравців',
      'zh-CN': '获得更多玩家反馈',
    },
  ],
  additionalSuccessMessageByLocale: {
    en:
      'Ensure that your game is public and you have configured a thumbnail for gd.games. This can take a few minutes for your game to be visible on the platform.',
    'fr-FR':
      'Assurez-vous que votre jeu est public et que vous avez configuré une miniature pour gd.games. Il peut falloir quelques minutes pour que votre jeu soit visible sur la plateforme.',
    'ar-SA':
      'تأكد من أن لعبتك عامة وأنك قمت بتكوين صورة مصغرة لـ gd.games. قد يستغرق بضع دقائق حتى تظهر لعبتك على المنصة.',
    'de-DE':
      'Stellen Sie sicher, dass Ihr Spiel öffentlich ist und Sie ein Miniaturbild für gd.games konfiguriert haben. Es kann einige Minuten dauern, bis Ihr Spiel auf der Plattform sichtbar ist.',
    'es-ES':
      'Asegúrate de que tu juego es público y has configurado una miniatura para gd.games. Puede tardar unos minutos en que tu juego sea visible en la plataforma.',
    'it-IT':
      'Assicurati che il tuo gioco sia pubblico e che tu abbia configurato un’anteprima per gd.games. Potrebbero essere necessari alcuni minuti affinché il tuo gioco sia visibile sulla piattaforma.',
    'ja-JP':
      'ゲームが公開されており、gd.gamesのサムネイルが設定されていることを確認してください。ゲームがプラットフォーム上で表示されるまで数分かかる場合があります。',
    'ko-KR':
      '게임이 공개되어 있고 gd.games에 대한 썸네일이 구성되어 있는지 확인하십시오. 게임이 플랫폼에서 보이는 데 몇 분 정도 걸릴 수 있습니다.',
    'pl-PL':
      'Upewnij się, że twoja gra jest publiczna i masz skonfigurowany miniaturę dla gd.games. Może minąć kilka minut, zanim twoja gra będzie widoczna na platformie.',
    'pt-BR':
      'Certifique-se de que seu jogo é público e você configurou uma miniatura para o gd.games. Pode levar alguns minutos para que seu jogo seja visível na plataforma.',
    'ru-RU':
      'Убедитесь, что ваша игра является общедоступной и вы настроили миниатюру для gd.games. Это может занять несколько минут, чтобы ваша игра стала видимой на платформе.',
    'sl-SI':
      'Prepričajte se, da je vaša igra javna in da ste konfigurirali sličico za gd.games. Za vašo igro lahko traja nekaj minut, da bo vidna na platformi.',
    'uk-UA':
      'Переконайтеся, що ваша гра є публічною, і ви налаштували мініатюру для gd.games. Це може зайняти кілька хвилин, щоб ваша гра стала видимою на платформі.',
    'zh-CN':
      '确保您的游戏是公开的，并且您已经为gd.games配置了缩略图。您的游戏在平台上可见可能需要几分钟。',
  },
};
