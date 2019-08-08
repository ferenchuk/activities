import React, { Component } from 'react';

class Gallery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeIndex: 0
        }
    }

    render() {
        const { images } = this.props;
        const { activeIndex } = this.state;

        return (
            <div className="modal">
                <div className="modal-container">
                    Modal Gallery
                    <span onClick={this.props.onCancel}> Close</span>

                    <div className="thumbnails">
                        {images.map((image, index) => (
                            <img src={image} className={activeIndex === index ? 'active' : ''} alt="" />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery;
