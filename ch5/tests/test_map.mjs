import SCRIPTS from '../data/scripts.mjs';
import myFilter from '../functions/filter.mjs';
import map from '../functions/map.mjs';
// Filter scripts to ones which have a direction of RTL using 
// my HOF filter
let rtlScripts = myFilter(SCRIPTS, s => s.direction == "rtl");
console.log('RTL Scripts: ', rtlScripts);


// Map resulting RTL Scripts array to show only names
// of the resulting elements
console.log(map(rtlScripts, s => s.name))