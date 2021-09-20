import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    Badge
} from 'reactstrap';
import { bindActionCreators } from 'redux'
import * as cartActions from "../../redux/actions/cartActions"


class CartSummary extends Component {

    renderEmpty = () => {
        return (
            <NavItem>
                <NavLink>Sepetiniz boş.</NavLink>
            </NavItem>
        )
    }
    renderSummary = () => {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Sepetiniz
                </DropdownToggle>
                <DropdownMenu right>
                    {this.props.cart.map(item => (
                        <DropdownItem key={item.product.id}>
                            <Badge color="danger"
                                onClick={() => this.props.actions.removeFromCart(item.product)}
                            > X </Badge>
                            {item.product.productName}
                            <Badge color="success">   {item.quantity}</Badge>
                        </DropdownItem>
                    ))}
                    <DropdownItem divider />
                    <DropdownItem>
                        Sepete git
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
    render() {
        return (
            <div>
                {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);