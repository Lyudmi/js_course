// import UIController from './ui_controller';
import MaskInput from './node_modules/mask-input';

// const ui_controller = new UIController();
// ui_controller.getMask();
const inputCard = new MaskInput(document.querySelector('#inputmask'), {
    mask: '0000-0000-0000-0000',
    alwaysShowMask: true,
    maskChar: '_',
  });