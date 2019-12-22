  
import React from "react";
import "./style.css";

const SearchForm = props => {
    return (
        <form>
            <div className="form-group">
                <label className="VideoSearchlabel"><h4>Search:</h4></label>
                <br></br>
                <input className="col-4 form-control"
                    value={props.search}
                    type="text"
                    name="searchVideo"
                    placeholder="Enter search term here"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="submitBtn btn btn-outline-info" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}

export default SearchForm