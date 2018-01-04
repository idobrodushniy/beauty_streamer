import React,{Component} from 'react';

export default class ItemInCart extends Component {
    render() {
        return(
            <div className="item--in-cart">
                <div className="amazon-item--image-block">
                    <img src={this.props.item.url} alt="No image"/>
                </div>
                <div className="amazon-item--item-content">
                    {this.props.item.group} <br/>
                    {this.props.item.name}
                </div>
            </div>
        )
    }
}