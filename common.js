new fullpage('#fullpage', {
    
    anchors: ['welcome', 'kennyalee', 'emma', 'grant', 'timothy', 'trooper'],
    menu: '#menu',
    
    //options here
    autoScrolling: false,
    scrollHorizontally: true,

    //navigation
    navigation: 'true',
    navigationPosition: 'right'
});

//methods
fullpage_api.setAllowScrolling(false);
fullpage_api.setScrollingSpeed(1700);

