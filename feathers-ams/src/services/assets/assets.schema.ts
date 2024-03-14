// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { AssetService } from './assets.class'

// Main data model schema
export const assetSchema = Type.Object(
  {
    id: Type.Number(),
    category: Type.String(),
    nama: Type.String()
  },
  { $id: 'Asset', additionalProperties: false }
)
export type Asset = Static<typeof assetSchema>
export const assetValidator = getValidator(assetSchema, dataValidator)
export const assetResolver = resolve<Asset, HookContext<AssetService>>({})

export const assetExternalResolver = resolve<Asset, HookContext<AssetService>>({})

// Schema for creating new entries
export const assetDataSchema = Type.Pick(assetSchema, ['category'], {
  $id: 'AssetData'
})
export type AssetData = Static<typeof assetDataSchema>
export const assetDataValidator = getValidator(assetDataSchema, dataValidator)
export const assetDataResolver = resolve<Asset, HookContext<AssetService>>({})

// Schema for updating existing entries
export const assetPatchSchema = Type.Partial(assetSchema, {
  $id: 'AssetPatch'
})
export type AssetPatch = Static<typeof assetPatchSchema>
export const assetPatchValidator = getValidator(assetPatchSchema, dataValidator)
export const assetPatchResolver = resolve<Asset, HookContext<AssetService>>({})

// Schema for allowed query properties
export const assetQueryProperties = Type.Pick(assetSchema, ['id', 'category','nama'])
export const assetQuerySchema = Type.Intersect(
  [
    querySyntax(assetQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type AssetQuery = Static<typeof assetQuerySchema>
export const assetQueryValidator = getValidator(assetQuerySchema, queryValidator)
export const assetQueryResolver = resolve<AssetQuery, HookContext<AssetService>>({})
