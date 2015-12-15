import React from 'react';
import {Link} from 'react-router-component';

const styles = {
  wrap: {
    backgroundColor: 'rgb(254,226,128)',
    height: '800px',
    overflow: 'hidden',
    width:'100%',
    display:'flex'
  }
};

const WelcomePage = React.createClass({
  render() {
    return (
      <div style={styles.wrap}>
        <div style={{flex:1,paddingLeft:'170px',marginTop:'100px'}} >
            <Link href='/inventory' style={{fontSize:'30px',paddingLeft:'95px',marginTop:'100px',color:'rgb(60,27,11)',textDecoration:'none',fontWeight:'bold'}}>
            <img style={{weight:'311px',height:'318px'}} src='http://blog.ncut.edu.tw/userfile/4481/m-%E6%B3%A2%E5%A0%A4%E7%8D%85_1.png'/><br/><br/></Link>
            <h1 style={{color:'rgb(60,27,11)',marginLeft:'205px'}}>存貨管理</h1>
        </div>

        <div style={{flex:1,marginTop:'100px'}}>
            <Link href='/marketing' style={{fontSize:'30px',paddingLeft:'65px',marginTop:'100px',color:'rgb(60,27,11)',textDecoration:'none',fontWeight:'bold'}}>
            <img style={{weight:'311px',height:'318px'}} src='http://blog.ncut.edu.tw/userfile/4481/m-%E6%B4%8B%E5%92%A9%E5%92%A9.png'/><br/><br/>
            </Link>
            <h1 style={{color:'rgb(60,27,11)',marginLeft:'180px'}}>行銷策略</h1>
        </div>
      </div>
      // <div style={{flex:1,paddingLeft:'240px',marginTop:'100px'}} >
      //   <img src='http://ext.pimg.tw/pangde007/1397149685-2832457338.png'/><br/><br/><br/><br/>
      //     <Link href='/inventory' style={{fontSize:'30px',paddingLeft:'95px',marginTop:'100px',color:'rgb(60,27,11)',textDecoration:'none',fontWeight:'bold'}} >存貨管理</Link>
      // </div>


      // <div style={styles.wrap}>
      //   <div style={{flex:1,paddingLeft:'200px'}}>
      //       <Link href='/inventory'>存貨管理</Link>
      //   </div>
      //
      //   <div style={{flex:1,paddingLeft:'200px'}}>
      //       <Link href='/marketing'>行銷策略</Link>
      //   </div>
      // </div>
    )
  }
});

module.exports = WelcomePage;
