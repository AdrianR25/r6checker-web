export interface Check {
    error: boolean;
    checkResults: {
        username: string;
        profilePic: string;
        playerLevel: number;
        cheatRating: any;
        rankedWinrate: any;
        rankedPlaytime: number;
        rankedKillrate: any;
        currentMmr: number;
        currentRank: number;
        season16Rank: number;
        season15Rank: number;
    }
}
