import React, {Component} from 'react';
import './rules.css'

class RulesComponent extends Component {
    render() {
        let {item, cls} = this.props
        return (
            <div className={cls}>
                <h2>{item.title}</h2>
                <h3>{item.body}</h3>
            </div>
        );
    }
}

export default RulesComponent;