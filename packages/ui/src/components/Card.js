import styled from 'styled-components'
import {
    borders,
    borderColor,
    borderRadius,
    backgroundImage,
    backgroundSize,
    backgroundPosition,
    backgroundRepeat,
    style
} from 'styled-system'
import Box from './Box'
import utils from '../styles/utils'

const depth = style({
    prop: 'depth',
    cssProperty: 'boxShadow',
    key: 'shadows'
})

const Card = styled(Box)(
    borders,
    borderColor,
    borderRadius,
    backgroundImage,
    backgroundSize,
    backgroundPosition,
    backgroundRepeat,
    depth,
    utils.themed('Card')
)

Card.displayName = 'Card'

Card.propTypes /* remove-proptypes */ = {
    ...borders.propTypes,
    ...borderColor.propTypes,
    ...borderRadius.propTypes,
    ...backgroundImage.propTypes,
    ...backgroundSize.propTypes,
    ...backgroundPosition.propTypes,
    ...backgroundRepeat.propTypes,
    ...depth.propTypes
}

export default Card 