import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/CounterComponent';
import Footer from '../components/common/FooterComponent'
import NavBar from '../components/common/NavbarComponent'
import * as CounterActions from '../actions/CounterActions';

class MyApp extends Component {
    render() {
        const { counter, dispatch } = this.props;
        return (
            <div>
                <NavBar/>
                <Counter counter={counter}
                    {...bindActionCreators(CounterActions, dispatch)} />
                <div><Footer/></div>
            </div>
        );
    }
}

function select(state) {
    return {
        counter: state.counter
    };
}

export default connect(select)(MyApp);
