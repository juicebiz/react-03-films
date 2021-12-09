import React from 'react'
import PropTypes from 'prop-types'
import Star from '../Star/Star.js'

function Stars(props) {
    const count = +props.count    
    if(count > 0) {
        let stars = []
        let i = 0
        const star = <Star />
        
        while (++i <= count) stars.push(star)
        
        return (   
            <ul className="card-body-stars u-clearfix">
                {stars}                    
            </ul>
        )
    } else {
        return ''
    }
}

Stars.propTypes = {
    count: PropTypes.number.isRequired
}
export default Stars

