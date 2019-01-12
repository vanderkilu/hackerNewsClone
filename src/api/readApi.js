import { initializeFirebase } from './initialize';

const api = initializeFirebase({
    version: '/v0',
    config: {
      databaseURL: 'https://hacker-news.firebaseio.com'
    }
});


export function prefetch(child, callback) {
    let ref = api.child(`${child}stories`)
    ref.on('value', (snapshot)=> {
        callback(null, snapshot.val())
    })
    return ()=> {
        ref.off()
    }
}

export function processIds(child) {
    return new Promise((res, reject) => {
        api.child(child).on('value', (snapshot)=> {
            const val = snapshot.val()
            res(val)
        }, reject)
    })
}

export function fetch(ids) {
    return Promise.all(ids.map((id)=> processIds(`item/${id}`)));
}

export function getItem(id) {
    return new Promise((resolve, reject)=> {
        api.child(`item/${id}`).on('value', (snapshot) => {
            let comment = snapshot.val()
            return resolve(comment)
        })
    })
}

export async function getMainComment(itemId) {
    let item =  await getItem(itemId)
    item.comments = []
    if (item && item.kids) {
        item.kids.map(async kid => item.comments.push(await getMainComment(kid)))     
    }
    return item
}

