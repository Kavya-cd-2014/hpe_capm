sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'hpe/kh/managepo/test/integration/FirstJourney',
		'hpe/kh/managepo/test/integration/pages/POsList',
		'hpe/kh/managepo/test/integration/pages/POsObjectPage',
		'hpe/kh/managepo/test/integration/pages/POItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, POItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('hpe/kh/managepo') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePOItemsObjectPage: POItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);