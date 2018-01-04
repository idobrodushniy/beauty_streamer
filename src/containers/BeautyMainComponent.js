import React, {Component} from 'react';
import amazon from '../amazon-product-api';
import {connect} from 'react-redux';
import {requestFilteredItems, addNewItemToCart} from './../actions/BeautyActions';
import AmazonItem from './../components/AmazonItem';
import ItemInCart from './../components/ItemInCart';

class BeautyMainComponent extends Component {
    state = {
        keywords: '',
    }

    onClickToFilter = (event) => {
        if (this.state.keywords.length < 1) {
            return;
        }
        var client = amazon.createClient({
            awsId: "AKIAJ4HL7C5FSZSHJZ4A",
            awsSecret: "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",
            awsTag: "upworktest-20"
        });
        this.props.requestFilteredItems(client, this.state.keywords);
    }
    onChangeKeywords = (event) => {
        this.setState({keywords: event.target.value});
    }

    render() {
        let itemId = 0;
        return (
            <div className="main-block">
                <div className="content-block">
                    <div className="content-block--header">
                        <div><h3>Create Your Product Profile</h3></div>
                        <div>
                            <button>Save and continue</button>
                        </div>
                    </div>
                    <div className="content-block--panes">
                        <div className="left-pane">
                            <div className="input--block">
                                <input value={this.state.keywords} onChange={this.onChangeKeywords} type="text"
                                       placeholder="Enter a name of product"/>
                                <button onClick={this.onClickToFilter}>Find</button>
                            </div>
                            <div className="left-pane--items">
                                {this.props.filtered_items.map(
                                    (el) => (
                                        <AmazonItem addNewItemToCart={this.props.addNewItemToCart} item={el}
                                                    key={el.ASIN[0]}/>
                                    )
                                )}
                            </div>
                        </div>
                        <div className="right-pane">
                            <div className="right-pane--header">
                                <span>Your product Profile:</span>
                            </div>
                            {this.props.user_checkout.map(
                                (el) => {
                                    itemId++;
                                    return <ItemInCart key={itemId} item={el}/>
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        user_checkout: state.beautyReducer.user_checkout,
        filtered_items: state.beautyReducer.filtered_items,
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        requestFilteredItems: (client, keyword) => {
            dispatch(requestFilteredItems(client, keyword));
        },
        addNewItemToCart: (item) => {
            dispatch(addNewItemToCart(item));
        },
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(BeautyMainComponent);