'use strict';

describe('Directive: Editor', function () {

  // load the directive's module
  beforeEach(module('webAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-editor></-editor>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the Editor directive');
  }));
});
