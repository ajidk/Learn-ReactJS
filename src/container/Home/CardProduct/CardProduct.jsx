import React, { Component } from "react";

class CardProduct extends Component {
    state = {
        order: 4,
        name: 'ajidk'
    }

    handleCounterChange = (value) => {
        this.props.onCounterChange(value);
    }

    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order)
            })

        }
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })
    }

    render(){
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/AU_0809_parting10.jpg" alt="thumb-prod"/>
                </div>
                <p className="product-title">Daging Ayam Berbumbu Rasa Pedas plus Tepung Crispy [isi 9 Pcs]</p>
                <p className="product-price">Rp 50,000</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order} readOnly />
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
        )
    }
}

export default CardProduct;
