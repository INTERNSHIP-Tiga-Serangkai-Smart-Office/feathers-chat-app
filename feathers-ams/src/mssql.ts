// For more information about this file see https://dove.feathersjs.com/guides/cli/databases.html
import knex from 'knex'
import type { Knex } from 'knex'
import type { Application } from './declarations'

declare module './declarations' {
  interface Configuration {
    mssqlClient: Knex
  }
}

export const mssql = (app: Application) => {
  const config = app.get('mssql')
  const db = knex(config!)

  app.set('mssqlClient', db)
}
