import * as bugActionCreators from '../actions';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

function useBugActions(){
    return bindActionCreators(bugActionCreators, useDispatch());
}

export default useBugActions;