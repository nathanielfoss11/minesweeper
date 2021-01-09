import { connect } from 'react-redux';
import Board from '../components/Board.js'
 
var mapStateToProps = (state) => ({
  video: state.currentVideo
});

var mapDispatchToProps = (dispatch) => {
  handleInputChange: (q) => {
    dispatch(handleVideoSearch(q));
  }
};

var BoardContainer = connect(mapStateToProps, null)(Board);

export default BoardContainer;