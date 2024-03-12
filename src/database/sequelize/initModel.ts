import { Sequelize } from 'sequelize';
import { initLoginModel } from './loginModel';

/**
 *
 * @param {Sequelize} sequelize - The Sequelize instance.
 */
export function initModel(sequelize: Sequelize) {
  initLoginModel(sequelize);
  
}
