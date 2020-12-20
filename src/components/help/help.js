//USERS-PAGE

let userPhoto = 'https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg'
let PhotoURL = (m) => {
    if (m.photos.small) {
        return m.photos.small;
    }
    if (m.photos.large) {
        return m.photos.large;
    } else {
        return userPhoto;
    }
}

const HelpFollowUnfollow = (path,objProperty,actionValue,change) => {
    return path.map((u) => {
        if (u[objProperty] === actionValue) {
            return {...u, ...change}
        }
        return u;
    })
}



export { PhotoURL,HelpFollowUnfollow };