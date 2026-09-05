// entry point. just wires up all the separate feature modules below -
// everything is plain browser-native ES modules so there's no build step,
// no npm install, nothing. open index.html through a local server and it
// just works (has to be a server though, not a file:// path, or the
// import statements get blocked by CORS)

import { initTrackSwitch } from './trackSwitch.js';
import { initSkillBars } from './skillBars.js';
import { initSkillFilters } from './skillFilters.js';
import { initScrollIndicator } from './scrollIndicator.js';
import { initContactForm } from './contactForm.js';

initTrackSwitch();
initSkillBars();
initSkillFilters();
initScrollIndicator();
initContactForm();
