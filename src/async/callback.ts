export default function callbackSample() {
    const URL = "https://api.github.com/users/YuyaHirano1994"


    //callback async function
    const fetchProfile = () => {
        fetch(URL)
            .then((res) => {
                //read res body for result
                res.json()
                .then((json) => {
                    console.log("async sample:" ,json)
                    return json
                })
                .catch((error) => {
                    console.error(error);
                })
            })

            .catch((error) => {
                console.error(error)
            })
            
    }

    const profile = fetchProfile()
    console.log("async sample:2" ,profile)

}
