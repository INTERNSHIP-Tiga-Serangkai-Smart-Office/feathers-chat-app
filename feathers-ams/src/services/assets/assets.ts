// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  assetDataValidator,
  assetPatchValidator,
  assetQueryValidator,
  assetResolver,
  assetExternalResolver,
  assetDataResolver,
  assetPatchResolver,
  assetQueryResolver
} from './assets.schema'

import type { Application } from '../../declarations'
import { AssetService, getOptions } from './assets.class'
import { assetPath, assetMethods } from './assets.shared'

export * from './assets.class'
export * from './assets.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const asset = (app: Application) => {
  // Register our service on the Feathers application
  app.use(assetPath, new AssetService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: assetMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(assetPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(assetExternalResolver),
        schemaHooks.resolveResult(assetResolver)
      ]
    },
    before: {
      all: [schemaHooks.validateQuery(assetQueryValidator), schemaHooks.resolveQuery(assetQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(assetDataValidator), schemaHooks.resolveData(assetDataResolver)],
      patch: [schemaHooks.validateData(assetPatchValidator), schemaHooks.resolveData(assetPatchResolver)],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [assetPath]: AssetService
  }
}
