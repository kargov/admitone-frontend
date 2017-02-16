//jshint strict: false
exports.config = {

    allScriptsTimeout: 11000,

    specs: [
        '*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:8000/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    onPrepare: function() {
        browser.addMockModule('httpMocker', function () {
            angular.module('httpMocker', ['ngMockE2E'])
                .run(function ($httpBackend) {
                    $httpBackend.whenGET(/^http:\/\/localhost:8080\/admitone-backend\/api\/admin\/login\/?.*/)
                        .respond({success: true, username: "ned"});
                    $httpBackend.whenGET(/^http:\/\/localhost:8080\/admitone-backend\/api\/admin\/tickets\/overview\/?.*/)
                        .respond(
                            {
                                results: [
                                    {
                                        eventId: 1,
                                        username: "ned",
                                        totalNumberOfTickets: 12
                                    }
                                    ,
                                    {
                                        eventId: 3,
                                        username: "ned",
                                        totalNumberOfTickets: 111
                                    }
                                ],
                                success: true
                            }
                        );
                    $httpBackend.whenGET(/./).passThrough()
                })
        });
    }
};