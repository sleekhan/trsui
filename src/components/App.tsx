import * as React from 'react';
import SearchContainer from '../containers/SearchContainer';
import TRSContainer from '../containers/TRSContainer';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Header } from 'semantic-ui-react';
class App extends React.Component {
 
  render() {
    return (
      <div style={{margin: '20px'}}> 
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Header as="h2" icon="plug" content="출퇴근 시간기록" />             
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <SearchContainer /> 
            </Grid.Row>
            <Grid.Row>
              <TRSContainer /> 
            </Grid.Row>
          </Grid>
      </div>
    );
  }
}

export default App;