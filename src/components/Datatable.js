import React,{useState} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Comp from './Comp';
function DataTable({data}){
    const [movieDetails,changeDetails] = useState("");
    const details = (e)=>{
        const title = e.target.innerText;
        data.map((eachOne)=>{if(eachOne.Title === title){changeDetails(eachOne)}})
        // console.log(e.target.innerText)
        console.log(movieDetails);
        <Router>
        <Route path ="/comp" component = {<Comp movieDetails ={movieDetails}/>}/>
        </Router>
       
    }


    {if(data[0]){
    const columns =Object.keys(data[0]);// object.keys fetch all the key value from
    // first object;
    return <table >
        <thead>
            <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Rated</th>
                <th>Country</th>
                <th>imdbRatings</th>
                <th>BoxOffice</th>
            </tr>
            {/* <tr style={{margin:"10px",fontSize:"23px"}}>{columns.map((heading)=><th key={heading}>{heading.toUpperCase()}</th>)}</tr> */}
        </thead>
        <tbody>
            {data.map((row)=><tr>
                {
                    // columns.map((column)=><td>{row.column}</td>)
                    <>
                    <td onClick={details}>{row.Title}</td>
                    <td>{row.Year}</td>
                    <td>{row.Rated}</td>
                     {/* <td>{row.Released}</td>
                    <td>{row.Runtime}</td>
                    <td>{row.Genre}</td>
                    <td>{row.Director}</td>
                    <td>{row.Writer}</td>
                   <td>{row.Actors}</td>
                     <td>{row.Plot}</td>
                    <td>{row.Language}</td>*/}

                    <td>{row.Country}</td>
                    {/*
                    <td>{row.Awards}</td>
                    <td>{row.Poster}</td>
                    <td>{row.Ratings[0].Value}</td>
                    <td>{row.Metascore}</td> */}
                    <td>{row.imdbRating}</td>
                    {/* <td>{row.imdbVotes}</td>
                    <td>{row.imdbID}</td>
                    <td>{row.Type}</td>
                    <td>{row.DVD}</td> */}
                    <td>{row.BoxOffice}</td>
                    {/* <td>{row.Production}</td>
                    <td>{row.Website}</td>
                    <td>{row.Response}</td> */}
                   </>
                }
            </tr>)}
        </tbody>
    </table>
    }
else{
    return <div id="resultNotFound">Result Not Found</div>
}}
}
export default DataTable;
