import React, { Component, Fragment } from 'react'
import DailyForcast from './Daily'

class Weekly extends Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {

    const {
      mockdata
    } = this.state

    return (
      <Fragment>
        <DailyForcast />
        {/* {mockdata.map(function(name, index){
          return <DailyForcast />;
        })} */}
      </Fragment>
    )
  }
}

export default Weekly