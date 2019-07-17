import { initializeFirebase } from './initialize';

const api = initializeFirebase({
    version: '/v0',
    config: {
      databaseURL: 'https://hacker-news.firebaseio.com'
    }
});


export function watchForUpdates(child, callback) {
    let ref = api.child(`${child}stories`)
    ref.on('value', (snapshot)=> {
        callback(null, snapshot.val())
    })
    return ()=> {
        ref.off()
    }
}

export function fetchPost(child) {
    return new Promise((res, reject) => {
        api.child(child).on('value', (snapshot)=> {
            const val = snapshot.val()
            res(val)
        }, reject)
    })
}

export function fetchPosts(ids) {
    return Promise.all(ids.map((id)=> fetchPost(`item/${id}`)));
}


export async function fetchRecursiveComments(postId) {
    let item =  await fetchPost(postId)
    item.comments = []
    if (item && item.kids) {
        item.kids.map(async kid => item.comments.push(await getMainComment(kid)))     
    }
    return item
}

export function fetchUser(slug) {
    return new Promise((resolve, reject) => {
        api.child(`user/${slug}`).on('value', (snapshot)=> {
            return resolve(snapshot.val())
        })
    })
    
}

