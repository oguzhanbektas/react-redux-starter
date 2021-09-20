import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as categoryActions from "../../redux/actions/categoryActions"

class CategoryList extends Component {
    componentDidMount() {
        this.props.actions.getCategories()
    }
    render() {
        const { categories } = this.props;
        return (
            <div>
                <h3> CategoriyList {categories.length} </h3>
                <ListGroup>
                    {
                        categories.map(item => (
                            <ListGroupItem key={item.id}>
                                {item.categoryName}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
                <h5>
                    Seçili Kategori : {this.props.currentCategory.categoryName}
                </h5>
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
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);