/* eslint-disable tsdoc/syntax */
/* eslint-disable no-negated-condition */
/* eslint-disable no-restricted-globals */
/* eslint-disable n/prefer-global/process */
import { fetch } from 'undici'
import type { UserAccount, UserResponse } from './types.d.ts';

enum PremiumType {
    BASIC = 'Basic',
    NITRO = 'Nitro',
    NONE = 'None'
}

class UserEndpoint {
    private baseUrl: string = 'https://serenys.xyz/api/user/'

    private readonly throwError: boolean;

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    public constructor(
        throwError: boolean
    ) {
        this.throwError = throwError;
    }

    /**
     * Collects a user's information via the Serenys API Users endpoint.
     * 
     * @param {string} userId The ID of the user who will have the collected information.
     * @returns {Promise<(UserResponse & { responseTime: number }) | null>}
     * @example ```js
     * const { Serenys } = require('serenys');
     * 
     * (async () => {
     * const client = new Serenys(false);
     * console.log(await client.users.get('764624695169384478'));
     * })()
     * ```
     */
    public async get(userId: string): Promise<(UserResponse & { responseTime: number }) | null> {
        const startTimer = process.hrtime()

        const response = await (await fetch(this.baseUrl + userId)).json() as Record<string, any>
        if (!response || response.message) {
            if (this.throwError === false) return null;
            else throw new SyntaxError('The ID you provided is not a Discord user/bot. If the error persists, contact support at: ' + (response.support as string ?? 'https://discord.gg/discloud'))
        }

        const endTimer = process.hrtime(startTimer)
        return {
            responseTime: Math.trunc(((endTimer[0] * 1e9) + endTimer[1]) / 1e6),
            user: {
                id: response.user.id as string,
                username: response.user.username as string,
                discriminator: response.user.discriminator as string,
                tag: response.user.tag as string,
                premiumType: response.user?.premium_type === 'Nitro' ? PremiumType.NITRO : !response.user.premium_type ? PremiumType.NONE : PremiumType.BASIC,
                premiumSince: response.user?.premium_since ? new Date(response.user?.premium_since) : null,
                globalName: (response.user?.global_name as string) ?? null,
                legacyName: (response.legacy_username as string) ?? null
            },
            profile: {
                badges: response.user_profile?.badges_array as string[],
                aboutMe: response.user_profile?.aboutMe ?? null,
                avatarUrl: response.user_profile?.avatarUrl ?? null,
                bannerUrl: response.user_profile?.bannerUrl ?? null,
                connectedAccounts: response.connected_accounts as UserAccount[]
            },
            boost: response.boost ? {
                currentLevel: response.boost.current_level as string,
                currentLevelDate: new Date(response.boost.current_level_date),
                nextLevel: response.boost.next_level as string,
                nextLevelDate: new Date(response.boost.next_level_date)
            } : null
        }
    }
}

class Serenys {
    public users: UserEndpoint;

  /**
   * Class to consume the Serenys API.
   *
   * @param {boolean} throwErrors A boolean to define if the functions will return errors or not. (default is true)
   */
    public constructor(throwErrors: boolean = true ) {
        this.users = new UserEndpoint(throwErrors)
    }
}

export { Serenys }