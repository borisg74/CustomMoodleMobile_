webpackJsonp([26],{

/***/ 2082:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsGeneralPageModule", function() { return CoreSettingsGeneralPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__general__ = __webpack_require__(2236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CoreSettingsGeneralPageModule = /** @class */ (function () {
    function CoreSettingsGeneralPageModule() {
    }
    CoreSettingsGeneralPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__general__["a" /* CoreSettingsGeneralPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__general__["a" /* CoreSettingsGeneralPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreSettingsGeneralPageModule);
    return CoreSettingsGeneralPageModule;
}());

//# sourceMappingURL=general.module.js.map

/***/ }),

/***/ 2236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreSettingsGeneralPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_constants__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_file__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_lang__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_local_notifications__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_pushnotifications_providers_pushnotifications__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__configconstants__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_helper__ = __webpack_require__(985);
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * Page that displays the general settings.
 */
var CoreSettingsGeneralPage = /** @class */ (function () {
    function CoreSettingsGeneralPage(appProvider, configProvider, fileProvider, eventsProvider, langProvider, domUtils, pushNotificationsProvider, localNotificationsProvider, settingsHelper) {
        var _this = this;
        this.appProvider = appProvider;
        this.configProvider = configProvider;
        this.eventsProvider = eventsProvider;
        this.langProvider = langProvider;
        this.domUtils = domUtils;
        this.pushNotificationsProvider = pushNotificationsProvider;
        this.settingsHelper = settingsHelper;
        this.languages = [];
        this.fontSizes = [];
        this.colorSchemes = [];
        // Get the supported languages.
        var languages = __WEBPACK_IMPORTED_MODULE_11__configconstants__["a" /* CoreConfigConstants */].languages;
        for (var code in languages) {
            this.languages.push({
                code: code,
                name: languages[code]
            });
        }
        if (!__WEBPACK_IMPORTED_MODULE_11__configconstants__["a" /* CoreConfigConstants */].forceColorScheme) {
            this.colorSchemeDisabled = this.settingsHelper.isColorSchemeDisabledInSite();
            if (this.colorSchemeDisabled) {
                this.colorSchemes.push('light');
                this.selectedScheme = this.colorSchemes[0];
            }
            else {
                var defaultColorScheme = 'light';
                // Auto is not working on iOS right now until we update Webkit.
                if (!this.appProvider.isIOS() && (window.matchMedia('(prefers-color-scheme: dark)').matches ||
                    window.matchMedia('(prefers-color-scheme: light)').matches)) {
                    this.colorSchemes.push('auto');
                    defaultColorScheme = 'auto';
                }
                this.colorSchemes.push('light');
                this.colorSchemes.push('dark');
                this.configProvider.get(__WEBPACK_IMPORTED_MODULE_3__core_constants__["a" /* CoreConstants */].SETTINGS_COLOR_SCHEME, defaultColorScheme).then(function (scheme) {
                    _this.selectedScheme = scheme;
                });
            }
        }
        // Sort them by name.
        this.languages.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
        langProvider.getCurrentLanguage().then(function (currentLanguage) {
            _this.selectedLanguage = currentLanguage;
        });
        this.configProvider.get(__WEBPACK_IMPORTED_MODULE_3__core_constants__["a" /* CoreConstants */].SETTINGS_FONT_SIZE, __WEBPACK_IMPORTED_MODULE_11__configconstants__["a" /* CoreConfigConstants */].font_sizes[0].toString()).then(function (fontSize) {
            _this.selectedFontSize = fontSize;
            _this.fontSizes = __WEBPACK_IMPORTED_MODULE_11__configconstants__["a" /* CoreConfigConstants */].font_sizes.map(function (size) {
                return {
                    size: size,
                    // Absolute pixel size based on 1.4rem body text when this size is selected.
                    style: Math.round(size * 16 * 1.4 / 100),
                    selected: size === _this.selectedFontSize
                };
            });
            // Workaround for segment control bug https://github.com/ionic-team/ionic/issues/6923, fixed in Ionic 4 only.
            setTimeout(function () {
                if (_this.segment) {
                    _this.segment.ngAfterContentInit();
                }
            });
        });
        this.rteSupported = this.domUtils.isRichTextEditorSupported();
        if (this.rteSupported) {
            this.configProvider.get(__WEBPACK_IMPORTED_MODULE_3__core_constants__["a" /* CoreConstants */].SETTINGS_RICH_TEXT_EDITOR, true).then(function (richTextEditorEnabled) {
                _this.richTextEditor = !!richTextEditorEnabled;
            });
        }
        this.configProvider.get(__WEBPACK_IMPORTED_MODULE_3__core_constants__["a" /* CoreConstants */].SETTINGS_DEBUG_DISPLAY, false).then(function (debugDisplay) {
            _this.debugDisplay = !!debugDisplay;
        });
        this.analyticsSupported = __WEBPACK_IMPORTED_MODULE_11__configconstants__["a" /* CoreConfigConstants */].enableanalytics;
        if (this.analyticsSupported) {
            this.configProvider.get(__WEBPACK_IMPORTED_MODULE_3__core_constants__["a" /* CoreConstants */].SETTINGS_ANALYTICS_ENABLED, true).then(function (enabled) {
                _this.analyticsEnabled = !!enabled;
            });
        }
    }
    /**
     * Called when a new language is selected.
     */
    CoreSettingsGeneralPage.prototype.languageChanged = function () {
        var _this = this;
        this.langProvider.changeCurrentLanguage(this.selectedLanguage).finally(function () {
            _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_6__providers_events__["a" /* CoreEventsProvider */].LANGUAGE_CHANGED, _this.selectedLanguage);
        });
    };
    /**
     * Called when a new font size is selected.
     */
    CoreSettingsGeneralPage.prototype.fontSizeChanged = function () {
        var _this = this;
        this.fontSizes = this.fontSizes.map(function (fontSize) {
            fontSize.selected = fontSize.size === _this.selectedFontSize;
            return fontSize;
        });
        this.settingsHelper.setFontSize(this.selectedFontSize);
        this.configProvider.set(__WEBPACK_IMPORTED_MODULE_3__core_constants__["a" /* CoreConstants */].SETTINGS_FONT_SIZE, this.selectedFontSize);
    };
    /**
     * Called when a new color scheme is selected.
     */
    CoreSettingsGeneralPage.prototype.colorSchemeChanged = function () {
        this.settingsHelper.setColorScheme(this.selectedScheme);
        this.configProvider.set(__WEBPACK_IMPORTED_MODULE_3__core_constants__["a" /* CoreConstants */].SETTINGS_COLOR_SCHEME, this.selectedScheme);
    };
    /**
     * Called when the rich text editor is enabled or disabled.
     */
    CoreSettingsGeneralPage.prototype.richTextEditorChanged = function () {
        this.configProvider.set(__WEBPACK_IMPORTED_MODULE_3__core_constants__["a" /* CoreConstants */].SETTINGS_RICH_TEXT_EDITOR, this.richTextEditor ? 1 : 0);
    };
    /**
     * Called when the debug display setting is enabled or disabled.
     */
    CoreSettingsGeneralPage.prototype.debugDisplayChanged = function () {
        this.configProvider.set(__WEBPACK_IMPORTED_MODULE_3__core_constants__["a" /* CoreConstants */].SETTINGS_DEBUG_DISPLAY, this.debugDisplay ? 1 : 0);
        this.domUtils.setDebugDisplay(this.debugDisplay);
    };
    /**
     * Called when the analytics setting is enabled or disabled.
     */
    CoreSettingsGeneralPage.prototype.analyticsEnabledChanged = function () {
        var _this = this;
        this.pushNotificationsProvider.enableAnalytics(this.analyticsEnabled).then(function () {
            _this.configProvider.set(__WEBPACK_IMPORTED_MODULE_3__core_constants__["a" /* CoreConstants */].SETTINGS_ANALYTICS_ENABLED, _this.analyticsEnabled ? 1 : 0);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* Segment */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* Segment */])
    ], CoreSettingsGeneralPage.prototype, "segment", void 0);
    CoreSettingsGeneralPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-settings-general',template:/*ion-inline-start:"/home/developer/Projects/MoodleMobile/moodleapp/src/core/settings/pages/general/general.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title>{{ \'core.settings.general\' | translate }}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-item text-wrap>\n        <ion-label><h2>{{ \'core.settings.language\' | translate }}</h2></ion-label>\n        <ion-select [(ngModel)]="selectedLanguage" (ngModelChange)="languageChanged()" interface="action-sheet">\n            <ion-option *ngFor="let entry of languages" [value]="entry.code">{{ entry.name }}</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item text-wrap class="core-settings-general-font-size">\n        <ion-label><h2>{{ \'core.settings.fontsize\' | translate }}</h2></ion-label>\n        <ion-segment [(ngModel)]="selectedFontSize" (ngModelChange)="fontSizeChanged()" color="primary" item-content>\n            <ion-segment-button *ngFor="let fontSize of fontSizes" value="{{ fontSize.size }}" [ngStyle]="{\'font-size.px\': fontSize.style}">\n                {{ \'core.settings.fontsizecharacter\' | translate }}<!--\n                Empty element styled with the largest font size, so all buttons share a common baseline.\n                --><span [ngStyle]="{\'font-size.px\': fontSizes[fontSizes.length - 1].style}"></span>\n            </ion-segment-button>\n        </ion-segment>\n    </ion-item>\n    <ion-item text-wrap class="core-settings-general-color-scheme" *ngIf="colorSchemes.length > 0">\n        <ion-label>\n            <h2>{{ \'core.settings.colorscheme\' | translate }}</h2>\n            <p *ngIf="colorSchemeDisabled" class="text-danger">{{ \'core.settings.forcedsetting\' | translate }}</p>\n        </ion-label>\n        <ion-select [(ngModel)]="selectedScheme" (ngModelChange)="colorSchemeChanged()" interface="action-sheet" [disabled]="colorSchemeDisabled">\n            <ion-option *ngFor="let scheme of colorSchemes" [value]="scheme">{{ \'core.settings.colorscheme-\' + scheme | translate }}</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item text-wrap *ngIf="rteSupported">\n        <ion-label>\n            <h2>{{ \'core.settings.enablerichtexteditor\' | translate }}</h2>\n            <p>{{ \'core.settings.enablerichtexteditordescription\' | translate }}</p>\n        </ion-label>\n        <ion-toggle [(ngModel)]="richTextEditor" (ngModelChange)="richTextEditorChanged()"></ion-toggle>\n    </ion-item>\n    <ion-item text-wrap>\n        <ion-label>\n            <h2>{{ \'core.settings.debugdisplay\' | translate }}</h2>\n            <p>{{ \'core.settings.debugdisplaydescription\' | translate }}</p>\n        </ion-label>\n        <ion-toggle [(ngModel)]="debugDisplay" (ngModelChange)="debugDisplayChanged()"></ion-toggle>\n    </ion-item>\n    <ion-item text-wrap *ngIf="analyticsSupported">\n        <ion-label>\n            <h2>{{ \'core.settings.enablefirebaseanalytics\' | translate }}</h2>\n            <p>{{ \'core.settings.enablefirebaseanalyticsdescription\' | translate }}</p>\n        </ion-label>\n        <ion-toggle [(ngModel)]="analyticsEnabled" (ngModelChange)="analyticsEnabledChanged()"></ion-toggle>\n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"/home/developer/Projects/MoodleMobile/moodleapp/src/core/settings/pages/general/general.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_app__["a" /* CoreAppProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_config__["a" /* CoreConfigProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_file__["a" /* CoreFileProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_events__["a" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_lang__["a" /* CoreLangProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_10__core_pushnotifications_providers_pushnotifications__["a" /* CorePushNotificationsProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_local_notifications__["a" /* CoreLocalNotificationsProvider */], __WEBPACK_IMPORTED_MODULE_12__providers_helper__["a" /* CoreSettingsHelper */]])
    ], CoreSettingsGeneralPage);
    return CoreSettingsGeneralPage;
}());

//# sourceMappingURL=general.js.map

/***/ })

});
//# sourceMappingURL=26.js.map