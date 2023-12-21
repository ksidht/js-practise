
export default function this_keyword() {


  




  /* QUE1 */

  // const user = {
  //   firstName : "Siddharth",
  //   getDetails() {
  //     const firstName = "Kamble";

  //     console.log("user", this)

  //     function userFun() {
  //       console.log("userFun", this)
  //     }

  //     userFun()

  //     const userSid = {

  //       firstNameTwo : "Siddharth",

  //       getDetailsTwo() {
  //         console.log("userSid", this)
  //       }

  //     }

  //     return userSid

  //   }
  // }

  // console.log(user.getDetails().getDetailsTwo())


  /* QUE 2 */

  function makeuser() {
    return {
      name: "John",
      ref: this
    }
  }

  let user = makeuser()
  console.log(user)


}