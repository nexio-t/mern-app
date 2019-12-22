  
import React from "react";
import "./style.css";
import 'bulma/css/bulma.css'


const SearchForm = props => {
    return (
        <form>
            <div className="field">
                <label className="VideoSearchlabel"><h4>Search:</h4></label>
                <br></br>
                <input className="input"
                    value={props.search}
                    type="text"
                    name="searchVideo"
                    placeholder="Enter search term here"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="button is-light" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}

export default SearchForm