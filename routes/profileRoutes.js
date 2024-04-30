import express from 'express';

import {readProfileController, updateProfileController} from '../controllers/profileController.js'

const router = express();

router.get(
    '/:profileId',
    readProfileController
)

router.patch(
    '/:profileId',
    updateProfileController
)

export default router;