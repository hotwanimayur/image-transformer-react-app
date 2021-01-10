import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { changeImageFormat } from '../../services/UserService'
import Home from '../../components/Home'
import Url from '../../components/Url'

export default class ChangeImageFormat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: null,
            format: null,
            img_src: null,
            showImage: false,
            responseData: null
        }
        this.onChange = this.onChange.bind(this);
        this.handleChangeImageFormat = this.handleChangeImageFormat.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleChangeImageFormat = async (event) => {
        event.preventDefault();
        let formatParams = {
            url: this.state.url,
            format: this.state.format
        }
        let response = await changeImageFormat(formatParams);
        let base64Flag = 'data:image/jpeg;base64, ';
        response.data.error ? this.setState({showImage : false, responseData: response.data.error}) : this.setState({ img_src: base64Flag + response.data, showImage: true });
    }

    render() {
        return (
            <div className="container">
                <br /><br />
                <legend><left><h1><b>Change Image Format</b></h1></left></legend><br />
                <form onSubmit={this.handleChangeImageFormat}>
                    <div className="form-group row">
                        <div className="form-group col-md-7">
                            <Url
                                value={this.state.url}
                                onChange={this.onChange} >
                            </Url>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="form-group col-md-4">
                            <label htmlFor="name">Enter Format:</label>
                            <input
                                type="text"
                                name="format"
                                value={this.state.format}
                                className="form-control"
                                placeholder="png, jpg, tiff, raw"
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
                                Convert Image
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