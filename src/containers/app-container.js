import { connect } from 'react-redux';
import  App  from '../App'
function mapStateToProps (state) {
    return {
        savedData : state.roomDetails
    }
} 

function mapDispatchToProps (dispatch) {
    return {
        saveRoomDetails: (data) => { dispatch({ type: "SAVE_DATA", data: data})}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);