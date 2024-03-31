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
    }).then ((res) => res.data)
    .catch(err => console.log(err)))
};