import React, { Component } from 'react';

import axios from 'axios';

export default class PhimInsert extends Component {

    state = {
        hinhAnh: {},
        maPhim: '',
        tenPhim: '',
        trailer:'',
        moTa:'',
        maNhom: 'GP01'
    }

    handleChange = (e) => {
        let target = e.target;
        if (target.name === 'hinhAnh') {
            this.setState({ hinhAnh: e.target.files[0] }, () => {
                console.log(this.state);
            });
        } else {
            this.setState({ [e.target.name]: e.target.value }, () => {
                console.log(this.state);
            });
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        var form_data = new FormData();
        for (var key in this.state) {

          
            form_data.append(key, this.state[key]);
            
        }
      
        axios({
            url: 'http://movie0706.cybersoft.edu.vn/api/quanlyphim/ThemPhimUploadHinh',
            method: 'POST',
            data: form_data,

        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err.response.data);
        })

    }



    render() {


        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} >
                    <h3 className="text-center">
                        THÊM PHIM MỚI - CYBERSOFT.EDU.VN
                    </h3>

                    <div className="form-group">
                        <label>Mã phim</label>
                        <input name="maPhim" className="form-control" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Tên phim</label>
                        <input name="tenPhim" className="form-control" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Trailer</label>
                        <input name="trailer" className="form-control" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Hình ảnh</label>
                        <input type="file" name="hinhAnh" className="form-control" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Mô tả</label>
                        <input name="moTa" className="form-control" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Mã nhóm</label>
                        <input name="maNhom" value="GP01" className="form-control" onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="form-control">Submit</button>

                </form>
            </div>
        )
    }
}
