'use strict';

/**
 * movie-poster service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::movie-poster.movie-poster');
