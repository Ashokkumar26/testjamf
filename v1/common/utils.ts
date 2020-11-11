import axios from "axios";

export interface UserGroupByName {
    user_group: UserGroup
  }
  
  export interface UserGroup {
    id: number
    name: string
    is_smart: boolean
    is_notify_on_change: boolean
    site: Site
    criteria: any[]
    users: User[]
  }
  
  export interface Site {
    id: number
    name: string
  }
  
  export interface User {
    id: number
    username: string
    full_name: string
    phone_number: string
    email_address: string
  }
  

export const getGroupsByName = (mainUrl,groupName, username, password) =>
 axios.get<UserGroupByName>(`${mainUrl}/JSSResource/usergroups/name/${groupName}`,{
     auth : {username,password}});