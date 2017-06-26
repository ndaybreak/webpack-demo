import Layer from './components/layer/layer.js';
import commonCss from './css/common.css'

const App = function() {
    const layer = new Layer()
    const app = document.getElementById('app')
    const template = layer.tpl
    app.innerHTML = template({
        name: 'testing',
        arr: ['xxxxx', 'yyyyyyyyyyy']
    })
};
new App();