import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Todo from './components/Todo';
import tasks from './reducers';

const store = createStore(
    tasks,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
<Provider store={store}>
    <Todo/>
</Provider>, document.getElementById('root')
);
