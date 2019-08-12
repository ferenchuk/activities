import React, { Component } from 'react';
import ExpandIcon from './../../icons/Expand';
import Gallery from './../shared/gallery/Gallery';
import Counter from './../shared/counter/Counter';

class ActivityItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGallery: false,
      readMore: false
    };

    this.toggleShowGallery = this.toggleShowGallery.bind(this);
    this.toggleReadMore = this.toggleReadMore.bind(this);
  }

  toggleShowGallery() {
    const { showGallery } = this.state;
    this.setState({showGallery: !showGallery});
  }

  toggleReadMore() {
    const { readMore } = this.state;
    this.setState({readMore: !readMore});
  }

  render() {
    const { name, description, images, price, dates, popular } = this.props;
    const { showGallery, readMore } = this.state;
    const descriptionPreview = description.length > 200 ? description.slice(0, 200).concat('...') : description;

    return (
      <div className={`activity-item ${readMore ? 'full' : ''}`}>
        <div className="image-container" style={{
          background: `url(${images[0]})`
        }}>
          {images.length > 1 ? (
            <div className="gallery-icon" onClick={this.toggleShowGallery}><ExpandIcon/></div>
          ) : ''}
        </div>
        <div className="activity-content">
          <div className="description">
            <h2>{name}</h2>
            <p>{readMore ? description : descriptionPreview}</p>
          </div>
          <div className="information">
            <span>{dates[0]}</span>
            {description.length > 200 && (<span className="read-more-btn" onClick={this.toggleReadMore}>{ readMore ? 'Show Less' : 'Read more'}</span>)}
          </div>
        </div>
        <div className="price-block">
          {popular && (<div className="popular">Popular</div>)}
          <div className="price-value">
            <span className="price-block-value">{`+${price} $`}</span>
            <Counter/>
          </div>
        </div>
        {showGallery && <Gallery images={images} onCancel={this.toggleShowGallery}/>}
      </div>
    )
  }
}

export default ActivityItem;
