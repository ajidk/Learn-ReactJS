import React, { Component, Fragment } from "react";
import './Product.css'
import CardProduct from "../Home/CardProduct/CardProduct";

class Product extends Component {
    state = {
        order: 4,
        name: 'ajidk'
    }

    handleCounterChange(newValue){
        this.setState({
            order: newValue
        })
    }

    // handleMinus = () => {
    //     if (this.state.order > 0) {
    //         this.setState({
    //             order: this.state.order - 1
    //         })
    //     }
    // }

    // handlePlus = () => {
    //     this.setState({
    //         order: this.state.order + 1
    //     })
    // }

    render(){
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://etanee.id/static/media/enatee-logo-new68px.88b882ea.svg" alt="Etanee"/>
                    </div>
                    <div className="troley">
                        <img src="https://vellena.com/wp-content/uploads/2019/01/troli-png-2.png" alt="troley"/>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
                {/* <div className="card">
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
                </div> */}
            </Fragment>
        )
    }
}

export default Product;
