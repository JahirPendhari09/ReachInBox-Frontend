import axios from "axios";

let token = localStorage.getItem("reachinbox-auth");
token = token ? JSON.parse(token) : "";
console.log("token :-", token)
// const token = JSON.parse(localStorage.getItem('reachinbox-auth') || "")
export const getMailList = ()=> {
    return (axios.get('https://hiring.reachinbox.xyz/api/v1/onebox/list',{
        headers: {
            'authorization': `Bearer ${token}`
        }
    }).then ((res) => res.data.data)
    .catch(err => console.log(err)))
};

export const getMailMasseges = (id:number)=> {
    return (axios.get(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${id}`,{
        headers: {
            'authorization': `Bearer ${token}`
        }
    }).then ((res) => res.data.data)
    .catch(err => console.log(err)))
};

export const postMailMasseges = (id:number,messages:any)=> {
    return axios.post(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${id}`, messages ,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then((res) => {
        console.log("Posted:", res.data);
        return res.data; 
    })
    .catch(err => {
        console.error("Error:", err);
        throw err; 
    });
};