import {Link} from 'react-router-dom';

function Movie({item}){
  // console.log("MOVIE URL ID : " + item.id);

  return (
      <div key={item.id}>
        <img src={item.medium_cover_image}/>
        <h2>
          {/* html a 태그 같은 기능 */}
          <Link to={`/movie/${item.id}`}>{item.title}</Link>
        </h2>
        <p>{item.summary}</p>
        <ul>
          {item.genres.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
  )
}
// Movie.PropTypes = {
//    [item.medium_cover_image]: PropTypes.string.isRequired,
//    [item.title]: PropTypes.string.isRequired,
//    [item.url]: PropTypes.string.isRequired,
//    [item.summary]: PropTypes.string.isRequired,
// }

export { Movie };