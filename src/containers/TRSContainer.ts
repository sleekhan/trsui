import { connect } from 'react-redux';
import TRSListForm from '../components/TRSListForm';

const mapStateToProps = (state: any) => (state.trs);
connect <any, any, any>(mapStateToProps)(TRSListForm);
export default connect <any, any, any>(mapStateToProps)(TRSListForm);