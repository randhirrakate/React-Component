import './Myinfo.css';

function Myinformation(props)
{
    return(
        <div>
            <div className="my_info">
            <ol>
            <li>Name : {props.name}</li>
            <li>Age : {props.age}</li>
            <li>Mobile : {props.mobile}</li>
            </ol>
            </div>


        </div>
    )
}

export default Myinformation;