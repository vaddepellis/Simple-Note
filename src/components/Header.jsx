import React from "react";
import CreateIcon from '@material-ui/icons/Create';
import NotesIcon from '@material-ui/icons/Notes';


function Header() {
    return (
        <header>
            <h1>
                <NotesIcon />
                <CreateIcon />

                SimpeNote
            </h1>
        </header>
    );
}

export default Header;
