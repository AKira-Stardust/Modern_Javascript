import Tooltip from "./ninja_ui/tooltip";
import Dropdown from "./ninja_ui/dropdown";
import Tabs from "./ninja_ui/tabs";
import Snackbar from "./ninja_ui/snackbar";

// create tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

[...dropdowns].forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

// create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

// create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', () => {
  snackbar.show('you clicked me :)');
});