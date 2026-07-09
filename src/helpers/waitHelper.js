/**
 * Wait and retry utilities for mobile testing
 */
const logger = require('./logger');

class WaitHelper {
  /**
   * Wait for element to be displayed
   * @param {string} selector - Element selector
   * @param {number} timeout - Timeout in milliseconds (default: 5000)
   */
  async waitForDisplayed(selector, timeout = 5000) {
    try {
      await $(selector).waitForDisplayed({ timeout });
      logger.debug(`Element ${selector} displayed`);
    } catch (error) {
      logger.error(`Element ${selector} not displayed within ${timeout}ms`);
      throw error;
    }
  }

  /**
   * Wait for element to exist
   * @param {string} selector - Element selector
   * @param {number} timeout - Timeout in milliseconds (default: 5000)
   */
  async waitForExist(selector, timeout = 5000) {
    try {
      await $(selector).waitForExist({ timeout });
      logger.debug(`Element ${selector} exists`);
    } catch (error) {
      logger.error(`Element ${selector} does not exist within ${timeout}ms`);
      throw error;
    }
  }

  /**
   * Wait for element to be enabled
   * @param {string} selector - Element selector
   * @param {number} timeout - Timeout in milliseconds (default: 5000)
   */
  async waitForEnabled(selector, timeout = 5000) {
    try {
      await $(selector).waitForEnabled({ timeout });
      logger.debug(`Element ${selector} enabled`);
    } catch (error) {
      logger.error(`Element ${selector} not enabled within ${timeout}ms`);
      throw error;
    }
  }

  /**
   * Retry a function with custom attempts
   * @param {function} fn - Function to retry
   * @param {number} attempts - Number of retry attempts
   * @param {number} delay - Delay between attempts in milliseconds
   */
  async retry(fn, attempts = 3, delay = 1000) {
    let lastError;
    for (let i = 1; i <= attempts; i++) {
      try {
        logger.debug(`Attempt ${i} of ${attempts}`);
        return await fn();
      } catch (error) {
        lastError = error;
        if (i < attempts) {
          logger.warn(`Attempt ${i} failed, retrying in ${delay}ms...`);
          await this.sleep(delay);
        }
      }
    }
    throw lastError;
  }

  /**
   * Sleep for specified milliseconds
   * @param {number} ms - Milliseconds to sleep
   */
  async sleep(ms = 1000) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

module.exports = new WaitHelper();
