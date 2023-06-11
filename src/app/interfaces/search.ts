import { ProfilePic } from "./profile-pic";

export interface Search {
    totalResults: number;
    searchResults: Array<Result>
}

export interface Result{
    username: string;
    playerId: string;
    profilePic: ProfilePic;
}
