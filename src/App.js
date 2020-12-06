import React, {Component} from 'react';
import {rules} from './database/rulesDB'
import RulesComponent from './objectComponents/rulesComponent'
class App extends Component {
    render() {
        return (
            <div>
                {
                    rules.map((user, index) => {
                        let clsK = index % 2 ? 'silver' : 'dimgray'
                        return (
                                <RulesComponent
                                item={user}
                                cls={clsK}
                                key={index}
                                />
                            )

                    })
                }
            </div>
        );
    }
}

export default App;