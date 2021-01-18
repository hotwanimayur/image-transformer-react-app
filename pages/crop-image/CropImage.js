import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { cropImage } from '../../services/UserService'
import Home from '../../components/Home'
import Url from '../../components/Url'

export default class CropImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: null,
            leftOffset: null,
            topOffset: null,
            cropRegionwidth: null,
            cropRegionheight: null,
            img_src: null,
            showImage: false,
            responseData: null
        }
        this.onChange = this.onChange.bind(this);
        this.handleCropImage = this.handleCropImage.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleCropImage = async (event) => {
        event.preventDefault();
        let cropParams = {
            url: this.state.url,
            leftOffset: this.state.leftOffset,
            topOffset: this.state.topOffset,
            cropRegionwidth: this.state.cropRegionwidth,
            cropRegionheight: this.state.cropRegionheight
        }
        let response = await cropImage(cropParams);
        let base64Flag = 'data:image/jpeg;base64, ';
        response.data.error ? this.setState({ showImage: false, responseData: response.data.error }) : this.setState({ img_src: base64Flag + response.data, showImage: true });
    }

    render() {
        return (
            <div className="container">
                <br /><br />
                <div className="form-group row">
                    <div className="form-group col-md-3">
                        <legend><left><h1><b>Crop Image</b></h1></left></legend><br />
                    </div>
                    <div className="form-group col-md-3">
                        <Home />
                    </div>
                </div>
                <form onSubmit={this.handleCropImage}>
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
                            <label htmlFor="name">Enter Left Offset:</label>
                            <input
                                type="text"
                                name="leftOffset"
                                value={this.state.leftOffset}
                                className="form-control"
                                placeholder="e.g. 20"
                                required
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="name">Enter Top Offset:</label>
                            <input
                                type="text"
                                name="topOffset"
                                value={this.state.topOffset}
                                className="form-control"
                                placeholder="e.g. 30"
                                required
                                onChange={this.onChange}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="form-group col-md-2">
                            <label htmlFor="name">Enter Crop Region Width:</label>
                            <input
                                type="text"
                                name="cropRegionwidth"
                                value={this.state.cropRegionwidth}
                                className="form-control"
                                placeholder="e.g. 20"
                                required
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="name">Enter Crop Region Height:</label>
                            <input
                                type="text"
                                name="cropRegionheight"
                                value={this.state.cropRegionheight}
                                className="form-control"
                                placeholder="e.g. 30"
                                required
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
                                Crop Image
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