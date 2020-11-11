/**
 * @jest-environment node
 */

import {execute} from '../actions/get-groups-by-name'

describe("Get Groups by Name", () => {
    it("Get Groups by Name", async () => {
      const input = {
        groupName: "Hello",
        auth: {
          username: "ashok",
          password: "Skitter@123",
          domain: "https://testsample.jamfcloud.com"
        }
      };
      try{
      const res = await execute(input);
      console.log("res",res)
      expect(res.action_success).toBe(true);
      }
      catch(err){
        console.log("err",err)
      }
    },50000)});