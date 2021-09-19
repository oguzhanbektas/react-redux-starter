import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import CategoriyList from '../categories/CategoryList';
import ProductList from '../products/ProductList';

export default class Dashbord extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs="3">
                        <CategoriyList />
                    </Col>
                    <Col xs="9">
                        <ProductList />
                    </Col>
                </Row>
            </div>
        )
    }
}
