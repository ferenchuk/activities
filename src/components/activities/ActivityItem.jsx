import React, { Component } from 'react';
import ExpandIcon from './../../icons/Expand';

class ActivityItem extends Component {

    render() {
        const { name, description, images, price, dates } = this.props;
        const descriptionPreview = description.length > 200 ? description.slice(0, 200).concat('...') : description;

        return (
            <div className="activity-item">
                <div className="image-container" style={{
                    background: `url(${images[0]})`
                }}>
                    { images.length > 1 ? (
                        <div className="gallery-icon"><ExpandIcon /></div>
                    ) : '' }
                </div>
                <div className="activity-content">
                    <div className="description">
                        <h2>{name}</h2>
                        <p>{descriptionPreview}</p>
                    </div>
                    <div className="information">
                        <p>{dates[0]}</p>
                    </div>
                </div>
                <div className="price">
                    <span>{price}</span>
                    <div className="counter">

                    </div>
                </div>
            </div>
        )
    }
}

export default ActivityItem;
