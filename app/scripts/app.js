'use strict';
/**
 * @file app.js
 * main bootstrap file og the application
 * defines namespaces and modules
 * configures providers for further processing
 * @author Albert Stepanyan
 * @date 16.09.2015
 */

/**
 * @namespace Mocks
 * @class Mocks
 * Mocks module of the app
 */
angular.module('Mocks', []);

/**
 * @class App
 * declaring main module of the application
 * dependencies:
 * ngRoute, ngMock, AppServices, AppControllers, AppDirectives
 */
angular.module('App', [
  'ngMockE2E',
  'Mocks',
  'ui.router',
  'AppTemplates'
]).config(function () {});