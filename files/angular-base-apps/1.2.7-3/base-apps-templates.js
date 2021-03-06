angular.module('base').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/accordion/accordion-item.html',
    '<div class="accordion-item" ng-class="{\'is-active\': active}">\n' +
    '  <div class="accordion-title" ng-click="activate()">{{ title }}</div>\n' +
    '  <div class="accordion-content" ng-transclude></div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('base').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/accordion/accordion.html',
    '<div class="accordion" ng-transclude>\n' +
    '</div>\n' +
    '');
}]);

angular.module('base').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/actionsheet/actionsheet-button.html',
    '<div>\n' +
    '  <a href="#"\n' +
    '    class="button"\n' +
    '    ng-if="title.length > 0">{{ title }}</a>\n' +
    '  <div ng-transclude></div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('base').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/actionsheet/actionsheet-content.html',
    '<div\n' +
    '  class="action-sheet {{ position }}"\n' +
    '  ng-class="{\'is-active\': active}"\n' +
    '  >\n' +
    '    <div\n' +
    '    ng-transclude>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('base').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/actionsheet/actionsheet.html',
    '<div class="action-sheet-container"\n' +
    '  ng-transclude>\n' +
    '</div>\n' +
    '');
}]);

angular.module('base').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/loader/spinkit-chasing-dots.html',
    '<div class="sk-loader sk-chasing-dots">\n' +
    '  <div class="sk-child sk-dot1"></div>\n' +
    '  <div class="sk-child sk-dot2"></div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('base').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/loader/spinkit-circle.html',
    '<div class="sk-loader sk-circle">\n' +
    '  <div class="sk-circle1 sk-child"></div>\n' +
    '  <div class="sk-circle2 sk-child"></div>\n' +
    '  <div class="sk-circle3 sk-child"></div>\n' +
    '  <div class="sk-circle4 sk-child"></div>\n' +
    '  <div class="sk-circle5 sk-child"></div>\n' +
    '  <div class="sk-circle6 sk-child"></div>\n' +
    '  <div class="sk-circle7 sk-child"></div>\n' +
    '  <div class="sk-circle8 sk-child"></div>\n' +
    '  <div class="sk-circle9 sk-child"></div>\n' +
    '  <div class="sk-circle10 sk-child"></div>\n' +
    '  <div class="sk-circle11 sk-child"></div>\n' +
    '  <div class="sk-circle12 sk-child"></div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('base').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/loader/spinkit-cube-grid.html',
    '<div class="sk-loader sk-cube-grid">\n' +
    '  <div class="sk-cube sk-cube1"></div>\n' +
    '  <div class="sk-cube sk-cube2"></div>\n' +
    '  <div class="sk-cube sk-cube3"></div>\n' +
    '  <div class="sk-cube sk-cube4"></div>\n' +
    '  <div class="sk-cube sk-cube5"></div>\n' +
    '  <div class="sk-cube sk-cube6"></div>\n' +
    '  <div class="sk-cube sk-cube7"></div>\n' +
    '  <div class="sk-cube sk-cube8"></div>\n' +
    '  <div class="sk-cube sk-cube9"></div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('base').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/loader/spinkit-double-bounce.html',
    '<div class="sk-loader sk-double-bounce">\n' +
    '  <div class="sk-child sk-double-bounce1"></div>\n' +
    '  <div class="sk-child sk-double-bounce2"></div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('base').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/loader/spinkit-fading-circle.html',
    '<div class="sk-loader sk-fading-circle">\n' +
    '  <div class="sk-circle1 sk-circle"></div>\n' +
    '  <div class="sk-circle2 sk-circle"></div>\n' +
    '  <div class="sk-circle3 sk-circle"></div>\n' +
    '  <div class="sk-circle4 sk-circle"></div>\n' +
    '  <div class="sk-circle5 sk-circle"></div>\n' +
    '  <div class="sk-circle6 sk-circle"></div>\n' +
    '  <div class="sk-circle7 sk-circle"></div>\n' +
    '  <div class="sk-circle8 sk-circle"></div>\n' +
    '  <div class="sk-circle9 sk-circle"></div>\n' +
    '  <div class="sk-circle10 sk-circle"></div>\n' +
    '  <div class="sk-circle11 sk-circle"></div>\n' +
    '  <div class="sk-circle12 sk-circle"></div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('base').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/loader/spinkit-folding-cube.html',
    '<div class="sk-loader sk-folding-cube">\n' +
    '  <div class="sk-cube1 sk-cube"></div>\n' +
    '  <div class="sk-cube2 sk-cube"></div>\n' +
    '  <div class="sk-cube4 sk-cube"></div>\n' +
    '  <div class="sk-cube3 sk-cube"></div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('base').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/loader/spinkit-pulse.html',
    '<div class="sk-loader sk-pulse"></div>\n' +
    '');
}]);

angular.module('base').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/loader/spinkit-rotating-plane.html',
    '<div class="sk-loader sk-rotating-plane"></div>\n' +
    '');
}]);

