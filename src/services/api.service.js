import { initializeFirebase } from './initialize';

const api = initializeFirebase({
    version: '/v0',
    config: {
      databaseURL: 'https://hacker-news.firebaseio.com'
    }
});


export function watchForUpdates(type, callback) {
    const ref = api.child(`${type}stories`)
    ref.on('value', (snapshot)=> {
        callback(null, snapshot.val())
    })
    return ()=> {
        ref.off()
    }
}

export function fetchItem(itemId) {
    return new Promise((resolve, reject)=> {
        api.child(`item/${itemId}`).on('value', (snapshot)=> {
            resolve(snapshot.val())
        }, reject)
    })
}

function fetchItemsIds(type) {
    const ref = api.child(`${type}stories`)
    ref.on('value', (snapshot)=> {
        resolve(snapshot.val())
    }, reject)
}

export async function fetchItems(type) {
    const ids = await fetchItemsIds(type)
    return Promise.all(ids.map(id => fetchItem(id)))
}

export async function fetchComments(itemId) {
    const item =  await fetchItem(itemId)
    item.comments = []
    if (item && item.kids) {
        item.kids.map(async kid => item.comments.push(await fetchComments(kid)))     
    }
    return item
}

export function fetchUser(slug) {
    return new Promise((resolve, reject) => {
        api.child(`user/${slug}`).on('value', (snapshot)=> {
            return resolve(snapshot.val())
        }, reject)
    })
}