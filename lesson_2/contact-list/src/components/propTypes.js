import PropTypes from 'prop-types'

const  item = 
    PropTypes.shape({
        id: PropTypes.number,
        phone: PropTypes.number,
        age: PropTypes.number,
        name: PropTypes.string,
        surname: PropTypes.string
    });

const itemList = PropTypes.arrayOf(item);

export default {
    ...PropTypes,
    item,
    itemList
};