angular.module('base').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/loader/spinkit-three-bounce.html',
    '<div class="sk-loader sk-three-bounce">\n' +
    '  <div class="sk-child sk-bounce1"></div>\n' +
    '  <div class="sk-child sk-bounce2"></div>\n' +
    '  <div class="sk-child sk-bounce3"></div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('base').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/loader/spinkit-wandering-cubes.html',
    '<div class="sk-loader sk-wandering-cubes">\n' +
    '  <div class="sk-cube sk-cube1"></div>\n' +
    '  <div class="sk-cube sk-cube2"></div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('base').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/loader/spinkit-wave.html',
    '<div class="sk-loader sk-wave">\n' +
    '  <div class="sk-rect sk-rect1"></div>\n' +
    '  <div class="sk-rect sk-rect2"></div>\n' +
    '  <div class="sk-rect sk-rect3"></div>\n' +
    '  <div class="sk-rect sk-rect4"></div>\n' +
    '  <div class="sk-rect sk-rect5"></div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('base').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/modal/modal-confirm.html',
    '<h1 ng-show="title">{{ title }}</h1>\n' +
    '<p ng-show="content">{{ content }}</p>\n' +
    '<div class="grid-block align-center button-row">\n' +
    '  <div class="grid-content shrink" ng-class="{\'order-2\': !enterFirst}">\n' +
    '    <a class="button enter-button" ng-click="enter()">{{ enterText }}</a>\n' +
    '  </div>\n' +
    '  <div class="grid-content shrink">\n' +
    '    <a class="button cancel-button" ng-click="cancel()">{{ cancelText }}</a>\n' +
    '  </div>\n' +
    '<div>\n' +
    '');
}]);

angular.module('base').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/modal/modal-prompt.html',
    '<h1 ng-show="title">{{ title }}</h1>\n' +
    '<p ng-show="content">{{ content }}</p>\n' +
    '<input type="{{ inputType }}" ng-model="data.value"></input>\n' +
    '<div class="grid-block align-center button-row">\n' +
    '  <div class="grid-content shrink" ng-class="{\'order-2\': !enterFirst}">\n' +
    '    <a class="button enter-button" ng-click="enter()">{{ enterText }}</a>\n' +
    '  </div>\n' +
    '  <div class="grid-content shrink">\n' +
    '    <a class="button cancel-button" ng-click="cancel()">{{ cancelText }}</a>\n' +
    '  </div>\n' +
    '<div>\n' +
    '');
}]);

angular.module('base').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/modal/modal.html',
    '<div\n' +
    '  class="modal-overlay"\n' +
    '  ng-click="hideOverlay($event)">\n' +
    '  <aside\n' +
    '    class="modal"\n' +
    '    ng-transclude>\n' +
    '  </aside>\n' +
    '</div>\n' +
    '');
}]);

angular.module('base').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/notification/notification-set.html',
    '<div class="notification-container {{position}}">\n' +
    '  <ba-notification ng-repeat="notification in notifications"\n' +
    '    title="notification.title"\n' +
    '    image="notification.image"\n' +
    '    notif-id = "notification.id"\n' +
    '    color="notification.color"\n' +
    '    autoclose="notification.autoclose"\n' +
    '    >{{ notification.content }}</ba-notification>\n' +
    '</div>');
}]);

angular.module('base').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/notification/notification-static.html',
    '<div ba-swipe-close="swipe" class="static-notification {{ color }} {{ position }}">\n' +
    '  <a href="#"\n' +
    '    class="close-button"\n' +
    '    ng-click="hide(); $event.preventDefault(); $event.stopPropagation()">&times;</a>\n' +
    '  <div class="notification-icon" ng-if="image">\n' +
    '    <img ng-src="{{ image }}"/>\n' +
    '  </div>\n' +
    '  <div class="notification-content">\n' +
    '    <h1 ng-bind-html="trustedTitle"></h1>\n' +
    '    <p ng-transclude></p>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('base').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/notification/notification.html',
    '<div ba-swipe-close="swipe" class="notification {{ color }}">\n' +
    '  <a href="#"\n' +
    '    class="close-button"\n' +
    '    ng-click="hide(); $event.preventDefault(); $event.stopPropagation()">&times;</a>\n' +
    '  <div class="notification-icon" ng-if="image">\n' +
    '    <img ng-src="{{ image }}"/>\n' +
    '  </div>\n' +
    '  <div class="notification-content">\n' +
    '    <h1 ng-bind-html="trustedTitle"></h1>\n' +
    '    <p ng-transclude></p>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('base').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/offcanvas/offcanvas.html',
    '<div\n' +
    '  class="off-canvas {{ position }}"\n' +
    '  ng-class="{\'is-active\': active}"\n' +
    '  ng-transclude>\n' +
    '</div>\n' +
    '');
}]);

angular.module('base').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/panel/panel.html',
    '<div\n' +
    '  class="panel"\n' +
    '  ng-class="positionClass"\n' +
    '  ng-transclude\n' +
    '  >\n' +
    '</div>\n' +
    '');
}]);

angular.module('base').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/popup/popup.html',
    '<div class="popup" ng-class="{\'is-active\': active }" ng-transclude>\n' +
    '</div>\n' +
    '');
}]);

angular.module('base').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/tabs/tab-content.html',
    '<div class="tab-contents">\n' +
    '  <div ba-tab-individual\n' +
    '    class="tab-content"\n' +
    '    ng-class="{\'is-active\': tab.active}"\n' +
    '    ng-repeat="tab in tabs"\n' +
    '    tab="tab">\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('base').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/tabs/tab.html',
    '<div class="tab-item"\n' +
    '  ng-class="{\'is-active\': active}"\n' +
    '  ng-click="makeActive()">{{ title }}</div>\n' +
    '');
}]);

angular.module('base').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/tabs/tabs.html',
    '<div>\n' +
    '  <div class="tabs" ng-transclude>\n' +
    '  </div>\n' +
    '  <div ba-tab-content\n' +
    '    target="{{ id }}"\n' +
    '    ng-if="showTabContent">\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
