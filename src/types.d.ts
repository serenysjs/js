export interface UserResponse {
    boost?: Boost | null;
    profile: Profile;
    user: User;
}

interface Boost {
    currentLevel: string;
    currentLevelDate: Date;
    nextLevel: string;
    nextLevelDate: Date;
}

interface Profile {
    aboutMe?: string | null
    avatarUrl?: string | null;
    badges: string[];
    bannerUrl?: string | null;
    connectedAccounts: UserAccount[];
}

interface User {
    discriminator: string;
    globalName?: string | null;
    id: string;
    legacyName: string | null;
    premiumSince?: Date | null;
    premiumType: string;
    tag: string;
    username: string;
}

interface UserAccount {
    id?: string;
    name?: string;
    type?: string;
    verified?: boolean;
}

declare module "serenys" {}