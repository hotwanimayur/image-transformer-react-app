import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { resizeImage } from '../../services/UserService'
import Home from '../../components/Home'
import Url from '../../components/Url'

export default class ResizeImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: null,
            width: null,
            height: null,
            img_src: null,
            showImage: false,
            responseData: null
        }
        this.onChange = this.onChange.bind(this);
        this.handleResizeImage = this.handleResizeImage.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleResizeImage = async (event) => {
        event.preventDefault();
        let resizeParams = {
            url: this.state.url,
            w: this.state.width,
            h: this.state.height
        }
        let response = await resizeImage(resizeParams);
        let base64Flag = 'data:image/jpeg;base64, ';
        response.data.error ? this.setState({showImage : false, responseData: response.data.error}) : this.setState({ img_src: base64Flag + response.data, showImage: true });
    }

    render() {
        return (
            <div className="container">
                <br /><br />
                <legend><left><h1><b>Resize Image</b></h1></left></legend><br />
                <form onSubmit={this.handleResizeImage}>
                    <div className="form-group row">
                        <div className="form-group col-md-7">
                            <Url
                                value={this.state.url}
                                onChange={this.onChange} >
                            </Url>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="form-group col-md-2">
                            <label htmlFor="name">Enter Width:</label>
                            <input
                                type="text"
                                name="width"
                                value={this.state.width}
                                className="form-control"
                                placeholder="e.g. 200"
                                required="true"
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="name">Enter Height:</label>
                            <input
                                type="text"
                                name="height"
                                value={this.state.height}
                                className="form-control"
                                placeholder="e.g. 300"
                                required="true"
                                onChange={this.onChange}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="form-group col-md-2">
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Resize Image
                            </button>
                        </div>
                        <div className="form-group col-md-2">
                            <Home />
                        </div>
                    </div>
                    {this.state.showImage ? <center><img src={this.state.img_src}/></center> : <center><p><b> {this.state.responseData}</b></p></center>}
                </form>

                <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            background-color: aliceblue;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>

            </div>
        )
    }
}