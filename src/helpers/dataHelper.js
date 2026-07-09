/**
 * Data helper - load and manage test data
 */
const fs = require('fs');
const path = require('path');
const logger = require('./logger');

class DataHelper {
  constructor() {
    this.dataPath = path.join(__dirname, '../../tests/data');
  }

  /**
   * Load JSON data file
   * @param {string} filename - Filename to load
   */
  loadData(filename) {
    try {
      const filePath = path.join(this.dataPath, filename);
      const data = fs.readFileSync(filePath, 'utf8');
      logger.debug(`Data loaded from ${filename}`);
      return JSON.parse(data);
    } catch (error) {
      logger.error(`Failed to load data from ${filename}: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get users data
   */
  getUsers() {
    return this.loadData('testData.json').users;
  }

  /**
   * Get forms data
   */
  getForms() {
    return this.loadData('testData.json').forms;
  }

  /**
   * Get specific user by key
   * @param {string} key - User key (e.g., 'validUser', 'invalidUser')
   */
  getUser(key) {
    const users = this.getUsers();
    if (!users[key]) {
      logger.warn(`User key '${key}' not found`);
      return null;
    }
    return users[key];
  }

  /**
   * Get valid user credentials
   */
  getValidUser() {
    return this.getUser('validUser');
  }

  /**
   * Get invalid user credentials
   */
  getInvalidUser() {
    return this.getUser('invalidUser');
  }

  /**
   * Get form data by key
   * @param {string} key - Form key
   */
  getForm(key) {
    const forms = this.getForms();
    if (!forms[key]) {
      logger.warn(`Form key '${key}' not found`);
      return null;
    }
    return forms[key];
  }
}

module.exports = new DataHelper();
