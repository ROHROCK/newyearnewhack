import React, { Component } from "react";
import { FacebookIcon, TwitterIcon, WhatsappIcon, EmailIcon, LinkedinIcon } from 'react-share';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, EmailShareButton, LinkedinShareButton } from 'react-share'

class ShareComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: "https://newyearnewhack.web.app/",
            message: 'This is my 2021 fortune \n',
            hashtag: "#NewYearNewHack",
            subject: 'My Fortune for 2021',
            title: 'Fortune Teller'
        }
    }
    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div >
                <FacebookShareButton
                    style={{ padding: '0 3px' }}
                    url={this.state.url}
                    quote={this.state.message + this.props.fortuneMessage}
                    hashtag={this.state.hashtag}>
                    <FacebookIcon iconFillColor="white" size="50px" round={true} />
                </FacebookShareButton>
                <TwitterShareButton
                    style={{ padding: '0 3px' }}
                    url={this.state.url}
                    title={this.state.message + this.props.fortuneMessage}
                    hashtag={this.state.hashtag}>
                    <TwitterIcon iconFillColor="white" size="50px" round={true} />
                </TwitterShareButton>
                <WhatsappShareButton
                    style={{ padding: '0 3px' }}
                    url={this.state.url}
                    title={this.state.message + this.props.fortuneMessage}
                >
                    <WhatsappIcon size="50px" round={true} />
                </WhatsappShareButton>
                <EmailShareButton
                    style={{ padding: '0 3px' }}
                    subject={this.state.subject}
                    body={this.state.message + this.props.fortuneMessage + this.state.url}
                >
                    <EmailIcon size="50px" round={true} />
                </EmailShareButton>
                <LinkedinShareButton
                    style={{ padding: '0 3px' }} 
                    title={this.state.title}
                    summary={this.state.message + this.props.fortuneMessage}
                    source={this.state.url}
                >
                    <LinkedinIcon size="50px" round={true} />
                </LinkedinShareButton>

            </div>
        );
    }
}
export default ShareComponent;