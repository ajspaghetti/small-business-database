import React from "react";

function User({
    currentUser
}) {

    return (
        <div>
            <h1>{currentUser}</h1>
        </div>
    )
}

export default User