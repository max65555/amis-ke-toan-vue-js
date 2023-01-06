import { createApp } from 'vue'
import App from './App.vue'
import MainButton from './components/base/MainButton.vue'
import DataTable from './components/base/DataTable.vue';
import TextField from './components/base/TextField.vue'
import SemiButton from './components/base/SemiButton.vue'
import IconButton from './components/base/IconButton.vue';
import routes from './routers/routes.js'
import PopupNotify from './components/base/PopUpNotify.vue'
import MainCheckBox from './components/base/MainCheckBox.vue'
import MainRadio from './components/base/MainRadio.vue'; 
import DatePicker from './components/base/DatePicker.vue';
import LinkButton from './components/base/LinkButton.vue';
import DropdownList from './components/base/DropdownList.vue';


//set up routes
// import VueRouter from 'vue-router';

const app = createApp(App)
app.component('MainButton', MainButton)
app.component('DropdownList', DropdownList)
app.component('LinkButton', LinkButton)
app.component('MainRadio', MainRadio)
app.component('DatePicker', DatePicker)
app.component("DataTable", DataTable);
app.component('TextField', TextField)
app.component('MainCheckBox', MainCheckBox)
app.component('IconButton', IconButton)
app.component('PopupNotify', PopupNotify)
app.component('SemiButton', SemiButton)
app.use(routes)
app.mount('#app')
