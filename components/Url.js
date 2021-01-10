import React from 'react';


export default function Url(props) {
        return (
            <div>
                <label htmlFor="name">Image Url:</label>
                <input
                    type="text"
                    name="url"
                    value={props.value}
                    className="form-control"
                    placeholder="e.g. https://cdn.pixabay.com/photo/2019/11/08/11/56/cat-4611189_960_720.jpg"
                    required={true}
                    onChange={props.onChange}
                />

                <style jsx>{`      `}</style>

            </div>
        )
}
