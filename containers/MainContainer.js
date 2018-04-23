import React, { Component } from 'react';
import { inject , observer} from 'mobx-react';
import TestPageContainer from './TestPageContainer';


@inject('userStore','appStore')
@observer
export default class MainContainer extends Component {

  render() {
    return <TestPageContainer />
  }
}
