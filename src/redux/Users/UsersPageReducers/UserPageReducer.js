import {getFollow, getUnFollow, getUsers} from "../../../components/DAL/api";
import {HelpFollowUnfollow} from "../../../components/help/help";

const Follow = 'FOLLOW';
const UnFollow = 'UN-FOLLOW';
const setUsers = 'SET-USERS';
const SetCurrentPage = 'SET-CURRENT-PAGE';
const SetTotalCount = 'SET-TOTAL-COUNTS';
const SetFetching = 'SET-FETCHING';
const SetFetchingFollow = 'SET-FETCHING-FOLLOW';
const SetTermUsers = 'USERS-SET-TERM-USERS'
const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: null,
    currentValue: 1,
    isFetching: false,
    isProcessFollow: [],
    term: ''
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case Follow: {
            return {
                ...state,
                users: HelpFollowUnfollow(state.users, "id", action.userId, {followed: true})
            };
        }

        case UnFollow: {
            return {
                ...state,
                users: HelpFollowUnfollow(state.users, "id", action.userId, {followed: false})
            };
        }

        case setUsers: {
            return {
                ...state,
                users: action.users
            }
        }
        case SetCurrentPage: {
            return {
                ...state,
                currentValue: action.pageNumber
            }
        }
        case SetTotalCount: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case SetFetching: {
            return {
                ...state,
                isFetching: action.fetch
            }
        }
        case SetFetchingFollow: {
            return {
                ...state,
                isProcessFollow: action.fetchFollow ? [...state.isProcessFollow, action.userId] :
                    state.isProcessFollow.filter(id => id != action.userId)
            }
        }
        case SetTermUsers:
            return {
                ...state,
                term: action.newTerm
            }
        default: {
            return state;
        }

    }
};

let follow = (userId) => {
    return {
        type: 'FOLLOW', userId
    }
};
let unFollow = (userId) => {
    return {
        type: 'UN-FOLLOW', userId
    }
};
let setUser = (users) => {
    return {
        type: 'SET-USERS', users
    }
};
let setPage = (pageNumber) => {
    return {
        type: 'SET-CURRENT-PAGE', pageNumber
    }
}
let setTotalCount = (totalUsersCount) => {
    return {
        type: 'SET-TOTAL-COUNTS', totalUsersCount
    }
}
let setFetching = (fetch) => {
    return {
        type: 'SET-FETCHING', fetch
    }
}
let setFetchingFollow = (userId, fetchFollow) => {
    return {
        type: 'SET-FETCHING-FOLLOW', fetchFollow, userId
    }
}
let setTermUsers = (newTerm) => {
    return{
        type:SetTermUsers,newTerm
    }
}
const GetUsers = (UserData, currentValue) => async (dispatch) => {
    dispatch(setFetching(true));
    if (UserData.length === 0) {
        let data = await getUsers(currentValue, initialState.pageSize,initialState.term)
        dispatch(setUser(data.items));
        dispatch(setTotalCount(data.totalCount));
        dispatch(setFetching(false));
    }
}
const OnPageChanged = (setPage, PageNumber, setFetching, PageSize, setUser,term) => async (dispatch) => {
    dispatch(setPage(PageNumber));
    dispatch(setFetching(true))
    let data = await getUsers(PageNumber, PageSize,term)
    dispatch(setFetching(false))
    dispatch(setUser(data.items))
}
let FollowAndUnFollow = async (dispatch, getFetch, id, fetch, setFetchingFollow) => {
    let data = await getFetch(id)
    if (data.resultCode === 0) {
        dispatch(fetch(id))
        dispatch(setFetchingFollow)
    }
}
const Followed = (id, fetch, setFetchingFollow) => async (dispatch) => {
    FollowAndUnFollow(dispatch, getFollow, id, fetch, setFetchingFollow)
}
const UnFollowed = (id, fetch, setFetchingFollow) => async (dispatch) => {
    FollowAndUnFollow(dispatch, getUnFollow, id, fetch, setFetchingFollow)

}

const OnClickFetch = async (setFetchingFollow, id, GetUnFollow) => (dispatch) => {
    dispatch(setFetchingFollow)
}
export const setTerm = (newTerm) => async(dispatch) => {
    dispatch(setFetching(true))
    let data = await getUsers(initialState.currentValue, initialState.pageSize,newTerm)
    dispatch(setTermUsers(newTerm));
    dispatch(setUser(data.items));
    dispatch(setTotalCount(data.totalCount));
    dispatch(setFetching(false))
}

export {
    UserReducer,
    follow,
    unFollow,
    setUser,
    setPage,
    setTotalCount,
    setFetching,
    setFetchingFollow,
    GetUsers,
    OnPageChanged,
    Followed,
    UnFollowed,
    OnClickFetch
}