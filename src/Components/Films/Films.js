import React from 'react'
import PropTypes from 'prop-types'
import Stars from '../Stars/Stars'

function Films(props) {

    const films = props.films
    const filmsList = films.map((film) => <li><h3>{film.name}</h3>Купить за {film.cost}₽<Stars count={film.count} /></li>);

    return (
        <div>
            <ul>
                {filmsList}            
            </ul>
        </div>
    )
}

Films.propTypes = {
    films: PropTypes.array
}

export default Films

