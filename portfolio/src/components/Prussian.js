import { useEffect } from "react";
import './Prussian.css'
import { HashLink as Link } from "react-router-hash-link";


export default function Prussian() {
    useEffect(() => {

    });

    return(
        <>
            <div className="back-button">
                <Link to="/Amaranth">
                    <button>Back to Home</button>
                </Link>
            </div>
        </>
    )
}