import {createApp} from 'vue';
import App from './App.vue';
import VXETable from 'vxe-table';
import 'vxe-table/lib/style.css';

function useTable(App) {
    App.use(VXETable)

    // 给 vue 实例挂载内部对象，例如：
    // app.config.globalProperties.$XModal = VXETable.modal
    // app.config.globalProperties.$XPrint = VXETable.print
    // app.config.globalProperties.$XSaveFile = VXETable.saveFile
    // app.config.globalProperties.$XReadFile = VXETable.readFile
}

createApp(App).use(useTable).mount('#app')
