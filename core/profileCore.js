import {readProfile, updateProfile} from '../database/profileQueries.js';

export const readProfileCore = async (profileId) => {
    try {
        return await readProfile(profileId)
    } catch (error) {
        console.log(error)
    }
}

export const updateProfileCore = async (data) => {
    try {
        return await updateProfile(data)
    } catch (error) {
        console.log(error)
    }
}