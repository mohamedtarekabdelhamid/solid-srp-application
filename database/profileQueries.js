import {pool} from '../config/databaseConfig.js';

export const readProfile = async (profileId) => {
    try {
        return await pool.query(
            `
            SELECT * FROM profile
            WHERE profile_id = ?
            `, [profileId]
        );
    } catch (error) {
        console.log(error);
        throw error; // Consider rethrowing the error to ensure proper error handling
    }
};

export const updateProfile = async (data) => {
    return pool.query(
        `
        UPDATE profile SET first_name = ?, last_name = ?, bio = ?
        WHERE profile_id = ?
        `, [data.firstName, data.lastName, data.bio, data.profileId]
    );
}