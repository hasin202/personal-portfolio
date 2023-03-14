import {StyledButton} from './App.styled'

function App() {
  let count = 0
  const log = () => {
    count++
    console.log(count)
  }
  return <StyledButton bg="blue" onClick={log}>hello</StyledButton>;
}

export default App;
