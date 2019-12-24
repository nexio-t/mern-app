  
import React from "react";
import "./style.css";
import 'bulma/css/bulma.css'


const SearchForm = props => {
    return (
        <div>
            <div className="distractify">
                Distractify
            </div>
            <form>
                <div className="field">
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
        </div>
    )
}

export default SearchForm