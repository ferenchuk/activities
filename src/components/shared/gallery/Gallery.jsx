import React, { Component } from 'react';
import shortId from 'shortid';
import CloseIcon from './../../../icons/Close';

class Gallery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeIndex: 0
        }

        this.setActiveImage = this.setActiveImage.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }
    

    setActiveImage(index) {
        this.setState({activeIndex: index})
    }
    

    handleOutsideClick(e) {
        if (!this.node.contains(e.target)) {
            this.props.onCancel();
            return;
        }
    }

    render() {
        const { images } = this.props;
        const { activeIndex } = this.state;

        return (
            <div className="modal animated fadeIn faster" onClick={this.handleOutsideClick}>
                <div className="modal-container" ref={node => this.node = node}>
                    <span className="modal-close" onClick={this.props.onCancel}><CloseIcon /></span>
                    <div className="active-image">
                    {images.map((image, index) => (
                            <img src={image} key={shortId.generate()} className={activeIndex === index ? 'active animated fadeIn faster' : 'animated fadeOut faster'} alt="" />
                        ))}
                    </div>
                    <div className="thumbnails">
                        {images.map((image, index) => (
                            <img src={image} key={shortId.generate()} onClick={() => (this.setActiveImage(index))} className={activeIndex === index ? 'active' : ''} alt="" />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery;
