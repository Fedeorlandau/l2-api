const knex = require('knex');

module.exports = class L2Api {
    constructor(user, password, host, type = 'l2off') {
        const connection = {
            host,
            user,
            password,
        }

        this.lin2world = knex({
            client: 'mssql',
            connection: {
              ...connection,
              database : 'lin2world'
            }
          });

          this.lin2db = knex({
            client: 'mssql',
            connection: {
              ...connection,
              database : 'lin2db'
            }
          });
    }

    async getAccountByName(name) {
      return this.lin2db.select('*').from('user_account').limit(limit).where('account', name);
    }

    async getCharByName(char_name) {
      return this.lin2world.select('*').from('user_data').limit(limit).where('char_name', char_name);
    }

    async getTopPVP(limit = 10) {
        return this.lin2world.select('*').from('user_data').limit(limit).where('Duel', '>=', 0).orderBy('Duel', 'desc');
    }

    async getTopPK(limit = 10) {
      return this.lin2world.select('*').from('user_data').limit(limit).where('PK', '>=', 0).orderBy('PK', 'desc');
  }
}