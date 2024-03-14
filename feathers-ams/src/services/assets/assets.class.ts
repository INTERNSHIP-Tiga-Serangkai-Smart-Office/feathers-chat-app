// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Asset, AssetData, AssetPatch, AssetQuery } from './assets.schema'

export type { Asset, AssetData, AssetPatch, AssetQuery }

export interface AssetParams extends KnexAdapterParams<AssetQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class AssetService<ServiceParams extends Params = AssetParams> extends KnexService<
  Asset,
  AssetData,
  AssetParams,
  AssetPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mssqlClient'),
    name: 'assets'
  }
}
