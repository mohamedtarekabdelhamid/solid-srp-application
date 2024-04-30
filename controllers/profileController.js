import {readProfileCore, updateProfileCore} from '../core/profileCore.js'

export const readProfileController = async (req, res) => {
    try {
        const {profileId} = req.params
        const [profileData]= await readProfileCore(profileId);

        res.status(200).send({
            message: 'Profile read successfully',
            data: profileData
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}

export const updateProfileController = async (req, res) => {
    try {
        const {profileId} = req.params
        const data = {...req.body, profileId}

        const [profileData]= await updateProfileCore(data);

        if (profileData.affectedRows > 0) {
            return res.status(200).send({
                message: 'Profile updated successfully',
                data: []
            })
        } else {
            return res.status(400).send({
                message: 'Profile update failed',
                data: []
            })
        }
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}
