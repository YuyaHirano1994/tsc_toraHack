export default function promiseSample() {
    const url = "https://api.github.com/users/YuyaHirano1994"

    type Profile = {
        login: string
        id: number
    }

    type FetchProfile = () => Promise<Profile | null>

    const fetchProfilePromise:FetchProfile = () => {
        return new Promise((resolve, reject) => {
            return fetch(url)
            .then((res) => {
                res.json()
                .then((json) => {
                    console.log("async sample:" ,json)
                    resolve(json)
                })
                .catch((error) => {
                    console.error(error)
                    reject(null)
                })
            })
            .catch((error) => {
                reject(null)
            })
        })
    }

    fetchProfilePromise().then((profile: Profile | null) => {
            if (profile) {
                console.log("true",profile)
            }
        })

}
