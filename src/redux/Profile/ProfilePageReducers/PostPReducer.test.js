import {DeletePost, PostReducer, SetPostUser} from "./PostPageReducer";
import tayler from "../../../IMAGES/tayler.png";
import manson from "../../../IMAGES/marilynManson.jpg";
let state = {
    Posts: [
        {id: 1, name: 'Tyler', comment: 'Не разбив яиц, омлет не приготовишь.', img: tayler},
        {id: 2, name: 'Manson', comment: 'Rock lalala', img: manson}
    ]
}
it('length of posts should be incremented',() => {
    //Test Data
    let action = SetPostUser('Hi! Im here');

    //reducer
    let newState = PostReducer(state,action)
    // expectetion
    expect(newState.Posts.length).toBe(3)
})
it('length of posts should be decremented',() => {
    //Test Data
    let action = DeletePost(2)
    //NewState
    let newState = PostReducer(state,action)
    //expectetion
    expect(newState.Posts.length).toBe(1)
})
it('length of posts should be no changed,because incorrect transmitted id',() => {
    //Test Data
    let action = DeletePost(1000)
    //NewState
    let newState = PostReducer(state,action)
    //expectetion
    expect(newState.Posts.length).toBe(2)
})
