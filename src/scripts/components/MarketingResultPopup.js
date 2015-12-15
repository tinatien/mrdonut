import React from 'react';
import AuthActions from '../actions/AuthActions';
import AuthStore from '../stores/AuthStore';
import Radium from 'radium';
import Marketing from './Marketing.js';
const styles = {
    wrap: {
    position: 'absolute',
    width: '1480px',
    boxShadow: '1px 1px 12px #919292',
    border: '1px solid #CCC',
    padding: '12px 18px',
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    top: '180px',
    display: 'none',
    zIndex: 50,
    borderRadius: '4px',
    height:'480px'
  },
  wrapShow: {
    display: 'block'
  },
};

const MarketingResultPopup =React.createClass({
  propTypes: {
    show: React.PropTypes.bool
  },

  getDefaultProps() {
    return {
      show: false
    }
  },
  getInitialState() {
    var state ={
      result :  ''
    };
    return state;
  },
  componentDidMount(){
    AuthStore.addChangeListener(this.dataUpdate)
  },

  componentWillUnmount(){
    AuthStore.removeChangeListener(this.dataUpdate)
  },
  dataUpdate(){
    this.setState({
      result: AuthStore.getfinalresult()
    });
  },

  render() {
    return(
      <div style={[styles.wrap, (this.props.show ? styles.wrapShow : null)]}>
        <h1 style={{color:'rgb(215,70,58)',alignItems:'center',paddingLeft:'480px',fontSize:'40px',marginTop:'150px'}}>{this.state.result}</h1>
        <div>
        <button style={{fontSize:'30px',marginLeft:'625px',marginTop:'40px'}} onClick={this.props.toggleClose}>確認</button>
        </div>
      </div>
    )
  }


});

module.exports = Radium(MarketingResultPopup);
