import React, {Component} from "react";
import categories from "../../constant/categories";
import {collections} from "../../constant/collections";

export default class MapImage extends Component {

    prepareIcon = (category) => {
        const size = 25;
        return {
            "top": `${(category.position.top)}`,
            "left": `${(category.position.left)}`,
            "background-size": "cover",
            "background-image": "url(" + `${(category.photos[0].src)}` + ")",
            "border-radius": '50%',
            "border": "1px solid",
            "border-color": `${categories[(category.name)]}`,
            "width": size + "px",
            "height": size + "px",
            "position": "absolute",
        };
    };

    render() {
        const {category} = this.props;
        return (
            <div onClick={() => this.props.onCollectionSelect(collections.indexOf(category))}
                 style={this.prepareIcon(category)}/>
        );
    }
}
