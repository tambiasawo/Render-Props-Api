import React from "react"
import DataFetcher from "./DataFetcher"

function App() {    
    return (
        <div>
            <DataFetcher url="https://swapi.co/api/people/1" render = {
                    function(load, data){
                        return(
                            <div>
                                {load ? <h1>Loading...</h1> :  <p>{JSON.stringify(data)}</p>}
                            </div>
                        )
                    }}
                >
                
            </DataFetcher>
        </div>
    )
}

export default App
