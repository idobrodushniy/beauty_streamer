import React, {Component} from 'react';
import amazon from '../amazon-product-api';
import {connect} from 'react-redux';

const mapStateToProps = (state) => (
    {
        user_checkout: state.beautyReducer.user_checkout,
        filtered_items: state.beautyReducer.filtered_items,
    }
)

class BeautyMainComponent extends Component {
    componentWillMount = () => {
        var client = amazon.createClient({
            awsId: "AKIAJ4HL7C5FSZSHJZ4A",
            awsSecret: "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",
            awsTag: "upworktest-20"
        });
        console.log(client);
        this.requestSomeValue(client);
    }
    requestSomeValue = async (client) => {
        try {
            let result = await client.itemSearch({
                searchIndex: 'book',
                audienceRating: 'R',
                responseGroup: 'ItemAttributes,Offers,Images'
            })
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        console.log(this.props)
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
                            <input type="text" placeholder="Enter a name of product"/>
                            <button>Find</button>
                        </div>
                        <div className="right-pane">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(BeautyMainComponent);