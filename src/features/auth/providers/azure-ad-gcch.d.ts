import type { OAuthConfig, OAuthUserConfig } from "next-auth/providers";
export interface AzureADGCCHProfile extends Record<string, any> {
    sub: string;
    nickname: string;
    email: string;
    picture: string;
}
export default function AzureADGCCH<P extends AzureADGCCHProfile>(options: OAuthUserConfig<P> & {
    /**
     * https://docs.microsoft.com/en-us/graph/api/profilephoto-get?view=graph-rest-1.0#examples
     * @default 48
     */
    profilePhotoSize?: 48 | 64 | 96 | 120 | 240 | 360 | 432 | 504 | 648;
    /** @default "common" */
    tenantId?: string;
}): OAuthConfig<P>;
//# sourceMappingURL=azure-ad-gcch.d.ts.map