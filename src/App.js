import React, {Component} from 'react'
import { Provider } from 'react-redux'
import store from './store/index'
import { Header } from './components/components'


class App extends Component {
    render(){
        return (
            <Provider store={store}>
                <Header />
            </Provider>
        )
    }
}

export default App
