import { Router } from 'express'
import { create, createCommand } from './controller'

const router = new Router()

/**
 * @api {post} /attack Create attack
 * @apiName CreateAttack
 * @apiGroup Attack
 * @apiSuccess {Object} attack Attack's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Attack not found.
 */
router.post('/',
  create);

router.put('/',
  createCommand);

export default router
