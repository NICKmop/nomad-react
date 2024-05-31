import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

function Detail(){
    const [ summary, setSummary ] = useState("");
    const [ loading, setLoading ] = useState(true);
    const { id } = useParams();

    const getMoives = async() => {
        const json = await(
            await fetch( `https://yts.mx/api/v2/list_movies.json?movie_id=${id}` )
        ).json();
        
        setSummary(json.data.movies[0].summary);
        setLoading(false);
    };
    useEffect(() => {
        getMoives();
    }, []);

    return (
        <h1>{loading ? "loading...." : summary}</h1>
    )
}

export { Detail }