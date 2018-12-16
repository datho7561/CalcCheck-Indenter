# Monokai CalcCheck 
The Monokai theme ported to [CalcCheckWeb](http://calccheck.mcmaster.ca/CalcCheckDoc/)

Monokai was originally a theme for [TextMate](https://github.com/textmate/textmate) but has now been ported to many other editors.

Heavily based off (I started this project from the source code of) [Caleb's](https://github.com/calebmech) [CalcCheck Indenter](https://github.com/calebmech/CalcCheck-Indenter).

## Installation

This code should work on Chrome and Firefox. Currently, only installing from the source code is possible. 

### Mozilla Firefox

#### NOTE: will uninstall when browser is closed

0. Clone or download the source code. Make sure it's extracted.
1. Open a new tab in Firefox and enter `about:debugging`
2. Click `Load Temporary Add-on...`
3. Navigate to the folder with the code and select the `manifest.json` file
4. Reload any CalcCheck sessions in order to apply the addon

### Google Chrome

1. Download or clone repository
2. Go to chrome://extensions/
3. Enable "Developer mode"
4. Click "Load unpacked"
5. Select directory of extracted extension
6. Reload any previously open CalcCheck notebooks

## Known Issues

* Sometimes the proof checker output will appear white. The reason is the theme has to be reapplied to the proof checker box on each proof check. I am currently doing this on a timer, so if the proof takes longer than 0.5 seconds to check, the box will appear white.
* When exiting a proof box using the `Escape` key, the background will change to white until the next time you edit the box