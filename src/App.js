import './App.css';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import ErrorBoundary from './components/ErrorBoundary';
import {requestMonsters, setSearchField} from './actions';

const App = () => {
  const {searchfield} = useSelector(
    (state) => state.searchMonsters
  );
  
  const {monsters, isPeding, error} = useSelector(
    (state) => state.requestMonsters
  );

  const dispatch = useDispatch();

  const onSearchChange = (event) => {
    dispatch(setSearchField(event.target.value))
  }

  const onRequestMonsters = () => {
    dispatch(requestMonsters())
  };
  
  useEffect(() => {
    onRequestMonsters()
  }, []);

  const filteredMonsters = monsters.filter(monster => {
    return monster.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return isPeding ?
  <h1>Loading</h1> :
  error ?
  <h1>Cannot retreive Monsters</h1> :
  (
    <div className = 'tc'>
      <h1 className = 'f-5 ma2'>Monster Friends</h1>
      <SearchBox searchChange =  {onSearchChange}/>
      <Scroll>
        <ErrorBoundary>
          <CardList monsters = {filteredMonsters} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default App;


// This code uses a class component and no hooks//

// import './App.css';
// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import CardList from './components/CardList';
// import SearchBox from './components/SearchBox';
// import Scroll from './components/Scroll';
// import ErrorBoundary from './components/ErrorBoundary';

// import {requestMonsters, setSearchField} from './actions';

// const mapStateToProps = (state) => {
//   return {
//     searchfield: state.searchMonsters.searchfield,
//     monsters: state.requestMonsters.monsters,
//     isPeding: state.requestMonsters.isPeding,
//     error: state.requestMonsters.error
//   }
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
//     onRequestMonsters: () => dispatch(requestMonsters())
//   }
// };

// class App extends Component {
  
//   componentDidMount() {
//     this.props.onRequestMonsters()
//   };

//   render() {
//     const {searchfield, onSearchChange, monsters, isPeding} = this.props;

//     const filteredMonsters = monsters.filter(monster => {
//       return monster.name.toLowerCase().includes(searchfield.toLowerCase());
//     })

//     return isPeding ?
//     <h1>Loading</h1> :
//     (
//       <div className = 'tc'>
//         <h1 className = 'f-5 ma2'>Monster Friends</h1>
//         <SearchBox searchChange =  {onSearchChange}/>
//         <Scroll>
//           <ErrorBoundary>
//             <CardList monsters = {filteredMonsters} />
//           </ErrorBoundary>
//         </Scroll>
//       </div>
//     );
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);