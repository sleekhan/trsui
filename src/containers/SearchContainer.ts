import { connect, Dispatch } from 'react-redux';
import SearchForm from '../components/SearchForm';
import * as api from '../api/searchTrsApi';

const mapStateToProps = (state: any) => (state.sc);

const maptoDispatchProps = (dispatch: Dispatch<any>) => ({
    handleSearch: (email: string, startDate: string, endDate: string ) => {        
        api.searchTrs(dispatch, email, startDate, endDate);
    }
});
export default connect <any, any, any>(mapStateToProps, maptoDispatchProps)(SearchForm);