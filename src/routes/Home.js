import {useEffect, useState} from "react";
import { Movie } from '../components/Moive'

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMoives] = useState([]);

    const getMoives = async() => {
        const json = await(
            await fetch( "https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year" )
        ).json();
        setMoives(json.data.movies);
        setLoading(false);
    }
    
    useEffect(() => {
        getMoives();
    }, []);

    return (
        <div>
            {loading ? <h1>loading....</h1> : movies.map((item, index) => (
                <Movie key={index} item={item} />
            ))}
        </div>
    )
}

export { Home }