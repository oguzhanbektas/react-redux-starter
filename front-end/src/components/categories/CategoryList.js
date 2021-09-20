import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as categoryActions from "../../redux/actions/categoryActions"
import * as productActions from "../../redux/actions/productActions"
import { Badge } from 'reactstrap';

class CategoryList extends Component {
    componentDidMount() {
        this.props.actions.getCategories()
    }
    selectCategory = (item) => {
        this.props.actions.changeCategory(item);
        this.props.actions.getProducts(item.id);
    }
    render() {
        const { categories, currentCategory } = this.props;
        return (
            <div>
                <h3>
                    <Badge className="bg-warning text-dark">
                        Categories
                    </Badge>
                </h3>
                <ListGroup>
                    {
                        categories.map(item => (
                            <ListGroupItem
                                active={item.id === currentCategory.id}
                                onClick={() => this.selectCategory(item)} key={item.id}>
                                {item.categoryName}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
            changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
            getProducts: bindActionCreators(productActions.getProducts, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);