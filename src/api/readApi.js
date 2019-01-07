import { initializeFirebase } from './initialize';

const api = initializeFirebase({
    version: '/v0',
    config: {
      databaseURL: 'https://hacker-news.firebaseio.com'
    }
});

export function prefetch(child, callback) {
    api.child(`${child}stories`).on('value', (snapshot) => {
        callback(null, snapshot.val())
    });
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
