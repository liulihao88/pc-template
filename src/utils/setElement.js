


import Vue from 'vue'
import Element from 'element-ui'
// Element.Dialog.props.title = { default: '这是神马鬼' };

console.log(`%c Element` + '', 'background-image:color:transparent;color:green;font-size:2em');
console.log(Element);
console.log(`%c Element.Input` + '', 'background-image:color:transparent;color:red;font-size:2em');
console.log(Element.Input);

import 'element-ui/lib/theme-chalk/index.css'
Element.TableColumn.props.sortable.default = true;
Element.Input.props.clearable = { default: true };
// Element.Input.props.size = { default: 'mini' };
Element.Input.props.size = 'mini';
Element.Form.props.labelPosition = { default: 'left' };
Element.Form.props.labelWidth = { default: '160px' };

// row的间距是20
Element.Row.props.gutter = { default: 20 };
Element.Col.props.span = { default: 12 };
// Element.Input.props.suffixIcon = { default: 'el-icon-date' };
// Element.Input.props.suffixIcon = { default: 'el-icon-edit' };

Element.TableColumn.props.showOverflowTooltip = { type: Boolean, default: true }
Vue.use(Element, {
    size: 'mini'
})

