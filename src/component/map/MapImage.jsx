import React, {Component} from "react";
import categories from "../../constant/categories";

export default class MapImage extends Component {

    prepareIcon = (category) => {
        const size = 25;
        return {
            "top": `${(category.position.top)}`,
            "left": `${(category.position.left)}`,
            "background-size": "cover",
            "background-image": "url(" + `${(category.photos[0].src)}` + ")",
            "border-radius": size + "px",
            "border": "1px solid",
            "border-color": `${categories[(category.name)]}`,
            "width": size + "px",
            "height": size + "px",
            "position": "absolute",
        };
    };

    render() {
        return (
            <div style={this.prepareIcon(this.props.category)}/>
        );
    }
}