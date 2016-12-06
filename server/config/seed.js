/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import {Bar, BarDetails} from '../sqldb';
import BarHelper from '../components/bar-helper';

const barHelper = new BarHelper();

Bar.sync()
.then(() => BarDetails.sync())
.then(() => barHelper.getBars());
