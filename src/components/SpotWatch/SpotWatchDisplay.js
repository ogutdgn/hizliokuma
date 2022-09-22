import React from 'react';

const SpotWatchDisplay = (props) => {
  // const h = () => {
  //    if(props.time.h === 0){
  //      return '';
  //    }else {
  //      return <span>{(props.time.h >= 10)? props.time.h : "0"+ props.time.h}</span>;
  //    }
  // }
  return (
    <div className="timeDisplay">
       {/* {h()}&nbsp;&nbsp; */}
       <h3>{(props.time.m >= 10)? props.time.m : "0"+ props.time.m}</h3>
       <h3>:</h3>
       <h3>{(props.time.s >= 10)? props.time.s : "0"+ props.time.s}</h3>
       {/* <span>{(props.time.ms >= 10)? props.time.ms : "0"+ props.time.ms}</span> */}
    </div>
  );
}

export default SpotWatchDisplay;