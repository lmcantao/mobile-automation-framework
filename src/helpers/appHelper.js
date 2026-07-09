/**
 * Application helper - initialization and cleanup
 */
const logger = require('./logger');

class AppHelper {
  /**
   * Initialize application (reset, grant permissions, etc)
   */
  async initializeApp() {
    try {
      logger.info('Initializing application...');
      
      // Grant permissions if needed (Android)
      if (driver.capabilities.platformName === 'Android') {
        await this.grantAndroidPermissions();
      }
      
      logger.success('Application initialized');
    } catch (error) {
      logger.error(`Failed to initialize app: ${error.message}`);
      throw error;
    }
  }

  /**
   * Close application
   */
  async closeApp() {
    try {
      logger.info('Closing application...');
      await driver.closeApp();
      logger.success('Application closed');
    } catch (error) {
      logger.error(`Failed to close app: ${error.message}`);
      throw error;
    }
  }

  /**
   * Grant Android permissions
   */
  async grantAndroidPermissions() {
    const permissions = [
      'android.permission.CAMERA',
      'android.permission.ACCESS_FINE_LOCATION'
    ];

    for (const permission of permissions) {
      try {
        await driver.execute('mobile: shell', {
          command: 'pm grant com.example.app ' + permission
        });
        logger.debug(`Permission ${permission} granted`);
      } catch (error) {
        logger.warn(`Could not grant permission ${permission}`);
      }
    }
  }

  /**
   * Get current platform
   */
  getPlatform() {
    return driver.capabilities.platformName;
  }

  /**
   * Check if running on Android
   */
  isAndroid() {
    return this.getPlatform() === 'Android';
  }

  /**
   * Check if running on iOS
   */
  isIOS() {
    return this.getPlatform() === 'iOS';
  }

  /**
   * Take screenshot
   * @param {string} filename - Screenshot filename
   */
  async takeScreenshot(filename = `screenshot-${Date.now()}.png`) {
    try {
      await driver.saveScreenshot(`./reports/screenshots/${filename}`);
      logger.debug(`Screenshot saved: ${filename}`);
    } catch (error) {
      logger.error(`Failed to take screenshot: ${error.message}`);
    }
  }
}

module.exports = new AppHelper();
