import {createSelector} from 'reselect';

const PrimitiveGetUserData = (state) => {
    return state.UsersPage.users
}
export const GetUserData = createSelector(PrimitiveGetUserData,(users) => {
    return users.filter(u => true)
})
export const GetpageSize = (state) => {
    return state.UsersPage.pageSize
}
export const GettotalUsersCount = (state) => {
    return state.UsersPage.totalUsersCount
}
export const GetcurrentValue = (state) => {
    return state.UsersPage.currentValue
}
export const GetisFetching = (state) => {
    return state.UsersPage.isFetching
}
export const GetisProcessFollow = (state) => {
    return state.UsersPage.isProcessFollow
}








