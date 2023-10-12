import Done from "./Done";

function User(props) {
    const TitlesJSX =  <Done title={props.title} />
    ;

    return(
        <div>
        <input type = "checkbox" id={props.id}></input>
        <label for={props.id}>{TitlesJSX}</label>
        </div>
    )  
};

export default User;