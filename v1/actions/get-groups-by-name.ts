import { getGroupsByName } from '../common/utils'
import { makeError } from "@skitter/automation-utils";
export const input = [
    {
      key: "group name",
      displayTitle: "group name",
      description: "Provide group name.",
      required: true,
      config: { kind: "text" }
    }
  ];
  const errors = {
      INVALID_URL:"Invalid URL or Group name doesn't exist",
      INVALID_USER: "username, password Invalid or unAuthorized user",
      INVALID_DOMAIN_URL:"This URL doesn't exist on the server. Verify that the URL is correct"
    }
type AuthT = {
    auth : {
    domain : string;
    username : string;
    password : string
    }
}

type ExecuteInfo = AuthT & {groupName : string};

export const execute = async(input: ExecuteInfo) => {
    try{
        console.log(input)
    let dataList = await getGroupsByName(input.auth.domain, input.groupName, input.auth.username, input.auth.password)
    let list = dataList.data
    return {list,action_success: true}
}
    catch(err){
        let error = err.response
        if(err.code == "ENOTFOUND"){
            throw makeError("ENOTFOUND","Invalid Domain URL")
        }
        else if(err.code == "ETIMEDOUT"){
            throw makeError("ETIMEDOUT","Timed out, Please check the URL")
        }
        else if(err.code == "ECONNREFUSED"){
            throw makeError("ECONNREFUSED","URL cannot be blank or Connection issue, Please check the URL")
        }
        else if(error !== undefined){
        if(error.status == 403){
            throw makeError("INVALID_DOMAIN_URL",errors.INVALID_DOMAIN_URL)
        }
        if(error.status == 404){
            throw makeError("INVALID_URL",errors.INVALID_URL)
        }
        if(error.status == 401){
            throw makeError("INVALID_USER",errors.INVALID_USER)
        }
    }
    // return err.response;
        // throw makeError("TRY AGAIN", "Please try again")
    }
}
execute({
    auth : {
        domain : "https://testsample.jamfcloud.com",
        password : "Skitter@123",
        username : "ashok"
    },
    groupName:"Hello", 
    
}).then(res =>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})