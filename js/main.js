/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(() => {
    'use strict';

    const csInterface = new CSInterface();
    themeManager.init();

    const listening = eve => console.log(eve);

    AIEventAdapter.getInstance().addEventListener(
        AIEvent.ART_SELECTION_CHANGED,
        listening
    );
    
    AIEventAdapter.getInstance().addEventListener(
        AIEvent.ZOOM_IN_COMMAND_PRE,
        (eve) => {
            console.log('pre zoom');
            console.log(eve);
        }
    );

    AIEventAdapter.getInstance().addEventListener(
        AIEvent.ZOOM_IN_COMMAND_POST,
        (eve) => {
            console.log('post zoom');
            console.log(eve);
        }
    );

    document.getElementById('btn_test').addEventListener('click', () => {
        console.log(AIEventAdapter.getInstance());
        console.log(AIEventAdapter.getInstance().eventListening);
        console.log(AIEventAdapter.getInstance().listEvents());
        Object.keys(AIEventAdapter.getInstance().eventListening).forEach(key => console.log(key));
    });

    document.getElementById('remove').addEventListener("click", () => {
        AIEventAdapter.getInstance().removeEventListener(
            AIEvent.ART_SELECTION_CHANGED,
            listening
        );
    })
})();
    
