import React from 'react';

const AddBoardGame = (props) => {
    return (
        <div className='container col'>
            <form className='container col'>
                <select id="boardGameToRemove" className="form-control">
                    
                </select>
                <button type="submit" className="btn btn-primary form-group col-2">Remove Board Game</button>
            </form>

        </div>
    )
}

export default AddBoardGame;
