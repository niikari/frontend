import './App.css';
import React from 'react'
import ApolloClient, {gql} from'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

function App() {

  const countryquery = gql`
    {
      countries {
        code,
        name,
        continent{name}
      }
    }`;
  
  const { loading, error, data } = useQuery(countryquery);

  if (loading) // If still loading
    return "Loading...";
  if (error) // It there came an error
    return `Error ${error.message}`;

  return ( // When there is data
  <div className="App">
    <table>
      <tbody>
        
      </tbody>
    </table>
  </div>
);
}

export default App;
