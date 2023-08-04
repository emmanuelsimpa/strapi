'use strict';

/**
 * bosey service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bosey.bosey');
