import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

class ProductItem extends Component {
    static propTypes = {
        product: PropTypes.object.isRequired,
        removeProduct: PropTypes.func.isRequired,
        changeProductQuantity: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
    }

    handleMouseOver = () => {
        this.setState({ isMouseOver: true });
    };

    handleMouseOut = () => {
        this.setState({ isMouseOver: false });
    };

    handleOnIncrease = () => {
        const { changeProductQuantity } = this.props;
        const { product } = this.state;
        product.quantity = product.quantity + 1;
        changeProductQuantity(product);
    }

    handleOnDecrease = () => {
        const { changeProductQuantity } = this.props;
        const { product } = this.state;
        product.quantity = product.quantity - 1;
        changeProductQuantity(product);
    }

    render() {
        const { removeProduct } = this.props;
        const { product } = this.state;

        const classes = ['shelf-item'];

        if (!!this.state.isMouseOver) {
            classes.push('shelf-item--mouseover');
        }

        return (
            <Card>
                <div
                    className="shelf-item__del"
                    onMouseOver={() => this.handleMouseOver()}
                    onMouseOut={() => this.handleMouseOut()}
                    onClick={() => removeProduct(product)}
                />
                <CardContent>
                    <Typography color="textSecondary" gutterBottom variant="h4" component="h2">
                        <b>{this.props.product.pname}</b>
                    </Typography>
                    <Typography color="textSecondary" variant="h6" component="h2">
                        {this.props.product.pdescription}
                    </Typography><br/>
                    <Typography color="textSecondary" variant="h6" component="h2">
                        LKR {this.props.product.pprice}
                    </Typography><br/>

                </CardContent>
                        <button onClick={this.handleOnDecrease} disabled={product.quantity === 1 ? true : false} className="change-product-button">-</button>
                        <button onClick={this.handleOnIncrease} className="change-product-button">+</button>
                    </Card>
        );
    }
}

export default ProductItem;
