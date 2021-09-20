import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, Table } from 'reactstrap';
import { bindActionCreators } from 'redux'
import * as productActions from "../../redux/actions/productActions"


class ProductList extends Component {

    componentDidMount() {
        this.props.actions.getProducts();
    }

    render() {
        const { currentCategory, products } = this.props;
        return (
            <div>
                <h3>
                    <Badge className="bg-warning text-dark">
                        Products
                    </Badge>
                    <Badge className="bg-success">
                        {currentCategory.categoryName}
                    </Badge>
                </h3>
                <div>
                    <Table dark>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Unit Price</th>
                                <th>Quantity Per Unit</th>
                                <th>Units In Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(item => (
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.productName}</td>
                                    <td>{item.unitPrice}</td>
                                    <td>{item.quantityPerUnit}</td>
                                    <td>{item.unitsInStock}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        products: state.productListReducer
    }
}


function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(productActions.getProducts, dispatch)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
