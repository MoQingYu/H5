import { connect } from "react-redux";
import { Title } from '../component/Title';

const mapStateToProps = (state)=> {
    return {
        color: state.color
    }
}

export default connect(mapStateToProps)(Title);

