function Notes() {
    return (
        <>
            <p className="heading">My Notes</p>
            <div className="cards">
                <div className="card">
                    <p className="firstPera">Lorem ipsum dolor sit amet.</p>
                    <p className="secondPera">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit.</p>
                    <div className="buttons">
                        <button className="edit" onClick="Editable()">Edit</button>
                        <button className="remove">Remove</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Notes;