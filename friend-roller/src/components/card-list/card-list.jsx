import { Component } from "react";

class CardList extends Component {
    render() {
        const { friends } = this.props;
        // console.log(friends);

        return (
            <div>
                {friends.map( (friend) => (
                    <h1 key={friend.id}>{friend.name}</h1>
                ))}
            </div>
        )
    }
}

export default CardList;