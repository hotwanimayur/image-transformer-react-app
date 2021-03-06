import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { applyGrayScaleFilter } from '../../services/UserService'
import Home from '../../components/Home'
import Url from '../../components/Url'

export default class ApplyGrayscaleFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: null,
            showImage: false,
            responseData: null
        }
        this.onChange = this.onChange.bind(this);
        this.handleGrayScaleFilter = this.handleGrayScaleFilter.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleGrayScaleFilter = async (event) => {
        event.preventDefault();
        let grayscaleParams = {
            url: this.state.url,
            greyscale: "true"
        }
        let response = await applyGrayScaleFilter(grayscaleParams);
        let base64Flag = 'data:image/jpeg;base64, ';
        response.data.error ? this.setState({ showImage: false, responseData: response.data.error }) : this.setState({ img_src: base64Flag + response.data, showImage: true });
    }

    render() {
        return (
            <div className="container">
                <br /><br />
                <div className="form-group row">
                    <div className="form-group col-md-5">
                        <legend><left><h1><b>Apply GrayScale Filter</b></h1></left></legend><br />
                    </div>
                    <div className="form-group col-md-3">
                        <Home />
                    </div>
                </div>
                <form onSubmit={this.handleGrayScaleFilter}>
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
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Apply Grayscale
                            </button>
                        </div>
                    </div>
                    {this.state.showImage ? <center><img src={this.state.img_src} /></center> : <center><p><b> {this.state.responseData}</b></p></center>}
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