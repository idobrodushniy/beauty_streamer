import React, {Component} from 'react';

export default class AmazonItem extends Component {
    onClickToAddToCart = (event) => {
        this.props.addNewItemToCart({
                name:this.props.item.ItemAttributes[0].Title?this.props.item.ItemAttributes[0].Title[0]: "No info",
                url:this.props.item.SmallImage ? this.props.item.SmallImage[0].URL : "",
                group:this.props.item.ItemAttributes[0].ProductGroup?this.props.item.ItemAttributes[0].ProductGroup[0]: "",
            }
        )
    }

    render() {
        return (
            <div className="amazon-item">
                <div className="amazon-item--image-block">
                    <img src={this.props.item.SmallImage ? this.props.item.SmallImage[0].URL : ""} alt="No image"/>
                </div>
                <div className="amazon-item--item-content">
                    {this.props.item.ItemAttributes[0].ProductGroup?this.props.item.ItemAttributes[0].ProductGroup[0]: ""}<br/>
                    {this.props.item.ItemAttributes[0].Title?this.props.item.ItemAttributes[0].Title[0]: "No info"}
                </div>
                <div className="amazon-item--add-to-cart">
                    <div onClick={this.onClickToAddToCart} className="circle">
                        <div className="bar horizontal"></div>
                        <div className="bar vertical"></div>
                    </div>
                </div>
            </div>
        )
    }
}