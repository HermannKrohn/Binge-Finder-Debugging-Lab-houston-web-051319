import React from 'react';

const tvShow = (props) => {
  return (
    <div>
      <br/>
      <img src={props.show.image.medium} alt="" onClick={() => props.selectShow(props.show)}/>
    </div>
  );
}

export default tvShow;
