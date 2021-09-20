import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge } from 'reactstrap';


class ProductList extends Component {
    render() {
        const { currentCategory } = this.props;
        return (
            <h3>
                <Badge className="bg-warning text-dark">
                    Products
                </Badge>
                <Badge className="bg-success">
                    {currentCategory.categoryName}
                </Badge>
            </h3>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
    }
}


export default connect(mapStateToProps)(ProductList);
