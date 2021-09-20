import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, Table, Button } from 'reactstrap';
import { bindActionCreators } from 'redux'
import * as productActions from "../../redux/actions/productActions"
import * as cartActions from "../../redux/actions/cartActions"
import alertify from "alertifyjs"
class ProductList extends Component {

    componentDidMount() {
        this.props.actions.getProducts();
    }

    addToCart = (product) => {
        this.props.actions.addToCart({ quantity: 1, product })
        alertify.success(product.productName + " sepete eklendi.")
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
                                <th></th>
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
                                    <td>
                                        <Button className="bg-success" onClick={() => this.addToCart(item)}>
                                            +
                                        </Button>
                                    </td>
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
            getProducts: bindActionCreators(productActions.getProducts, dispatch),
            addToCart: bindActionCreators(cartActions.addToCart, dispatch)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
